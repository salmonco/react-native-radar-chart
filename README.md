# react-native-radar-chart

You can draw radar charts easily.

This library gives you much greater freedom in design customization—covering everything from data and stroke styling to labels and gradients—areas where many existing chart libraries are often restrictive.

## Screenshot

<img width="306" alt="스크린샷 2023-11-02 오후 4 12 36" src="https://github.com/SWM-GGS/Brain-Vitamin-Frontend-Patient/assets/86469788/8db76863-8afa-43bf-aeb3-01ace8eac785">
<img width="335" alt="스크린샷 2023-11-13 오후 8 05 13" src="https://github.com/SWM-GGS/Brain-Vitamin-Frontend-Patient/assets/86469788/6040da61-2c32-455a-8254-264693a46ee6">

## Installation

```
npm install @salmonco/react-native-radar-chart react-native-svg
```

## Usage

```typescript
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {RadarChart} from '@salmonco/react-native-radar-chart';

const App = () => {
  const data = [
    {label: 'data1', value: 30},
    {label: 'data2', value: 55},
    {label: 'data3', value: 70},
    {label: 'data4', value: 35},
    {label: 'data5', value: 10},
    {label: 'data6', value: 60},
    {label: 'data7', value: 38},
    {label: 'data8', value: 65},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <RadarChart
        data={data}
        maxValue={100}
        gradientColor={{
          startColor: '#FF9432',
          endColor: '#FFF8F1',
          count: 5,
        }}
        stroke={['#FFE8D3', '#FFE8D3', '#FFE8D3', '#FFE8D3', '#ff9532']}
        strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
        strokeOpacity={[1, 1, 1, 1, 0.13]}
        labelColor="#433D3A"
        dataFillColor="#FF9432"
        dataFillOpacity={0.8}
        dataStroke="salmon"
        dataStrokeWidth={2}
        isCircle
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Props

| Prop                  | Description                                                    | Type          | Default             |
| --------------------- | -------------------------------------------------------------- | ------------- | ------------------- |
| data                  | Label and value pair data to be displayed on the radar chart   | RadarData[]   | required            |
| size                  | Size of radar chart                                            | number        | 330                 |
| scale                 | Adjusts the size of the radar chart. Larger values ​​make the chart larger, while smaller values ​​make the chart smaller. | number | 1 |
| maxValue              | The maximum value of data to display on the radar chart. The end point of the chart is reached when the value of the data corresponds to maxValue. | number | The maximum value among the values ​​of data |
| fillColor             | Color inside chart                                             | string        | salmon              |
| fillOpacity           | Opacity inside chart                                           | number        | 1                   |
| gradientColor         | The gradient color inside the chart                            | GradientColor | fillColor ?? salmon |
| stroke                | Stroke inside chart                                            | string[]      | white               |
| strokeWidth           | Width of stroke inside chart                                   | number[]      | 0.5                 |
| strokeOpacity         | Opacity of stroke inside chart                                 | number[]      | 1                   |
| labelSize             | Size of labels in data                                         | number        | 16                  |
| labelColor            | Color of labels in data                                        | string        | black               |
| labelFontFamily       | Font family of labels in data                                  | string        | Inter               |
| labelDistance         | Adjusts the position of the label. Larger values ​​move the labels farther away from the edges of the chart, while smaller values ​​move the labels closer to the center of the chart. | number | 1.15 |
| dataFillColor         | Color of data area                                             | string        | green               |
| dataFillOpacity       | Opacity of data area                                           | number        | 1                   |
| dataStroke            | Stroke of data area                                            | string        | undefined           |
| dataStrokeWidth       | Width of stroke of data area                                   | number        | 1                   |
| dataStrokeOpacity     | Opacity of stroke of data area                                 | number        | 1                   |
| divisionStroke        | Stroke of division line that divides each data axis            | string        | white               |
| divisionStrokeWidth   | Width of division line that divides each data axis             | number        | 1                   |
| divisionStrokeOpacity | Opacity of stroke of division line that divides each data axis | number        | 0.5                 |
| isCircle              | Whether the chart is circular                                  | boolean       | false               |

## Contributing

Contributions are always welcome!

## License

MIT
