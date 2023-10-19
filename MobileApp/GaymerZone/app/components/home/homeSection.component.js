import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Pressable, View, StyleSheet, StatusBar} from "react-native";
import { Text, useTheme } from "react-native-paper";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';

export const HomeSectionComponent = (props) => {
    const theme = useTheme();
    const style = homeSectionStyle(theme);

    return (
        <View style={style.view}>
            <Pressable android_ripple={{color: '#dddddd'}} style={style.pressable} onPress={props.onPress}>
                <FontAwesomeIcon icon={props.icon} size={40} style={style.icon}/>
                <Text variant="headlineLarge">{props.title}</Text>
            </Pressable>
        </View>
    );
}

const homeSectionStyle = theme => (StyleSheet.create(({
    view: {
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: theme.colors.primary,
        height: 70
    },
    pressable: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
        marginLeft: 10
    }
})))