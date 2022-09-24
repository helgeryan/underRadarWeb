import React, { useState, useEffect } from "react";
import app from "../util/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import Image from 'react-bootstrap/Image';

 const db = getDatabase(app);
 export const globalData = {};

 const renderPlayer = (notification, index) => {
    return (
        <tr key={index}>
            <td>{notification.email} </td>
            <td>{notification.text} </td>
            <td>{notification.username} </td>
        </tr>
    )
 }

 const renderPost = (post, index) => {
    console.log(post.caption);
    return (
        <video width="320" height="auto" key={index} controls>
            <source src={post.url} />
        </video>
    )
 }

 function Profile() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const profileRef = ref(db, 'ryanhelgeson14-gmail-com');
        onValue(profileRef, (snapshot) => {
            let user = snapshot.val()
            globalData.user = user;
            console.log(user);
            setUser(user)
        })
    }, []);

    return (
        <div className="container">
            <Image  width="320" height="auto" src={user.profilePicUrl} thumbnail="true" />
            <h1>{user.firstname + " " + user.lastname}</h1>
            <h2>{user.bio}</h2>
            {/* <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                { user.Notifications && user.Notifications.length > 0 && (
                    user.Notifications.map(renderPlayer)
                )}
                </tbody>
            </table> */}

            { user.Posts && user.Posts.length > 0 && (
                user.Posts.map(renderPost)
            )}
        </div>
    )
 }

 export default Profile;