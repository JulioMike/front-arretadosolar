import React from 'react';
import { View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './style';



export default function StartPage(){
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#176C8B','#32ABE3','#C4C4C4']} style={styles.background} />
            <Text style={styles.texto}>Hello Julio Gostoso</Text>
        </View>
    );
}

