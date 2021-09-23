import React, { Fragment } from 'react';
import { Text, View,  } from '@react-pdf/renderer';
import styles from "./projectStyles"

const ToDo = () => (
    <View style={styles.container}>
        <Text style={styles.green}>DotNet Todo List – A partly inclass Project.</Text>
    </View> 
    )

export default ToDo