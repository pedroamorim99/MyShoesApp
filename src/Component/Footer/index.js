import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Shoes from '../Shoes'
import styles from './style';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title} >VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={{ marginHorizontal: 10 }} >
                        <Shoes img={require('../../Assets/1.png')} cost="110,90">
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }} >
                        <Shoes img={require('../../Assets/5.png')} cost="360,90">
                            Nike Epic React FkyKnit 2
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }} >
                        <Shoes img={require('../../Assets/3.png')} cost="290,90">
                            Nike Squiqward Tentacles
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}