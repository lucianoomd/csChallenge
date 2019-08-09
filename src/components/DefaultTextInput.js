import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Constants from '../constants/Constants';

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: Constants.colors.LIGHT_GRAY,
        height: 40, 
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    }
});

const defaultTextInput = ({ onChangeText, value, placeholderText}) => (
    <TextInput style={styles.inputContainer} 
        onChangeText={onChangeText} 
        value={value} 
        placeholder={placeholderText}
    />
);

export default defaultTextInput;