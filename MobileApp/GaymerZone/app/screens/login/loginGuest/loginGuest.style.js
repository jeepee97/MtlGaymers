import { StyleSheet } from 'react-native';
import { loginStyle } from "../login.style";

export const guestLoginStyle = theme => (StyleSheet.create({
    content: {
        ...loginStyle(theme).content,
        alignItems: 'flex-start',
    },
    view: {
        ...loginStyle(theme).view,
        marginTop: '30%'
    },
    cardButton: {
        ...loginStyle(theme).cardButton
    },
    title: {
        textAlign:'center'
    }
}))