/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Public = () => {
  return <Outlet />;
};

export default Public;
