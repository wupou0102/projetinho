import React from "react";
import { View, Text,  } from "react-native-web";
import styles from './styles';


export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                
                <Text style={styles.texto}>
                Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. E, para piorar, Nezuko, sua irmã mais nova e única sobrevivente, também acabou transformada em um demônio.
                </Text>
            </View>
        </View>
        
           );}