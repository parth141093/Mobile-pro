import React, {useEffect} from "react";
import {View,Text,Image,StyleSheet} from 'react-native';
import Animated, {useSharedValue,useAnimatedStyle,withTiming,withDelay} from "react-native-reanimated";

const SplashScreen = ({navigation}) => {
    
    //Values for animation
    const scaleValue = useSharedValue(0);
    const opacityValue = useSharedValue(0);

    useEffect(() => {

        //Start animation
        scaleValue.value = withTiming(1, {duration:1000});
        opacityValue.value = withDelay(500,withTiming(1, {duration:1000}));

        //Navigate to HomeScreen after the animation completes
        const time = setTimeout(() => {
            navigation.replace('Login'); //Navigate to Login 
        }, 3000);
        return () => clearTimeout(time);
    }, [navigation]);

    //Animated styles
    const animatedIcon = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleValue.value }],
        };
    });

    const animatedText = useAnimatedStyle(() => {
        return {
            opacity: opacityValue.value,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../assets/foodIcon.png')}
            style= {[styles.icon, animatedIcon]} />
            <Animated.Text style={[styles.appName, animatedText]}>YumPlate</Animated.Text>
            <Animated.Text style={[styles.tagText, animatedText]}>Discover New Flavors</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6CBB3C'
    },
    icon: {
        width:180,
        height:180,
        marginBottom:15,
    },

    appName: {
        fontSize:38,
        color:'#000000',
        fontFamily:'Roboto',
        fontWeight:'bold'
    },
    tagText: {
        fontSize: 14,
        color:'#000000',
        fontWeight:'bold'
    },
});

export default SplashScreen; 

