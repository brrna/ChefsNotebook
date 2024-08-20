import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import Splash from '../pages/Splash'
import { useEffect, useState } from 'react';

const RootNavigation = () => {

    const [splash, setSplash] = useState(true);
    const isAuth = false;

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3000)
    }, [])

    return (
        <NavigationContainer>
            {splash ?
                (<Splash />)
                :
                (!isAuth ?
                    <AuthStack />
                    :
                    <UserStack />
                )
            }
        </NavigationContainer>
    )
}

export default RootNavigation