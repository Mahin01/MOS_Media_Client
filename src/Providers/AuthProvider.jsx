import { createContext, useEffect, useState } from 'react';
import app from '../Configs/Firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

 export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const userSignIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);     
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        userSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;