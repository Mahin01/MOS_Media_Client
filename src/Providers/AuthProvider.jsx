import { createContext, useState } from 'react';
import app from '../Configs/Firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"

 export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const userSignIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        userSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;