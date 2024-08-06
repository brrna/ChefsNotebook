import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import createStyles from './MyBackHeaderStyle'

const MyBackHeader = ({ onPress }) => {

    const styles = createStyles();

    return (
        <View style={styles.container} >
            <Pressable
                style={styles.backButton}
                onPress={onPress} >
                    <View style={styles.icon} >

                    </View>
            </Pressable>
        </View>
    )
}

export default MyBackHeader