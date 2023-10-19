import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../App.style';

export const homeStyle = theme => (StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: 'black',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    view: {
        marginLeft: 10,
        marginRight: 10,
    },
    surface: {
        margin: '10%'
    }
}))