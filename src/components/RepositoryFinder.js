import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import DefaultTextInput from './DefaultTextInput';
import CustomText from './CustomText';
import Constants from '../constants/Constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        borderBottomColor: Constants.colors.LIGHT_GRAY,
        borderBottomWidth: 1
    },
    buttonContainer: {
        paddingLeft: 10
    }
});

const repositoryFinder = ({ value, onChangeText, placeholderText, onPress }) => (
    <View style={styles.container}>
        <DefaultTextInput
            value={value}
            onChangeText={onChangeText} 
            placeholderText={placeholderText} 
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <CustomText text='+' fontSize={30} fontWeight='bold' textAlign='center' />
        </TouchableOpacity>
    </View>
);

repositoryFinder.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired
};
  
repositoryFinder.defaultProps = {
    placeholderText: '',
};

export default repositoryFinder;