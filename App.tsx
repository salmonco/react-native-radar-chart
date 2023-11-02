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
