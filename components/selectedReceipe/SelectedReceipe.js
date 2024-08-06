import { ScrollView, View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './SelectedReceipeStyle';
import MyBackHeader from '../myBackHeader/MyBackHeader';
import { FontContext } from "../../context/FontContext/FontContext"
import { ColorContext } from '../../context/ThemeContext/ColorContext';
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from '../youtube/YoutubePlayer';

const SelectedReceipe = ({ meal }) => {

    let { fonts } = useContext(FontContext)
    let { color } = useContext(ColorContext)

    const styles = createStyles(fonts, color);
    const navigation = useNavigation();
    const videoId = meal.strYoutube.split('v=')[1]?.split('&')[0];
    console.log(videoId)

    const handlePress = () => {
        navigation.navigate("CategoriesScreen")
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && measure) {
            ingredients.push(`${ingredient} ${measure}`);
        } else if (ingredient) {
            ingredients.push(ingredient);
        }
    }

    return (
        <ScrollView style={styles.container} >
            <Image
                source={{ uri: meal.strMealThumb }}
                style={styles.image} />
            <MyBackHeader onPress={handlePress} />
            <View style={styles.nameView} >
                <Text style={styles.nameText} >{meal.strMeal}</Text>
            </View>
            <View style={styles.textView} >
                <Text style={styles.areaText} >{meal.strArea} Food </Text>
                <View style={styles.ingredientsView} >
                    <Text style={styles.headerText} >Ingredient</Text>
                    {ingredients.map((ingredient, index) => (
                        <View key={index} style={styles.ingredientItem} >
                            <View style={styles.item} ></View>
                            <Text> {ingredient}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.headerText} >Preparation of the Meal</Text>
                <View style={styles.instructionView} >
                    <Text>
                        {meal.strInstructions}
                    </Text>
                </View>
                {
                    videoId &&
                     (
                        <View>
                            <YoutubePlayer videoId={videoId} />
                        </View>
                    )
                }
            </View>
        </ScrollView>
    )
}

export default SelectedReceipe