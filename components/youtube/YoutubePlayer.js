import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import WebView from 'react-native-webview'
import createdStyle from './YoutubePlayerStyle'
import { FontContext } from '../../context/FontContext/FontContext'
import { useSelector } from 'react-redux'

const YoutubePlayer = ({ videoId }) => {

    let {fonts} = useContext(FontContext);
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