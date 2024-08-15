import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import createdStyle from './YoutubePlayerStyle'
import { useSelector } from 'react-redux'

const YoutubePlayer = ({ videoId }) => {

    const fonts = useSelector((state) => state.fonts.fonts)
    const color = useSelector((state) => state.color )

    const styles = createdStyle(fonts, color)

    return (
        <View style={styles.container} >
            <View style={styles.textView} >
            <Text style={styles.text} >you can watch the recipe here: </Text>
            </View>
            <WebView
                source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                style={styles.web} />
        </View>
    )
}

export default YoutubePlayer