/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Header from "../components/Header";
import Footer from "../components/layout/Footer";
import Headlines from "../components/Headlines";

const Public = () => {
  return (
    <div>
      <Header />
      <div className="pt-[76px]">
        <Headlines />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Public;
