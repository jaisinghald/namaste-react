import Users from "./Users";
import UsersClass from "./UsersClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor is called");
  }
  componentDidMount() {
    //console.log("Parent componentDidMount is called");
  }
  render() {
    //console.log("Parent render is called");
    return (
      <div>
        <h1>About Us Page</h1>
        {/* <Users name={"Jai Singh (function)"} /> */}
        <UsersClass name={"First (class)"} location={"Delhi Class"} />
      </div>
    );
  }
}
export default About;
/*
1. Constructor is called
2. Render is called 
3. First Constructor is called
4. First Render is called
5. Second Constructor is called
6. Second Render is called
->dom is updated in single batch
7. First componentDidMount is called
8. Second componentDidMount is called
9. Parent componentDidMount is called   
*/
