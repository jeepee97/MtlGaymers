import { StyleSheet, StatusBar } from 'react-native';

export const loginStyle = theme => (StyleSheet.create({
    content: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.primary
    },
    view: {
        width: '80%'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    cardView: {
        flex: 2
    },
    cardButton: {
        marginTop: 2,
        marginBottom: 2
    },
}))