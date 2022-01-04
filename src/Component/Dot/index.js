import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

export default function Dot(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.color }]} />
    );
}

