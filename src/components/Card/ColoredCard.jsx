import PropTypes from "prop-types";
import classNames from "classnames";

const ColoredCard = ({
  backgroundColor,
  className,
  isThreeColumn,
  icon,
  title,
  total,
}) => {
  return (
    <section
      className={classNames(
        "w-full transition duration-500 hover:scale-105",
        className,
        {
          "lg:w-3/12": isThreeColumn,
          "lg:w-4/12": !isThreeColumn,
        }
      )}
    >
      <div className="p-2">
        <div
          className="rounded-[0.625rem] p-2 h-44 flex flex-col justify-between"
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <div className="px-4 pt-4 ">{icon}</div>
          <div className="px-4 py-3">
            <p className="font-Inter font-medium text-base leading-7">
              {title}
            </p>
            <p className=" pt-2 pb-1 text-4xl font-Poppins font-semibold leading-7 text-tertiary">
              {total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

ColoredCard.propTypes = {
  backgroundColor: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  isThreeColumn: PropTypes.bool,
  title: PropTypes.string,
  total: PropTypes.string,
};

ColoredCard.defaultProps = {
  backgroundColor: null,
  icon: null,
  isThreeColumn: false,
  title: null,
  total: null,
};
export default ColoredCard;
