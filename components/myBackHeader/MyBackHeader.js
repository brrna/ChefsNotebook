import { Pressable, View } from 'react-native'
import React from 'react'
import createStyles from './MyBackHeaderStyle'
import Ionicons from '@expo/vector-icons/Ionicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../context/ThemeContext/Colors';

const MyBackHeader = ({ onPress }) => {

    const styles = createStyles();

    return (
        <View style={styles.container} >
            <Pressable
                style={styles.backButton}
                onPress={onPress} >
                <Ionicons name="arrow-back-circle-outline" size={hp(5)} color={color.cream} />
            </Pressable>
        </View>
    )
}

export default MyBackHeader