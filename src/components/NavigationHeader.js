import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from './CustomText';
import Constants from '../constants/Constants';

const styles = {
    navigationHeader: {
        padding: 20
    }
};

const customText = ({ title }) => (
    <View style={styles.navigationHeader}>
        <CustomText text={title} fontSize={20} fontWeight='bold' 
        color={Constants.colors.GRAY} 
        textAlign='center'
        />
    </View>
);  

customText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default customText;
