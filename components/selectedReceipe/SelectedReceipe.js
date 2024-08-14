import { ScrollView, View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import createStyles from './SelectedReceipeStyle';
import MyBackHeader from '../myBackHeader/MyBackHeader';
import { FontContext } from "../../context/FontContext/FontContext"
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from '../youtube/YoutubePlayer';

const SelectedReceipe = ({ meal }) => {

    let { fonts } = useContext(FontContext)
    const color = ((state) => state.color)

    const styles = createStyles(fonts, color);
    const navigation = useNavigation();
    const videoId = meal.strYoutube.split('v=')[1]?.split('&')[0];

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
                            <Text style={styles.ingredient} > {ingredient}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.instructionView} >
                    <Text style={styles.headerText} >Preparation of the Meal</Text>
                    <Text style={styles.ingredient} >
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