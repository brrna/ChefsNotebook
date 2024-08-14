import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ColorContext } from '../context/ThemeContext/ColorContext'
import option from "../assets/values/profile_options.json"
import ProfileOption from '../components/profileOption/ProfileOption'

const Profile = () => {

    let { color } = useContext(ColorContext);

    const styles = createStyles(color);

    const [data, setData] = useState(option);
    const renderOption = ({ item }) => <ProfileOption option={item} onPress={() => handlePress(item.id)} />
    const keyOption = item => item.id.toString();

    const handlePress = (id) => {
        switch (id) {
            case 0:
                console.log("add notebook");
                break;
            case 1:
                console.log("add favorite");
                break;
            default:
                console.log("Unknown option");
                break;
        }
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.profileView} >
                <View style={styles.profile} >
                </View>
            </View>
            <View style={styles.optionView} >
                <FlatList
                    data={data}
                    renderItem={renderOption}
                    keyExtractor={keyOption} />
            </View>
        </SafeAreaView>
    )
}

export default Profile

const createStyles = (color) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: color.white,
            justifyContent: "space-around"
        },
        profileView: {
            width: wp(100),
            height: hp(30),
            justifyContent: "center",
            alignItems: "center"
        },
        profile: {
            height: hp(20),
            width: wp(40),
            borderRadius: 100000000,
            borderWidth: 2,
            borderColor: color.darkGreen
        },
        optionView: {
            width: wp(100),
            height: hp(55),
            justifyContent: "center",
            alignItems: "center"
        }
    })
}