import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://i.pinimg.com/564x/71/61/45/7161459f020cb083634b11d601077fd4.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                Kimetsu no Yaiba é uma obra prima. Arte IMPECÁVEL, lindo mesmo, cada episódio é uma obra de arte, drama, desenvolvimento dos personagens e alivio cômico CIRÚRGICO! É um desenho que te prende do começo ao fim.
                </Text>
            </View>
        </View>
        );}