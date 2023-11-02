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
      <RadarChart data={data} />
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
