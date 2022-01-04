import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './style';
import Shoes from '../../Component/Shoes';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../Assets/banner.png')} style={styles.image} />
            </View>

            <View style={styles.textContainer} >
                <Text style={styles.text}>TÊNIS</Text>
                <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
                <Text style={[styles.text, { color: '#CECECF' }]} >MASCULINO</Text>
                <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                    <MaterialIcons name="filter-list" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.line} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[styles.text, { marginLeft: 10, marginTop: 10 }]}>LANÇAMENTOS</Text>
                <View style={styles.rowBlock}>
                    <Shoes img={require('../../Assets/1.png')} cost="R$ 140,90" onClick={() => navigation.navigate('Details')}  >
                        <Text>Nike Air Max</Text>
                    </Shoes>
                    <Shoes img={require('../../Assets/2.png')} cost="R$ 219,90" onClick={() => navigation.navigate('Details')} >
                        Nike DownShifter 10
                    </Shoes>
                </View >
                <View style={styles.rowBlock}>
                    <Shoes img={require('../../Assets/3.png')} cost="R$ 189,90" onClick={() => navigation.navigate('Details')}  >
                        <Text>Adidas SquidWard Tentacles</Text>
                    </Shoes>
                    <Shoes img={require('../../Assets/4.png')} cost="R$ 249,90" onClick={() => navigation.navigate('Details')}  >
                        Adidas Epic React Flyknit
                    </Shoes>
                </View >
                <View style={styles.rowBlock}>
                    <Shoes img={require('../../Assets/5.png')} cost="R$ 269,90" onClick={() => navigation.navigate('Details')}  >
                        Adidas JoyRide Run
                    </Shoes>
                    <Shoes img={require('../../Assets/6.png')} cost="R$ 299,90" onClick={() => navigation.navigate('Details')}  >
                        Nike DownShifter 10
                    </Shoes>
                </View >
            </ScrollView>
        </View>

    );
}
