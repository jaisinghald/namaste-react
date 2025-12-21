import React from "react"
import ReactDOM from "react-dom/client"; // for React 18+

//create nested tag
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")]
    )
    , React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")]
    )])

 
console.log(parent)//object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)