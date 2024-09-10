/* eslint-disable react/prop-types */

import classNames from "classnames";
import PropTypes from "prop-types";

const DefaultBadge = ({
  text,
  className = "text-white bg-gray-50/10 border-gray-100",
}) => {
  return (
    <div
      className={classNames(
        " capitalize font-Poppins text-xs lg:text-sm font-normal me-2 px-2.5 py-0.5 rounded-full  border  inline-flex items-center justify-center",
        className
      )}
    >
      {text}
    </div>
  );
};

DefaultBadge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DefaultBadge;
