import React from "react";
class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "test name",
        location: "test location",
      },
    };
  }
  async componentDidMount() {
    //console.log("Parent componentDidMount is called");
    const data = await fetch("https://api.github.com/users/jaisinghald");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }
  render() {
    const { name, location } = this.state.userInfo;
    console.log(name);
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} alt="User Avatar" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Role:Developer </h3>
      </div>
    );
  }
}
export default UsersClass;
/*
Moutning process of class component
1.      Constructor is called (Default)
2.         Render is called (Default) 
          <html with dummy data is rendered on the screen>(Default)
3.         componentDidMount is called  
              <API call>
              <this.setState> (vaibale updated with API data)
    ---Update
         render(new api data)
         <html with new API data is rendered on the screen>
         ComponetDidUpdate is called (if we have written)
*/
