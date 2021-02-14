import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, ChatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar
            rounded
            source={{
                uri: 'https://img.icons8.com/metro/344/user-male.png',
            }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    First Chat
                </ListItem.Title>
                <ListItem.Subtitle 
                numberOfLines={1}
                ellipsizeMode="tail"
                >
                    This is a subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
