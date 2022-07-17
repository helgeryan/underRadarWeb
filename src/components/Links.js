import React, { useState, useEffect } from "react";
import DarkTable from "./DarkTable";
import app from "../util/firebase";
import { getDatabase, onValue, ref } from "firebase/database"

 const db = getDatabase(app);


 var pulledUsers = [];
 var query

 function Links() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersRef = ref(db, 'users');
        onValue(usersRef, (snapshot) => {
            if (Array.isArray(snapshot.val())) {
                pulledUsers = snapshot.val();
                console.log("pulledUsers")
                console.log(pulledUsers)
                var stuff = snapshot.val();
                console.log(pulledUsers.length)
                stuff = stuff.filter(filterUsers)
                setUsers(stuff);
            }
        })
    }, []);

    function handleChange(event) {
        query = event.target.value;
        var stuff = pulledUsers;
        stuff = stuff.filter(filterUsers)
        setUsers(stuff);
    }

    function filterUsers(value) {
        // console.log(value);
        if ( typeof value.name == 'string') {
            // console.log(value.name)
            console.log(query)
            return value.name.toLowerCase().includes(query);
        } else {
            console.log('bad')
            return true
        }
    }

    return (
        <div>
            <input placeholder="Search users.." onChange={handleChange}/>
            <DarkTable players={users}/>
        </div>
    )
 }

export default Links;

// export default class Links extends Component {

//     render() {
//         return (
//             <div>
//                 <DarkTable players={players}/>
//             </div>
//         )
//     }
// }