import { DefaultTheme } from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#666666',
        secondary: 'red',
        tertiary: 'red',
        background: 'red',
        surface: '#666666',
        onSurface: 'black',
        surfaceVariant: 'transparent',
    }
}
export const adminTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#f89a20',
        secondary: 'red',
        tertiary: 'red',
        background: 'red',
        surface: '#f89a20',
        onSurface: 'black',
        surfaceVariant: 'transparent',
    }
}
export const memberTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#2d95bf',
        secondary: 'red',
        tertiary: 'red',
        background: 'red',
        surface: '#2d95bf',
        onSurface: 'black',
        surfaceVariant: 'transparent',
    }
}
export const guestTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#955ca5',
        secondary: 'red',
        tertiary: 'red',
        background: 'red',
        surface: '#955ca5',
        onSurface: 'black',
        surfaceVariant: 'transparent',
    }
}

// red      #f15c5b
// orange   #f89a20
// yellow   #efc41b
// green    #4fba6f
// blue     #2d95bf
// purple   #955ca5