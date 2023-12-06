import { View, Text } from 'react-native'
import React, { useEffect , useState} from 'react'
import Admin from './routes/Admin'
import AfterAuth from './routes/AfterAuth'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Loader = () => {

    const [userType, setUserType] = useState()

    const UID = auth()?.currentUser?.uid

    useEffect(() => {

        getUserType()

    }, [])

    const getUserType = () => {

        firestore()
            .collection("Users")
            .doc(UID)
            .get()
            .then((res) => {


                const userType = res?.data()?.type

                setUserType(userType)
            })
    }

    return (
        <>
            {
                userType === "admin" ?

                    <Admin />

                    :

                    <AfterAuth />
            }
        </>
    )
}

export default Loader