import { BoldArrowIcon, ClockIcon, HeadingsIcon } from "src/assets/SvgsIcons";
import recordCardData from "../../data/transactionCard";
import ColoredCard from "../Card/ColoredCard";
import CreateCard from "../Card/CreateCard";
import { categoryData } from "src/Pages/Home";
// import Skelton from "./Skelton";

const Dashboard = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Good afternoom, Charlie
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
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-800 hover:text-primary-800 cursor-pointer">
                    Bayern & Kane face uphill battle to dethrone Leverkusen
                  </h3>
                </a>
                <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                  <ClockIcon className="w-4 h-4" />
                  <p className="py-2">20 Aug 2024, 03:55 AM</p>
                </div>
                <hr />
                <div className=" space-y-3 py-5">
                  <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                    <BoldArrowIcon className="w-2.5 h-2.5" />
                    <p>Fulham sign Palhinha from Sporting Lisbon</p>
                  </div>
                  <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                    <BoldArrowIcon className="w-2.5 h-2.5" />
                    <p>
                      Meet the stand-out NWSL teenager tipped for a USWNT debut
                    </p>
                  </div>
                  <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
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
                  </div>
                </div>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white space-y-5 rounded-xl p-5 ">
            <article className="group">
              <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                <p>Top Categories</p>
              </div>

              <div className="px-4">
                <div className=" space-y-2 py-5">
                  {categoryData?.map((catItem, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className=" flex items-center gap-3 text-gray-800 hover:text-primary-800 cursor-pointer text-base"
                    >
                      <img
                        src={catItem?.icon}
                        alt="icon "
                        className="w-7 h-7"
                      />
                      <p>{catItem?.name}</p>
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
