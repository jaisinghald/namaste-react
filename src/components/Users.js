import { useEffect, useState } from "react";
const Users = ({ name }) => {
  const [count] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("useEffect called");
    setCount2(count2 + 1);
    return () => {
      //cleare setinterval or any side effect
      console.log("useEffect return function called"); //when component is unmounted this function will be called.
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count} </h1>
      <h1>Count2: {count2} </h1>
      <h1>Name:{name}</h1>
      <h2>Location:Delhi</h2>
      <h3>Role:Developer </h3>
    </div>
  );
};
export default Users;
