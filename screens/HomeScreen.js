import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
        });
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
