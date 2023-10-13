import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(101,37,131)'
    },
    view: {
        width: '80%'
    },
    cardTitle: {
        color: 'rgb(101,37,131)'
    },
    cardButton: {
        marginTop: 2,
        marginBottom: 2
    }
})