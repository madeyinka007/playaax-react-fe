/* eslint-disable react/prop-types */

import classNames from "classnames";
import { Link } from "react-router-dom";

const NavLink = ({ url, title }) => {
  return (
    <li className={classNames("block py-2 underline-on-hover ", {})}>
      <Link className="text-white font-ClashDisplay" to={url}>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
