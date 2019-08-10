import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItemDefault from '../components/ListItemDefault';

const styles = StyleSheet.create({
    defaultList: {
        flex: 1,
        marginTop: 20,
    },
    contentContainer: {
        paddingBottom: 20
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
            style={styles.defaultList}
            contentContainerStyle={styles.contentContainer}
            data={dataList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={itemSeparator}
        />
    )
};

export default listDefault;
