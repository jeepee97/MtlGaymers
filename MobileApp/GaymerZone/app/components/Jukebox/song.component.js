import React from "react";
import { Pressable, View, StyleSheet, StatusBar} from "react-native";
import { Text, useTheme } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const SongComponent = (props) => {
    const theme = useTheme();
    const style = songStyle(theme);

    return (
        <View style={style.view}>
            <Pressable android_ripple={{color: '#dddddd'}} style={style.pressable} onPress={props.onPress}>
                <Text variant="headlineSmall" style={style.text}>{props.title}</Text>
            </Pressable>
        </View>
    );
}

const songStyle = theme => (StyleSheet.create(({
    view: {
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: 'white'
    },
    pressable: {
        flex:1,
        flexDirection: 'row',
    },
    text: {
        margin: 10
    }
})))