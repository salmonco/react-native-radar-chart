import React, {useMemo} from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Polygon, Text} from 'react-native-svg';
import {getGradientColors} from './getGradientColors';

export type RadarData = {
  label: string;
  value: number;
};

export type GradientColor = {
  startColor: string;
  endColor: string;
  count: number;
};

export type RadarChartProps = {
  data: RadarData[];
  size?: number;
  scale?: number;
  maxValue?: number;
  fillColor?: string;
  fillOpacity?: number;
  gradientColor?: GradientColor;
  stroke?: string[];
  strokeWidth?: number[];
  strokeOpacity?: number[];
  labelSize?: number;
  labelColor?: string;
  labelFontFamily?: string;
  labelDistance?: number;
  dataFillColor?: string;
  dataFillOpacity?: number;
  dataStroke?: string;
  dataStrokeWidth?: number;
  dataStrokeOpacity?: number;
  divisionStroke?: string;
  divisionStrokeWidth?: number;
  divisionStrokeOpacity?: number;
  isCircle?: boolean;
};

type Point = [number, number];

export default ({
  data,
  size = 330,
  scale = 1,
  maxValue = Math.max(...data.map(v => v.value)),
  fillColor,
  fillOpacity,
  gradientColor,
  stroke = [],
  strokeWidth = [],
  strokeOpacity = [],
  labelSize,
  labelColor,
  labelFontFamily,
  labelDistance = 1.15,
  dataFillColor,
  dataFillOpacity,
  dataStroke,
  dataStrokeWidth,
  dataStrokeOpacity,
  divisionStroke,
  divisionStrokeWidth,
  divisionStrokeOpacity,
  isCircle,
}: Readonly<RadarChartProps>) => {
  const axesCnt = data.length;
  const internalAreaCnt = gradientColor ? gradientColor.count : 4;
  const degreesBetweenAxes = 360 / axesCnt;
  const viewBoxSize = scale === 0 ? 0 : size / scale;
  const viewBoxCenter = viewBoxSize * 0.5;
  const radius = size * 0.35;
  const gradients = gradientColor
    ? getGradientColors(
        gradientColor.startColor,
        gradientColor.endColor,
        gradientColor.count,
      )
    : [];

  const degToRadians = (degrees: number) => degrees * (Math.PI / 180);
  const svgY = (degrees: number) => degrees + 180;

  const calculateEdgePoint = useMemo(() => {
    return (index: number, scale: number = 1): Point => {
      const degree =
        index * degreesBetweenAxes - degreesBetweenAxes * 0.75 * axesCnt;
      const degreeInRadians = degToRadians(degree);
      const degreeInRadiansY = degToRadians(svgY(degree));
      return [
        viewBoxCenter + Math.cos(degreeInRadians) * radius * scale,
        viewBoxCenter + Math.sin(degreeInRadiansY) * radius * scale,
      ];
    };
  }, [viewBoxCenter, radius, degreesBetweenAxes, axesCnt]);

  return (
    <View
      style={{
        width: size,
        height: size,
      }}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {Array.from(
          {length: internalAreaCnt},
          (_, i) => internalAreaCnt - i - 1,
        ).map(v => {
          if (isCircle) {
            return (
              <Circle
                key={`circle_outline_${v}`}
                cx={viewBoxCenter}
                cy={viewBoxCenter}
                r={(v + 1) * (radius / internalAreaCnt)}
                stroke={stroke[v] ?? 'white'}
                strokeWidth={strokeWidth[v] ?? 0.5}
                strokeOpacity={strokeOpacity[v] ?? 1}
                fill={gradients[v] ?? fillColor ?? 'salmon'}
                fillOpacity={fillOpacity ?? 1}
              />
            );
          } else {
            const points = Array.from({length: axesCnt}, (_, i) => {
              const edgePoint = calculateEdgePoint(
                i,
                (v + 1) / internalAreaCnt,
              );
              return `${edgePoint[0]},${edgePoint[1]}`;
            }).join(' ');
            return (
              <Polygon
                key={`polygon_outline_${v}`}
                points={points}
                stroke={stroke[v] ?? 'white'}
                strokeWidth={strokeWidth[v] ?? 0.5}
                strokeOpacity={strokeOpacity[v] ?? 1}
                fill={gradients[v] ?? fillColor ?? 'salmon'}
                fillOpacity={fillOpacity ?? 1}
              />
            );
          }
        })}
        {Array.from({length: axesCnt}, (_, i) => (
          <Line
            key={`crosshair_${i}`}
            x1={viewBoxCenter}
            y1={viewBoxCenter}
            x2={calculateEdgePoint(i)[0]}
            y2={calculateEdgePoint(i)[1]}
            stroke={divisionStroke ?? 'white'}
            strokeWidth={divisionStrokeWidth ?? 1}
            strokeOpacity={divisionStrokeOpacity ?? '0.5'}
          />
        ))}
        <Polygon
          fill={dataFillColor ?? 'green'}
          fillOpacity={dataFillOpacity ?? 1}
          stroke={dataStroke ?? undefined}
          strokeWidth={dataStrokeWidth ?? 1}
          strokeOpacity={dataStrokeOpacity ?? 1}
          points={`${data.map((r, i) => {
            const edgePoint = calculateEdgePoint(i, r.value / maxValue);
            return `${edgePoint[0]},${edgePoint[1]}`;
          })}`}
        />
        {data.map((r, i) => {
          const edgePoint = calculateEdgePoint(i, labelDistance);
          const fontSize = labelSize ?? 16;
          const color = labelColor ?? 'black';
          const fontFamily = labelFontFamily ?? 'Inter';
          const symmetricY = edgePoint[1] + fontSize / 2;
          return (
            <Text
              key={`label_${r.label}`}
              x={edgePoint[0]}
              y={symmetricY}
              textAnchor="middle"
              fontSize={fontSize}
              fill={color}
              fontFamily={fontFamily}>
              {r.label}
            </Text>
          );
        })}
      </Svg>
    </View>
  );
};
