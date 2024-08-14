import { Pressable, Text, View } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './ProfileOptionStyle'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import {FontContext} from "../../context/FontContext/FontContext"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ProfileOption = ({option, onPress = [0]}) => {

    let { color } = useContext(ColorContext);
    let {fonts} = useContext(FontContext)

    const styles = createStyles(color, fonts)

    return (
        <Pressable
            onPress={onPress}
            style={styles.option} >
                <View style={styles.textView} >
                <Text style={styles.text} >{option.text}</Text>
                </View>
            
            <MaterialCommunityIcons 
                name={option.icon} 
                size={heightPercentageToDP(5)} 
                color={color.darkGreen} />
        </Pressable>
    )
}

export default ProfileOption