import { ScrollView, Image, View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import createdStyle from './DayModalStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import YoutubePlayer from '../youtube/YoutubePlayer'
import { useSelector } from 'react-redux'

const DayModal = ({ src, meal }) => {

    const color = useSelector((state) => state.color)
    const fonts = useSelector((state) => state.fonts.fonts)

    const styles = createdStyle(color, imageHeight, marginTop, fonts);
    const videoId = meal.strYoutube ? meal.strYoutube.split('v=')[1]?.split('&')[0] : null;

    const [imageHeight, setImageHeight] = useState(hp(53))
    const [marginTop, setMarginTop] = useState(hp(10))

    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const newHeight = hp(55) - scrollY;

        if (newHeight >= hp(35)) {
            setImageHeight(newHeight)
            setMarginTop(hp(10))
        } else {
            setImageHeight(hp(35))
            setMarginTop(hp(10))
        }
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
        <SafeAreaView style={styles.container} >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEventThrottle={16}
                style={styles.scrollview}
                onScroll={handleScroll} >
                <View style={[styles.imageView, { height: imageHeight }]} >
                </View>
                <View style={styles.imageTopView} >
                    <Image
                        style={[styles.image, { marginTop: marginTop }]}
                        source={{ uri: src }} />
                </View>
                <View style={{ flex: 1 }} >
                    <View style={styles.contentView} >
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DayModal