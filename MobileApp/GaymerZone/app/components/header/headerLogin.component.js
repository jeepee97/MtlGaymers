import React from "react";
import { Appbar } from "react-native-paper";

export const HeaderLoginComponent = (props) => {
    return (
        <Appbar>
            <Appbar.BackAction/>
            <Appbar.Content title={props.title}/>
        </Appbar>
    );
}