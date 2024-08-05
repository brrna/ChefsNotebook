import { View, Text, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './FoodChoiceStyle'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import { FontContext } from '../../context/FontContext/FontContext'

const FoodChoice = ({ img, foodname, onPress }) => {

    let { color } = useContext(ColorContext);
    let { fonts } = useContext(FontContext);

    const styles = createStyles(color, fonts);

    return (
        <View style={styles.container} >
            <Text style={styles.text} >{foodname}</Text>
            <Pressable 
                onPress={onPress}
                style={styles.image} >
                <Image
                    style={styles.image}
                    source={{ uri: img }} />
            </Pressable>
        </View>
    )
}

export default FoodChoice