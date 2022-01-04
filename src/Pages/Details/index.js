import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, ScrollView } from 'react-native'
import Button from '../../Component/Button';
import Footer from '../../Component/Footer';
import Dot from '../../Component/Dot';
import SizeButton from '../../Component/SizeButton';
import styles from './style';

export default function Details({ navigation }) {

    const navigation = useNavigation()

    navigation.setOptions({
        headerTitle: 'Nike Downshifter 10'
    })

    return (
        <ScrollView style={styles.container} >
            <Image source={require('../../Assets/detail.png')} style={styles.image} resizeMode="cover" />
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 23 }]}  >Nike Downshifter 10</Text>
                </View>
                <View>
                    <Text style={[styles.title, { fontSize: 30 }]}  >R$ 280,90</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4" />
                    <Dot color="#fb6e53" />
                    <Dot color="#ddd" />
                    <Dot color="#000" />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <SizeButton bgColor="#17181a" color="#FFF" > 38</SizeButton>
                        <SizeButton>40</SizeButton>
                        <SizeButton>42</SizeButton>
                        <SizeButton>43</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike DownShifter 10
                    </Text>
                    <Text style={styles.textContent} >
                        O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável.
                        Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético
                    </Text>
                    <Text style={styles.textList} >
                        -Categoria : Amortecimento
                    </Text>
                    <Text style={styles.textList} >
                        -Material: Mash
                    </Text>
                </View>

                <Button />

                <View style={{ borderWidth: 1, borderBottomColor: '#DDD', marginVertical: '2%' }} />

                <Footer />
            </View>
        </ScrollView >
    )
}


