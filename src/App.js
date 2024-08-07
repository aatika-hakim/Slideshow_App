import React from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
import Header from "./components/Header";
const title = "Slideshow App";

function App({ slides }) {
    return (
        <div>
            <Header />
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
}

export default App;
