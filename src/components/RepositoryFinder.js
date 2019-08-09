import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import DefaultTextInput from './DefaultTextInput';
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
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

const repositoryFinder = ({ value, onChangeText, placeholderText, onPress }) => (
    <View style={styles.container}>
        <DefaultTextInput
            value={value}
            onChangeText={onChangeText} 
            placeholderText={placeholderText} 
        />
        <Icon
            containerStyle={styles.buttonContainer}
            name='plus'
            type='font-awesome'
            color={Constants.colors.BLACK}
            onPress={onPress} 
        />
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