// import { PlusIcon } from "src/assets/SvgsIcons";
import { Link } from "react-router-dom";
import { PlusIcon } from "../../assets/SvgsIcons";

const CreateCard = () => {
  return (
    <section className="w-full  transition duration-500 hover:scale-105 lg:w-3/12">
      <div className="p-2">
        <div className="rounded-[0.625rem] h-44 flex items-center justify-center bg-white">
          <div className="p-4 ">
            <Link
              to="/admin/posts/create"
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center  rounded-full w-12 h-12 bg-gray-100">
                <PlusIcon className="w-6 h-6" />
              </div>
              <div className="px-4 py-2">
                <p className="font-Inter font-medium text-base text-center leading-7 cursor-pointer text-secondary-500">
                  Create new post
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCard;
