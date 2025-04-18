import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserStack from './UserStack'
import Splash from '../pages/Splash'
import { useEffect, useState } from 'react';

const RootNavigation = () => {

    const [splash, setSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 3000)
    }, [])

    return (
        <NavigationContainer>
            <UserStack />
        </NavigationContainer>
    )
}

export default RootNavigation