import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Opps!!!</h1>
      <div>something went wrong </div>
      <div>
        {error.status}-{error.statusText}
      </div>
    </div>
  );
};
export default Error;
