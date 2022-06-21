import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';
import Card from './components/Card';
import Critica from'./components/Critica';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>  
      <Critica/>   
      <StatusBar style="auto" />
    </View>
  );}

