import React, { useContext } from 'react';
import { AuthContext } from '../component/providers/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    //children কে শর্ত সাপেক্ষ পাঠানো হবে শর্ত হলে যদি user থাকে তাহলে children পাবে।
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    //যখন private route এর page গুলো reload দেয়া হয় তখন user এর promiss আসতে আসতে user কে navigate করে login এ পাঠিয়ে দেয়। তাই কনডিশন দেয়া হলো যতক্ষন user না আসবে ততক্ষন loading হবে।
    if (loading) {
        return <div><h2>Loading...</h2></div>
    }
    if (user) {
        return children;
    }
    // যদি user না থাকে তাহলে user login page এ চলে যাবে। Navigate component এর মাধ্যমে
    // user কে যখন login page এ পাঠানো হবে, তখন যে পেজ থেকে user যাচ্ছিলো সে page এর location টা login page এর state এ সেট করে দেওয়ার জন্য state={{ from: location }} ব্যবহার করা হয়েছে।
    // replace টা হলো যে history টাকে replace করে দিবে, কারণ navigate করে যে page থেকে এ নিয়ে আসছে এটার history আমরা চাই না।
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;