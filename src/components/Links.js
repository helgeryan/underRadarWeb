import React, { Component } from "react";
import DarkTable from "./DarkTable";

const players = [
    {position: "forward", name: "Lebron James", team: "Lakers"},
    {position: "guard", name: "Russel Westbrook", team: "Rockets"},
    {position: "guard", name: "James Harden", team: "Rockets"},
    {position: "guard", name: "Luka Doncic", team: "Mavericks"},
 ];

export default class Links extends Component {

    render() {
        return (
            <div>
                <DarkTable players={players}/>
            </div>
        )
    }
}