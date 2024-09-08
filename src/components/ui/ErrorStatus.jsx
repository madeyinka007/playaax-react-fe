/* eslint-disable react/prop-types */
import EmptyImage from "src/assets/images/404-light.svg";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Form/Button";

const ErrorStatus = ({ message, link, statusCode, reload }) => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0); // Reloads the current page
  };

  return (
    <div className="pb-32  w-full h-full flex flex-col items-center justify-center space-y-6">
      <div className="relative pt-12 ">
        <h2 className="text-[280px] text-gray-300 font-bold ">
          {statusCode || 404}
        </h2>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[-40%] ">
          <img src={EmptyImage} alt="error" className="w-40 h-40" />
        </div>
      </div>
      <div className="!-mt-4">
        <p className="text-base text-gray-600 max-w-lg text-center ">
          {message}
        </p>
      </div>
      {reload ? (
        <Button onClick={handleReload}>Go Back Home</Button>
      ) : (
        <Link to={link}>
          <Button>Go Back Home</Button>
        </Link>
      )}
    </div>
  );
};

export default ErrorStatus;
