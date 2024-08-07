import { createContext, useEffect, useState } from 'react';
import app from '../Configs/Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePhoneNumber, updateProfile} from "firebase/auth"
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const updateUserProfile = (name, photo ) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,  
        });
    }

    const updateNumber = (phone) => {
        return updatePhoneNumber(auth.currentUser, {
            phoneNumber: phone
        });
    }

    const userSignIn = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPwd = (email) => {
        setLoading(true);
       return sendPasswordResetEmail(auth, email);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        emailVerify,
        updateUserProfile,
        updateNumber,
        userSignIn,
        resetPwd,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;