import React, { useContext } from 'react';
import { AuthContext } from '../component/providers/authProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    //children কে শর্ত সাপেক্ষ পাঠানো হবে শর্ত হলে যদি user থাকে তাহলে children পাবে।
    const { user, loading } = useContext(AuthContext);
    //যখন private route এর page গুলো reload দেয়া হয় তখন user এর promiss আসতে আসতে user কে navigate করে login এ পাঠিয়ে দেয়। তাই কনডিশন দেয়া হলো যতক্ষন user না আসবে ততক্ষন loading হবে।
    if (loading) {
        return <div><h2>Loading...</h2></div>
    }
    if (user) {
        return children
    }
    // যদি user না থাকে তাহলে user login page এ চলে যাবে। Navigate component এর মাধ্যমে
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;