import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // user sign up
    const createUser = (email, password) => {
        setLoading(true) // user create হয়ে আসতে আসতে loading হবে। অনেক সময় সমস্যা করতে পারে। যে  route থেকে আসা হয়েছে তা change হবে না।
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //user sign in
    const signIn = (email, password) => {
        setLoading(true)  // user login হয়ে আসতে আসতে loading হবে। অনেক সময় সমস্যা করতে পারে। যে  route থেকে আসা হয়েছে তা change হবে না।
        return signInWithEmailAndPassword(auth, email, password);
    }
    //user log out
    const logOut = () => {
        return signOut(auth)
    }
    //observer user auth state 
    // এটা useEffect এর মধ্যে রাখতে হবে কারণ, observer টা reload এর সময় outside এর api এর সাথে কাজ করবে। তাই useEffect দিতে হবে। কিন্তু event tigger এর সময় useEffect দরকার হয় না।

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false) // user চলে আসলে loading বন্ধ হয়ে যাবে।
        })
        //stop observer while unmounting
        //user যখন এই application থেকে বের হয়ে যাবে বা signout করবে, তখন onAuthStateChanged state টাকে ছেড়ে দিতে হবে বা observer টাকে বন্ধ করতে হবে। করণ এটা state টাকে ধরে রাখে। তাই onAuthStateChanged কে একটা variable এর মধ্যে রেখে একটি annonimous arrow function এর মধ্যে variable টাকে call করে return করতে হবে ।
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children} {/*children এসেছে main.jsx থেকে*/}
        </AuthContext.Provider>
    );
};

export default AuthProvider;