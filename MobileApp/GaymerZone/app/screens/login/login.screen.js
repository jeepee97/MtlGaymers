import React from 'react'
import { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native';

import { loginStyle } from './login.style';
import { MemberLoginComponent } from '../../components/login/memberLogin.component';
import { GuestLoginComponent } from '../../components/login/GuestLogin.component';
import { DefaultComponent } from '../../components/login/default.component';

export const LoginScreen = (props) => {
    const [isLoginIn, setIsLoginIn] = useState(false);
    const [isMemberLogin, setIsMemberLogin] = useState(false);
    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    function RenderLoginComponent(props) {
        if (!isLoginIn) {
            return <DefaultComponent member={MemberLogin} guest={GuestLogin}/>
        } else {
            if (isMemberLogin) {
                return <MemberLoginComponent login={login} register={register}/>
            } else {
                return <GuestLoginComponent login={login} register={register}/>
            }
        }
    }
    function MemberLogin() {
        setIsLoginIn(true);
        setIsMemberLogin(true);
    }
    function GuestLogin() {
        setIsLoginIn(true);
        setIsMemberLogin(false);
    }

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Image style={loginStyle.image} source={require("../../../assets/logos/Name.png")}/>
                <View style={loginStyle.card}>
                    <RenderLoginComponent/>
                </View>
            </View>
        </SafeAreaView>
    );
}
