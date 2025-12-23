import ReactDOM from "react-dom/client"; // for React 18+
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//react dom take this object heading and convert to html and replaced whatever we have in root id
root.render(<AppLayout />);
