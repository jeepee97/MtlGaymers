import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../App.style';

export const registerStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    content: {
        padding: 15,
        paddingTop: 0
    },
    icon: {
        color: theme.colors.primary
    },
    button: {
        marginTop: 15
    }
})