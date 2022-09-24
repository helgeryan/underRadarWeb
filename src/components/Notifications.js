import React, { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "./Profile";

const renderNotification = (notification, index) => {
    console.log(notification);
    return (
        <tr key={index}>
            <td>{notification.email} </td>
            <td>{notification.text} </td>
            <td>{notification.type} </td>
        </tr>
    )
 };

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const profileRef = ref(db, 'ryanhelgeson14-gmail-com/Notifications');
        onValue(profileRef, (snapshot) => {
            let notifications = snapshot.val()
            console.log(notifications);
            setNotifications(notifications)
        })
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Text</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {[notifications.map(renderNotification)]}
            </tbody>
        </table>
    )
}

export default Notifications;