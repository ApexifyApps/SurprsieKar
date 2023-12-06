import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import COLORS from '../../utils/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import TxtInput from '../../components/TxtInput';
import Btn from '../../components/Btn';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {


    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const showToast = (type, message) => {
        Toast.show({
            type: type,
            text1: message
        })
    }
    const Login = () => {

        if (Email === "") {
            showToast('error', "Email is required");
            
        } else if (reg.test(Email) === false) {
            showToast('error', "Email is Not Correct");

        } else if (Password === "") {
            showToast('error', "Password is required");

        } else {

            auth()
                .signInWithEmailAndPassword(Email, Password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        showToast('error', 'Invalid email address');

                    } else if (error.code === 'auth/invalid-login') {
                        showToast('error', 'User not found');


                    }else if (error.code === 'auth/user-not-found') {
                        showToast('error', 'User not found');


                    }  else if (error.code === 'auth/wrong-password') {
                        showToast('error', 'Incorrect password');


                    } else {
                        showToast('error', 'Login failed. Please try again.');
                        console.error(error);


                    }

                    console.error(error.code);


                });


        }

    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR, justifyContent: "space-between" }}>
                {/* View with zIndex */}
                <View style={{ flex: 1, }}>
                    <View style={{ height: 50, backgroundColor: COLORS.PRIMARY_COLOR }} />

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[COLORS.LEFT_SECONDARY_COLOR, COLORS.MIDDLE_SECONDARY_COLOR, COLORS.LEFT_SECONDARY_COLOR]}
                        style={{
                            flex: 1,
                            width: '90%',
                            alignSelf: 'center',
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10

                        }}
                    >

                        <Text style={{ fontSize: 60, color: COLORS.BLACK, fontWeight: 'bold' }}>Welcome</Text>
                        <Text style={{ fontSize: 22, color: COLORS.BLACK, }}>Login</Text>
                        <TxtInput txt={"Email"} onChangeText={(txt)=> setEmail(txt) } val={Email} />
                        <TxtInput txt={"Password"} onChangeText={(txt)=> setPassword(txt)} val={Password}/>


                        <Btn txt={"Login"} nav={() =>Login()} />
                        <Text style={{ color: COLORS.BLACK, alignSelf: 'center', marginTop: 5 }}>Forget Password?</Text>


                        {/* Add content for the LinearGradient if needed */}
                    </LinearGradient>
                </View>

                {/* View without zIndex */}
                <View style={{ height: 150, backgroundColor: COLORS.PRIMARY_COLOR, zIndex: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} >
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={{ height: 50, width: '90%', backgroundColor: COLORS.LEFT_SECONDARY_COLOR, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20, alignSelf: 'center' }}>
                        <Text style={{ color: COLORS.WHITE, fontSize: 20, fontWeight: 'bold' }}>Create account</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </ScrollView>
    );
};

export default Login;
