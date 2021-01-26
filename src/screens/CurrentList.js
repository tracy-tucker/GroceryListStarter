import React from 'react';
import { SectionList, View, Text, SafeAreaView, FlatList, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import Listitem, { Separator, SectionHeader } from '../components/ListItem';
import AddItem from '../components/AddItem';
import { useCurrentList } from '../util/ListManager';

export default ({ navigation }) => {

    const {
        list,
        loading,
        addItem,
        removeItem,
        addToCart,
        cart,
    } = useCurrentList();

    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }
    console.log('Cart', cart)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
            >
                <SectionList
                    sections={[
                        { title: 'List', data: list},
                        { title: 'Cart', data: cart}
                    ]}
                    renderSectionHeader={({ section }) => (
                        <SectionHeader title={section.title} />
                    )}
                    renderItem={({ item, index, list }) => (
                        <Listitem
                        name={item.name}
                        onFavoritePress={() => alert('todo: handle favorite!')}
                        isFavorite={index < 2}
                        onAddedSwipe={() => addToCart(item)}
                        onDeleteSwipe={() => removeItem(item.id)}
                        onRowPress={() => navigation.navigate('ItemDetails', {itemCallback: item})}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                    ListHeaderComponent={() => (
                        <AddItem
                            onSubmitEditing={({ nativeEvent: { text } }) => addItem(text)}
                        />
                    )}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

//SIDE NOTES: Anddroid view may be wonky when typing in text.
//Any items on your grocery list BELOW the text input may disappear.
//Because you are using Expo.io, you won't be able to fix this until
//you build out for final production.
//Folder path: android - app - src - main - AndroidManifest.xml
//Go down to activity, then android:windowSoftInputMode
//Change this from "adjustResize" to "adjustPan"
//Restart server to reflect changes.