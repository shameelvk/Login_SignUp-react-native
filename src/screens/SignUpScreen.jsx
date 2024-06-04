import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'




const SignUpScreen = () => {
   const navigate= useNavigation()

    const handleCreate=()=>{
        navigate.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../assets/signuptop.png")} style={styles.topImage} />
            </View>
            <View style={styles.helloContainer}>
                <Text style={styles.createAntText}>Create account</Text>
            </View>
            
            <View style={styles.textinputContainer}>
                <FontAwesome name='user' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor="#C8C8C8" />
            </View>
            <View style={styles.textinputContainer}>
                <FontAwesome name='lock' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="#C8C8C8" />
            </View>
            <View style={styles.textinputContainer}>
                <AntDesign name='mail' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} placeholder='E-mail' placeholderTextColor="#C8C8C8" />
            </View>
            <View style={styles.textinputContainer}>
                <AntDesign name='mobile1' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} placeholder='Mobile' placeholderTextColor="#C8C8C8" />
            </View>
            
            <View style={styles.createbtnContainer}>
                <Text style={styles.btnText} >Create</Text>
                <TouchableOpacity onPress={handleCreate}>
                <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
                    <AntDesign name='arrowright' size={30} color={"#FFFFFF"} />
                </LinearGradient>
                </TouchableOpacity>

            </View>
            <View> 
               
               <Text style={styles.acctCreateText}>Or create account using social media</Text>            
                </View>
                <View style={styles.socialIconContainer}>
                <Entypo name='facebook-with-circle' size={24} color={"#3B5998"} style={styles.socialIcon}/>
                <Entypo name='twitter-with-circle' size={24} color={"#55ACEE"} style={styles.socialIcon}/>
                <AntDesign name='google' size={24} color={"#4285F4"} style={styles.socialIcon} />
                </View>
            
            <View style={styles.bottomImgContainer}>
                <Image source={require("../assets/bottomimg.png")} style={styles.bottomImg} />
            </View>
            
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:"relative"
    },
    topImage: {
        width: "50%",
        height: 130
    },
    helloContainer: {

    },
    createAntText: {
        fontSize: 30,
        color: '#262626',
        textAlign: "center",
        fontWeight: "bold",
        marginBottom:30
    },
    hellosub: {
        color: "#262626",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20
    },
    textinputContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 30,
        elevation: 10,
        borderRadius: 20,
        padding: 5,
        backgroundColor: "#FFFFFF",
        marginVertical: 20,
        paddingHorizontal: 10,
        height: 50
    },
    textInput: {
        color: "black",
        flex: 1,
        marginLeft: 10,
        backgroundColor: "white"
    },
    forgotContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "90%",
        marginTop: 20
    },
    forgotText: {
        color: '#BEBEBE',
        fontFamily: 'Quicksand-Regular',
        fontWeight: "bold"
    },
    createbtnContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-end",
        width:"90%",
        marginTop:50,
        gap:10

    },
    btnText: {
        fontSize: 25,
        color: '#262626',
        fontFamily: 'Quicksand-Regular',
        fontWeight: "bold"

    },
    buttonText:{

    }
    ,linearGradient:{
        width:56,
        height:34,
        borderRadius:17,
        justifyContent:"center",
        alignItems:"center"
    },
    acctCreateText:{
        color:"black",
        textAlign:"center",
        marginTop:40,
        fontSize:16

    },
    bottomImgContainer:{
        position:"absolute",
        bottom:0,
        left:0,
        
    }
    ,bottomImg:{
        width:200,
        height:270
    },
    socialIconContainer:{
        marginTop:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:10
    },
    socialIcon:{
        padding:15,
        backgroundColor:"white",
        borderRadius:50

    }

    
})