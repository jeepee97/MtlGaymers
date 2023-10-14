import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../App.style';

export const loginStyle = StyleSheet.create({
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
    card: {
        flex: 2
    },
    cardButton: {
        marginTop: 2,
        marginBottom: 2
    },
    backButton: {
        marginLeft: 0,
        padding: 0
    }
})