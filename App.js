import React from "react";
import ReactDOM from "react-dom/client"; // for React 18+

//JSX (trnaspiled this code before reach to javascript engine )-parcel pass the control to babel package who doest the transpile.
//JSX  React.Createelement=>reactelement => JS Oject=>HtmlElement
//React element
const Title = () => <h1 className="head">Namaste react using jsx test</h1>;
//const title = <h1 className="head">Namaste react using jsx</h1>;

//React Component
//Class component -OLd
//Functional Component -New
var number = 10; //js variable
//React functional Component -New
//component composition when put one component in other
const HeadingComponent = () => (
  <div id="container">
    {/* javascript expression we can use in side js */}
    {/* call component in this way as well */}
    {Title()}
    {/* and this way as well */}
    <Title />
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//react dom take this object heading and convert to html and replaced whatever we have in root id
root.render(<HeadingComponent />);
