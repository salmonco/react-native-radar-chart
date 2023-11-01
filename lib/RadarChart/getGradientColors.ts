import Color from 'color';

export const getGradientColors = (
  startColor: string,
  endColor: string,
  count: number,
) => {
  const start = Color(startColor);
  const end = Color(endColor);
  const gradientColors = [];

  for (let i = 0; i < count; i++) {
    const interpolation = i / (count - 1);
    const color = start.mix(end, interpolation);
    gradientColors.push(color.hex());
  }

  return gradientColors;
};
