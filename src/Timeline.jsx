import React, { Component } from "react";
import Chirp from "./Chirp";

class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                {
                    name: "Josh",
                    message: "This is the first chirp"
                },
                {
                    name: "Rashad",
                    message: "This is the second chirp"
                },
            ]
        }
    }

    render() {
        this.state.chirps.map(chirp => {
            // create a Chirp for each one.

            return <Chirp chirps={this.state.chirps}/>
        })
    }
}

export default Timeline