import { ScrollView, View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './SelectedReceipeStyle';
import MyBackHeader from '../myBackHeader/MyBackHeader';
import { FontContext } from "../../context/FontContext/FontContext"
import { ColorContext } from '../../context/ThemeContext/ColorContext';
import { useNavigation } from '@react-navigation/native';

const SelectedReceipe = ({meal}) => {

    let { fonts } = useContext(FontContext)
    let { color } = useContext(ColorContext)

    const styles = createStyles(fonts, color);
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate("CategoriesScreen")
    }

    return (
        <ScrollView style={styles.container} >
            <Image 
                source={{uri: meal.strMealThumb}}
                style={styles.image} />
            <MyBackHeader onPress={handlePress} />
            <View style={styles.nameView} >
                <Text style={styles.nameText} >{meal.strMeal}</Text>
            </View>
            <Text>ülke</Text>
            <Text>yapılış</Text>
            <Text>tags</Text>
            <Text>malzemeler ve ölçüleri</Text>
        </ScrollView>
    )
}

export default SelectedReceipe