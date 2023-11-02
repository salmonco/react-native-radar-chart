# react-native-radar-chart

You can draw radar charts easily.

## Screenshot

<img width="306" alt="스크린샷 2023-11-02 오후 4 12 36" src="https://github.com/SWM-GGS/Brain-Vitamin-Frontend-Patient/assets/86469788/8db76863-8afa-43bf-aeb3-01ace8eac785">

## Installation

```
npm install @salmonco/react-native-radar-chart react-native-svg
```

## Usage

```typescript
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import RadarChart from './lib/RadarChart';

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

| Prop              | Description                                                  | Type          | Default             |
| ----------------- | ------------------------------------------------------------ | ------------- | ------------------- |
| data              | Label and value pair data to be displayed on the radar chart | RadarData[]   | required            |
| size              | Size of radar chart                                          | number        | 330                 |
| fillColor         | Color inside chart                                           | string        | salmon              |
| fillOpacity       | Opacity inside chart                                         | number        | 1                   |
| gradientColor     | The gradient color inside the chart                          | GradientColor | fillColor ?? salmon |
| stroke            | Stroke inside chart                                          | string[]      | white               |
| strokeWidth       | Width of stroke inside chart                                 | number[]      | 0.5                 |
| strokeOpacity     | Opacity of stroke inside chart                               | number[]      | 1                   |
| labelSize         | Size of labels in data                                       | number        | 16                  |
| labelColor        | Color of labels in data                                      | string        | black               |
| dataFillColor     | Color of data area                                           | string        | green               |
| dataFillOpacity   | Opacity of data area                                         | number        | 1                   |
| dataStroke        | Stroke of data area                                          | string        | undefined           |
| dataStrokeWidth   | Width of stroke of data area                                 | number        | 1                   |
| dataStrokeOpacity | Opacity of stroke of data area                               | number        | 1                   |

## Contributing

Contributions are always welcome!

## License

MIT
