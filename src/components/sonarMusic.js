import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    green: {
        color: "#556B2F",
        fontSize: 11
    }
})

const SonarMusic = () => (
    <View>
        <Text style={styles.green}>SONAR MUSIC WEBSITE – In a team of Two.</Text>
    </View> 
    )

export default SonarMusic