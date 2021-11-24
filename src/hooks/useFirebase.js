import initializeFirebase from "../firebase/firebase.init";
import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";



initializeFirebase();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const SignInWithGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {

            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => {
                setLoading(false);
            });
    }

    return {
        SignInWithGoogle,
        user,
        errorMsg

    }
}

export default useFirebase