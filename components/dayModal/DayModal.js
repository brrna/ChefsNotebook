import { SafeAreaView, Image, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import createdStyle from './DayModalStyle'
import { ColorContext } from '../../context/ThemeContext/ColorContext'
import MyBackHeader from '../myBackHeader/MyBackHeader'

const DayModal = ({ src }) => {

    let {color} = useContext(ColorContext)

    const styles = createdStyle(color);

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.imageView} >
                <View style={styles.imageTopView} >
                    <Image
                        style={styles.image}
                        source={{ uri: src }} />
                </View>
            </View>
            <View style={styles.contentView} >
            </View>
        </SafeAreaView>
    )
}

export default DayModal