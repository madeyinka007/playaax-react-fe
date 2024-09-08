/* eslint-disable react/prop-types */

const DefaultBadge = ({ text }) => {
  return (
    <div className="bg-gray-50/10  text-white font-Poppins text-xs lg:text-sm font-normal me-2 px-2.5 py-0.5 rounded-full  border border-gray-100 inline-flex items-center justify-center">
      {text}
    </div>
  );
};

export default DefaultBadge;
