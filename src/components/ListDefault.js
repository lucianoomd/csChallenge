import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItemDefault from '../components/ListItemDefault';

const styles = StyleSheet.create({
    repositoryList: {
        flex: 1,
        paddingTop: 20
    },
    itemSeparator: {
        marginBottom: 10
    }
});

const listDefault = ({ dataList }) => {
    itemSeparator = () => (
        <View style={styles.itemSeparator} />
    );

    keyExtractor = (item, index) => index.toString();

    console.log('11111: ', dataList);

    renderItem = ({ item }) => {
        return (
            <ListItemDefault 
                primaryTitle={item.primaryTitle}
                secondaryTitle={item.secondaryTitle}
                icon={item.icon}
                onPress={item.onPress}
            />
        );
    };

    return (
        <FlatList
            style={styles.repositoryList}
            data={dataList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparator}
        />
    )
};

export default listDefault;
