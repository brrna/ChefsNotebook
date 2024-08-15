import { Pressable, Text, View } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './ProfileOptionStyle'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux'

const ProfileOption = ({option, onPress = [0]}) => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state) => state.fonts.fonts)

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