import { StyleSheet } from 'react-native';
import { loginStyle } from "../login.style";

export const memberLoginStyle = StyleSheet.create({
    content: {
        ...loginStyle.content,
        alignItems: 'flex-start',
    },
    view: {
        ...loginStyle.view,
        marginTop: '30%'
    },
    cardButton: {
        ...loginStyle.cardButton
    },
    title: {
        textAlign: 'center'
    }
})