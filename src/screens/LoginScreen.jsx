import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {
   const navigate= useNavigation()

    const handleRegister=()=>{
        navigate.navigate('SignUp')
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={require("../assets/topvector.png")} style={styles.topImage} />
            </View>
            <View style={styles.helloContainer}>
                <Text style={styles.helloText}>Hello</Text>
            </View>
            <View style={styles.helloContainer}>
                <Text style={styles.hellosub}>Sign in to your account</Text>
            </View>
            <View style={styles.textinputContainer}>
                <FontAwesome name='user' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} placeholder='Username' placeholderTextColor="#C8C8C8" />
            </View>
            <View style={styles.textinputContainer}>
                <FontAwesome name='lock' size={24} color={"#9A9A9A"} />
                <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Password' placeholderTextColor="#C8C8C8" />
            </View>
            <View style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot  your password?</Text>
            </View>
            <View style={styles.loginbtnContainer}>
                <Text style={styles.btnText} >Sign in</Text>
                <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
                    <AntDesign name='arrowright' size={30} color={"#FFFFFF"} />
                </LinearGradient>

            </View>
            <View> 
               <TouchableOpacity onPress={handleRegister}>
               <Text style={styles.acctCreateText}>Don't have an account? <Text style={{textDecorationLine:"underline",color:"black"}}>Create</Text></Text>
        
                </TouchableOpacity>   
                 </View>
            <View style={styles.bottomImgContainer}>
                <Image source={require("../assets/bottomimg.png")} style={styles.bottomImg} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:"relative"
    },
    topImage: {
        width: "100%",
        height: 130
    },
    helloContainer: {

    },
    helloText: {
        fontSize: 64,
        color: '#262626',
        textAlign: "center",
        fontWeight: "500"
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
    loginbtnContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-end",
        width:"90%",
        marginTop:120,
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
        marginTop:120,
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
    }
    
})