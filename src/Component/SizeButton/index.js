import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function SizeButton(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>
            <Text style={styles.text, { color: props.color || '#c9c' } || '#ddd'}>
                {props.children}
            </Text>
        </View >
    );
}