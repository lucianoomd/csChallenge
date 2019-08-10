import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'
import CustomText from './CustomText';
import Constants from '../constants/Constants';

const styles = StyleSheet.create({
    navigationHeader: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -2
    },
    buttonContainer: {
        paddingLeft: 10,
        left: 0,
        zIndex: 10,
        position: 'absolute'
    },
    icon: {
        padding: 10,
    }
});

const navigationHeader = ({ title, handleBackButton }) => (
    <View style={styles.navigationHeader}>
        {handleBackButton ? 
            <Icon
                containerStyle={styles.buttonContainer}
                iconStyle={styles.icon}
                name='chevron-left'
                type='font-awesome'
                color={Constants.colors.BLACK}
                onPress={handleBackButton}
            /> : 
            null
        }
        <CustomText
            text={title} 
            fontSize={20} 
            fontWeight='bold' 
            color={Constants.colors.BLACK} 
            textAlign='center'
        />
    </View>
);  

navigationHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default navigationHeader;
