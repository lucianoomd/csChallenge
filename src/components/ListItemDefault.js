import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements'
import Constants from '../constants/Constants';
import CustomText from './CustomText';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 8,
        backgroundColor: Constants.colors.WHITE,
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        marginRight: 15
    },
    textSeparator: {
        height: 3
    }
});

const listItemDefault = ({ primaryTitle, secondaryTitle, icon, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
            <Image style={styles.image} source={{uri : icon}} />
        </View>

        <View style={styles.textContainer}>
            <CustomText 
                text={primaryTitle} 
                fontSize={18} 
                fontWeight='bold'
                numberOfLines={1}
            />

            <View style={styles.textSeparator}/>

            <CustomText 
                text={secondaryTitle} 
                fontSize={12} 
                color={Constants.colors.LIGHT_GRAY} 
                fontWeight='bold'
            />
        </View>

        <View>
            <Icon
                size={12}
                name='chevron-right'
                type='font-awesome'
                color={Constants.colors.LIGHT_GRAY}
            />
        </View>
    </TouchableOpacity>
);

listItemDefault.propTypes = {
    primaryTitle: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired
};
  
listItemDefault.defaultProps = {
    icon: ''
};

export default listItemDefault;
