import { BoldArrowIcon, ClockIcon, HeadingsIcon } from "src/assets/SvgsIcons";
import recordCardData from "../../data/transactionCard";
import ColoredCard from "../Card/ColoredCard";
import CreateCard from "../Card/CreateCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategorys } from "src/Redux/category/categoriesThunk";
import { fetchPosts } from "src/Redux/posts/postsThunk";
import { formatDateTime } from "src/utils/constant";
// import Skelton from "./Skelton";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  // console.log("all categories", categories);
  const { posts } = useSelector((state) => state.posts);

  const lastPost = posts[posts.length - 1];
  const lastTenPost = posts?.slice(-11, -1);
  const fetchPostsHandler = () => {
    dispatch(fetchPosts());
  };
  useEffect(() => {
    fetchPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const fetchCategorysHandler = () => {
    dispatch(fetchCategorys());
  };
  useEffect(() => {
    fetchCategorysHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Good afternoom, Admin
        </h1>
        <h2 className="text-gray-600 text-sm">
          Here&apos;s what&apos;s happening with your ambassador account today.
        </h2>
      </div>
      <div className="flex flex-wrap">
        <CreateCard />
        {recordCardData.map(
          ({ backgroundColor, icon, title, total }, index) => {
            return (
              <ColoredCard
                key={index}
                isThreeColumn
                backgroundColor={backgroundColor}
                title={title}
                icon={icon}
                total={total}
              />
            );
          }
        )}
      </div>

      <div className=" flex flex-col lg:flex-row items-start gap-6 py-4 px-3 w-full">
        <div className="w-full lg:w-2/3 space-y-6">
          <div className="bg-white space-y-5 rounded-xl p-5 ">
            <article className="group">
              <div className="flex items-center gap-4 text-lg font-semibold uppercase py-3 border-b mb-4 text-gray-800">
                <HeadingsIcon />
                <p>Recent Posts</p>
              </div>

              <div className="p-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 hover:text-primary-800 cursor-pointer">
                    {lastPost?.title}
                  </h3>

                  <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                    <ClockIcon className="w-4 h-4" />
                    <p className="py-2">
                      {formatDateTime(lastPost?.createdAt)}
                    </p>
                  </div>

                  <hr />
                </div>

                <div className=" space-y-3 py-5">
                  {lastTenPost?.map((postItem, postIndex) => (
                    <div
                      key={postIndex}
                      className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer"
                    >
                      <BoldArrowIcon className="w-2.5 h-2.5" />
                      <p>{postItem?.title}</p>
                    </div>
                  ))}
                  {/* <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                    <BoldArrowIcon className="w-2.5 h-2.5" />
                    <p>
                      Meet the stand-out NWSL teenager tipped for a USWNT debut
                    </p>
                  </div> */}
                  {/* <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                    <BoldArrowIcon className="w-2.5 h-2.5" />
                    <p>
                      Liverpool preparing blockbuster offer for Everton &apos;s
                      Branthwaite
                    </p>
                  </div>
                  <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                    <BoldArrowIcon className="w-2.5 h-2.5" />
                    <p>
                      Gundogan is back! Man City confirm midfielder&apos;s
                      return
                    </p>
                  </div> */}
                </div>
                {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p> */}
              </div>
            </article>
          </div>
        </div>
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white space-y-5 rounded-xl p-5 ">
            <article className="group">
              <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                <p>All Categories</p>
              </div>

              <div className="px-4">
                <div className=" space-y-2.5 pt-2 pb-5">
                  {categories?.map((catItem, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className=" flex items-center gap-3 text-gray-800 hover:text-primary-800 cursor-pointer text-base"
                    >
                      <img
                        src={catItem?.icon}
                        alt="icon "
                        className="w-7 h-7"
                      />
                      <p>{catItem?.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* <div className="px-4 py-5 border-b rounded-t sm:px-6">
        <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            <li>
              <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 text-md dark:text-white md:truncate">
                      Increase sales by 10% year over year
                    </p>
                    <div className="flex flex-shrink-0 ml-2">
                      <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        On-Track
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                        January 7, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 text-md dark:text-white md:truncate">
                      Increase newsletter subscribers by 500
                    </p>
                    <div className="flex flex-shrink-0 ml-2">
                      <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        To do
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                        Jun 14, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 text-md dark:text-white md:truncate">
                      Increase customer satisfaction rating by 10 points
                    </p>
                    <div className="flex flex-shrink-0 ml-2">
                      <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        Backlog
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                        December 10, 2020
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div className="w-full p-4 mx-auto md:w-1/2">
            <button
              type="button"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              View all
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
