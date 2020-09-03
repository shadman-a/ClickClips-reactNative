import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../Screens/Login/Login'
import Signup from '../Screens/Login/Signup'
import Profile from '../Screens/Login/Profile'
import TabNavigator from './TabNavigator'

const LoginNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        TabNavigator: {
            screen: TabNavigator
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(LoginNavigator)