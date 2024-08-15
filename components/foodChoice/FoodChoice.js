import { View, Text, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './FoodChoiceStyle'
import { useSelector } from 'react-redux'

const FoodChoice = ({ img, foodname, onPress }) => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state)=>state.fonts.fonts)

    const styles = createStyles(color, fonts);

    return (
        <View style={styles.container} >
            <Pressable 
                onPress={onPress} >
                <Image
                    style={styles.image}
                    source={{ uri: img }} />
            </Pressable>
            <Text style={styles.text} >{foodname}</Text>
        </View>
    )
}

export default FoodChoice