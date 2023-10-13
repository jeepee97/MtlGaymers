import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../App.style';

export const homeStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})