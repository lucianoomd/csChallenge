import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from '../constants/Constants';
import CustomText from './CustomText';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: Constants.colors.LIGHT_GRAY,
        height: 40,
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1
    }
});

const filterHeader = ({
    firstTitle, 
    firstOnPress, 
    secondTitle, 
    secondOnPress, 
    thirdTitle, 
    thirdOnPress,
    selectedButton
}) => {
    const buttons = [
        { title: firstTitle, onPress: firstOnPress },
        { title: secondTitle, onPress: secondOnPress },
        { title: thirdTitle, onPress: thirdOnPress }
    ];

    return (
        <View style={styles.container}>
            {buttons.map(item => (
                <TouchableOpacity onPress={item.onPress} style={styles.buttonContainer} key={item.title}>
                    <CustomText 
                        text={item.title} 
                        color={item.title === selectedButton ? Constants.colors.GRAY : Constants.colors.SUPER_LIGHT_GRAY}
                        fontWeight={item.title === selectedButton ? 'bold' : ''}
                        textAlign='center'
                    />
                </TouchableOpacity>

            ))}
        </View>
    )
};

export default filterHeader;
