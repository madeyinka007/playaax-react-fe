/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { BoldArrowIcon, ClockIcon, HeadingsIcon } from "../assets/SvgsIcons";
import { Button } from "../components/Form/Button";
// import Header from "../components/Header";
// import Headlines from "../components/Headlines";
import HeroSlider from "../components/HeroSlider";
import Ads1 from "src/assets/images/T&C.png";
import HookForm from "src/components/Form/Form";
// import { Input } from "src/components/Form/Input";
import CustomSelect from "src/components/Form/Select/CustomSelect";

import { productSchema } from "src/schema/productSchema";

import mobile from "src/assets/images/9mobile.png";
import mtn from "src/assets/images/mtn.png";
import glo from "src/assets/images/glo.png";
import airtel from "src/assets/images/airtel.png";
import adbanner from "src/assets/images/adbanner.png";
import adbanner2 from "src/assets/images/adbanner-2.png";

import champion from "src/assets/images/champions-league.png";
import Premier from "src/assets/images/Premier.png";
import LaLiga from "src/assets/images/LaLiga.png";
import League from "src/assets/images/ligue-1.png";
import Basketball from "src/assets/images/basketball.png";
import football from "src/assets/images/football.png";
import Bundesliga from "src/assets/images/bundesliga.png";
import Italian_Serie_A from "src/assets/images/Italian_Serie.png";

import clubIcon1 from "src/assets/images/i-1.png";
import clubIcon2 from "src/assets/images/i-2.png";
import clubIcon3 from "src/assets/images/i-3.png";
import clubIcon4 from "src/assets/images/i-4.png";
import clubIcon5 from "src/assets/images/i-5.png";
import clubIcon6 from "src/assets/images/i-6.png";

import facebookIcon from "src/assets/images/facebook-icon.png";
import twitterIcon from "src/assets/images/twitter-icon.png";
import instagramIcon from "src/assets/images/instagram.png";
import { Input } from "src/components/Form/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "src/Redux/posts/postsThunk";
import { formatDateTime } from "src/utils/constant";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";
import { Link } from "react-router-dom";
import { fetchCategorys } from "src/Redux/category/categoriesThunk";
import CategoryItem from "src/components/ui/CategoryItem";
import classNames from "classnames";

export const categoryData = [
  { name: "Premier League", icon: Premier },
  { name: "Champions League", icon: champion },
  { name: "Bundesliga", icon: Bundesliga },
  { name: "LaLiga", icon: LaLiga },
  { name: "Italian Serie A", icon: Italian_Serie_A },

  { name: "Basketball", icon: Basketball },

  { name: "Ligue 1", icon: League },
  { name: "Transfer Talk", icon: football },
  { name: "Transfer News", icon: football },
];

const Home = () => {
  const dispatch = useDispatch();

  const [loadMore, setLoadMore] = useState(3);

  const toggleMore = () => setLoadMore(loadMore + 3);

  const airtimeData = [
    { name: "MTN", network: "mtn", avatar: mtn },
    { name: "GLO", network: "glo", avatar: glo },
    { name: "Airtel", network: "airtel", avatar: airtel },
    { name: "9mobile", network: "9mobile", avatar: mobile },
  ];

  const socialData = [
    { name: "Facebook", icon: facebookIcon, url: "https://facebook.com" },
    { name: "Twitter", icon: twitterIcon, url: "https://twitter.com" },
    { name: "Instagram", icon: instagramIcon, url: "https://instagram.com" },
  ];

  const tagsData = [
    "Premier League",
    "LaLiga",
    "Hockey",
    "Germany ",
    "Basketball",
    "Italian Serial A",
    "Game Consoles",
    "Table Tennis",
    "French",
    "transfer News",
    "Champions League",
    "transfer",
  ];
  const [selectedAirtime, setSelectedAirtime] = useState(airtimeData[0]);

  const { posts, loading } = useSelector((state) => state.posts);
  // console.log("all posts", posts?.length);

  const { categories } = useSelector((state) => state.category);
  // console.log("all categories", categories);

  const fetchCategorysHandler = () => {
    dispatch(fetchCategorys());
  };
  useEffect(() => {
    fetchCategorysHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const lastPost = posts[posts.length - 1];
  const lastThreePost = posts?.slice(-4, -1);

  // console.log("last  data", lastPost);

  // const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomIndex = Math.floor(Math.random() * posts.length);
  const randomPost = posts[randomIndex];

  // console.log("randomPost", randomPost);

  const fetchPostsHandler = () => {
    dispatch(fetchPosts());
  };
  useEffect(() => {
    fetchPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const defaultFormValue = {
    name: "",
    brand_id: "",
  };
  const onSubmit = (data) => {
    // console.log("Form data", data);

    const filteredFormData = {
      name: data.name,
      brand_id: data.brand_id,
    };

    // console.log("filtered data", filteredFormData);
    alert(JSON.stringify(filteredFormData));
    // dispatch(addNewProduct(filteredFormData));
    // navigate("/product/inventory/");
    // setOpenModal(false);
  };
  const getPremierLeague = categories?.find(
    (c) => c.label === "Premier League"
  );

  // console.log("first page", getPremierLeague);

  return (
    <>
      {/* <Header />
      <div className="pt-[76px]">
        <Headlines />
      </div> */}
      <div className="px-4 bg-gray-100 pb-20">
        <img
          src="/imgs/ads-banner-1.png"
          alt="ads-banner"
          className="w-full h-full"
        />
        <div className=" flex flex-col lg:flex-row items-start gap-6 py-4 w-full">
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white space-y-5 rounded-xl p-5 ">
              <article className="group">
                <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                  <p>Top Categories</p>
                </div>

                <div className="px-4">
                  <CategoryItem categories={categories} />
                </div>
              </article>
            </div>
            <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-lg font-semibold uppercase text-gray-800">
                  predict & win
                </h3>
              </a>

              <p className="mt-2 pb-4 line-clamp-3 text-sm/relaxed text-gray-500">
                Predict the exact scores of the matches and stand stand a chance
                to win a price
              </p>

              <HookForm
                defaultValues={defaultFormValue}
                onSubmit={onSubmit}
                schema={productSchema}
              >
                <div className=" flex flex-col pt-2  items-start justify-center space-y-8">
                  <div className="lg:pl-6">
                    <p className=" text-xs text-gray-500 pb-2 uppercase">
                      SAT 24 AUG, 2024 11:30 AM
                    </p>
                    <div className=" flex items-center gap-10">
                      <div className=" flex flex-col gap-7">
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon1}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>Ars</p>
                        </div>
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon2}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>MAN</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium uppercase text-gray-600">
                        VS
                      </p>
                      <div className=" flex flex-col gap-4">
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pl-6">
                    <p className=" text-xs text-gray-500 pb-2">
                      SUN 24 AUG, 2024 11:30 AM
                    </p>
                    <div className=" flex items-center gap-10">
                      <div className=" flex flex-col gap-7">
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon3}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>Che</p>
                        </div>
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon4}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>MAC</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium uppercase text-gray-600">
                        VS
                      </p>
                      <div className=" flex flex-col gap-4">
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pl-6">
                    <p className=" text-xs text-gray-500 pb-2">
                      SUN 24 AUG, 2024 11:30 AM
                    </p>
                    <div className=" flex items-center gap-10">
                      <div className=" flex flex-col gap-7">
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon6}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>Liv</p>
                        </div>
                        <div className=" flex items-center gap-1.5 text-gray-800 hover:text-primary-800 font-medium uppercase cursor-pointer text-base">
                          <img
                            src={clubIcon5}
                            alt="icon "
                            className="w-6 h-auto"
                          />
                          <p>Tot</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium uppercase text-gray-600">
                        VS
                      </p>
                      <div className=" flex flex-col gap-4">
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                        <div className=" max-w-14">
                          <Input
                            name="scoreboard"
                            className="!p-1.5"
                            containerClassName="!mb-0"
                            placeholder=""
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full justify-center" size="lg" rounded>
                    Submit Predictions
                  </Button>
                </div>
              </HookForm>
            </article>
            <div className="p-5">
              <img src={adbanner2} alt=" banner ads" />
            </div>

            <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <h3 className="mt-0.5 text-lg font-semibold uppercase text-gray-800">
                Hot Tags
              </h3>

              <div className=" flex items-center gap-2 flex-wrap pt-4">
                {tagsData?.map((tagItem, tagIndex) => (
                  //   <span

                  //     className="bg-gray-100 capitalize text-gray-800 hover:bg-gray-800 hover:text-gray-100 cursor-pointer text-sm font-medium px-2.5 py-0.5 rounded"
                  //   >
                  //     {tagItem}
                  //   </span>
                  <a
                    key={tagIndex}
                    href=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-primary-600 before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative text-gray-700 text-xs font-medium z-20 transition-colors ease-in-out duration-300 group-hover:text-white">
                      {tagItem}
                    </span>
                  </a>
                ))}
              </div>
            </article>

            <div className="bg-white space-y-5 rounded-xl p-5 ">
              <article className="group">
                <div className="flex items-center gap-4  py-3 border-b mb-4   text-gray-800">
                  <p>
                    Follow{" "}
                    <span className="uppercase font-semibold text-lg">
                      PlayaaX
                    </span>{" "}
                    on:{" "}
                  </p>
                </div>

                <div className="px-0">
                  <div className=" space-y-2 py-1 pb-3">
                    {socialData?.map((socialItem, socialIndex) => (
                      <a
                        href={socialItem?.url}
                        target="_blank"
                        key={socialIndex}
                        rel="noreferrer"
                      >
                        <div className=" flex items-center gap-3 text-gray-800 hover:text-primary-800 cursor-pointer text-base border-b border-dashed pb-3">
                          <img
                            src={socialItem?.icon}
                            alt="icon "
                            className="w-7 h-7"
                          />
                          <p>{socialItem?.name}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="w-full order-first lg:order-none lg:w-2/4 space-y-6">
            <HeroSlider sliderdata={posts} />

            <div className="bg-white space-y-5 rounded-xl p-5 ">
              <div className=" flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg font-medium uppercase py-0  text-gray-800">
                  <img
                    src={getPremierLeague?.icon || Premier}
                    alt="icon "
                    className="w-9 h-9"
                  />
                  <p> {getPremierLeague?.label || "ENGLISH PREMIER LEAGUE"}</p>
                </div>
                <div>
                  <Link
                    to={`/category/${getPremierLeague?.slug}`}
                    className=" block"
                  >
                    <span className="group  inline-flex items-center gap-1 text-sm font-medium text-primary-800 pr-2">
                      Read more
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        &rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              {loading ? (
                <LoadingSpinner />
              ) : (
                <article className="group">
                  <Link to={`/posts/${lastPost?._id}`}>
                    <img
                      alt=""
                      src={
                        lastPost?.image
                          ? lastPost?.image
                          : "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      }
                      className="h-64 lg:h-[400px] w-full rounded-xl object-cover shadow-xl transition "
                    />
                  </Link>

                  <div className="p-4">
                    <Link to={`/posts/${lastPost?._id}`}>
                      <h3 className="text-lg font-medium line-clamp-2 text-gray-800 hover:text-primary-800 cursor-pointer">
                        {lastPost?.short_content}
                      </h3>
                    </Link>
                    <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                      <ClockIcon className="w-4 h-4" />

                      <p className="py-2">
                        {formatDateTime(lastPost?.createdAt)}
                      </p>
                    </div>
                    <hr />
                    <div className=" space-y-3 pt-5">
                      {lastThreePost?.map(
                        (postlastthree, lastThreePostIndex) => (
                          <div
                            key={lastThreePostIndex}
                            className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer"
                          >
                            <BoldArrowIcon className="w-2.5 h-2.5" />
                            <Link to={`/posts/${postlastthree?._id}`}>
                              <p className="line-clamp-3 text-sm/relaxed">
                                {postlastthree?.title}
                              </p>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </article>
              )}

              <div className=" flex flex-col space-y-6">
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    {posts
                      ?.slice(0, loadMore)
                      ?.map((mainPost, mainPostIndex) => (
                        <article key={mainPostIndex} className="group">
                          <Link to={`/posts/${mainPost?._id}`}>
                            <img
                              alt="post img"
                              src={
                                mainPost?.image
                                  ? mainPost?.image
                                  : "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                              }
                              className="h-64 lg:h-[400px] w-full rounded-xl object-cover shadow-xl transition "
                            />
                          </Link>

                          <div className="p-4">
                            <Link to={`/posts/${mainPost?._id}`}>
                              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold line-clamp-2 pb-2 text-gray-800 hover:text-primary-800 cursor-pointer">
                                {mainPost?.title}
                              </h3>
                            </Link>
                            <Link to={`/posts/${mainPost?._id}`}>
                              <h3 className="text-base  line-clamp-2 text-gray-600 hover:text-primary-800 cursor-pointer">
                                {mainPost?.short_content}
                              </h3>
                            </Link>
                            {/* <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                            <ClockIcon className="w-4 h-4" />

                            <p className="py-2">
                              {formatDateTime(mainPost?.createdAt)}
                            </p>
                          </div> */}
                            <div className="pt-8">
                              <hr />
                            </div>
                          </div>
                        </article>
                      ))}
                  </>
                )}

                <div
                  className={classNames(
                    "w-full flex items-center justify-center pb-4",
                    { hidden: loadMore >= posts?.length }
                  )}
                >
                  <Button
                    onClick={() => toggleMore()}
                    leftIcon={
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-primary-800"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    }
                    size="lg"
                    rounded
                  >
                    Show me More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white space-y-5 rounded-xl p-5 ">
              <img src={Ads1} alt="ads-banner" />
              <article className="group">
                <div className="flex items-center gap-4 text-lg font-semibold uppercase py-3 border-b mb-4 text-gray-800">
                  <HeadingsIcon />
                  <p>Top Headlines</p>
                </div>
                <div className="p-4">
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <div>
                      <img
                        alt=""
                        src={randomPost?.image}
                        className="h-56 w-full rounded-xl object-cover shadow-xl transition "
                      />

                      <div className="">
                        <Link
                          to={`/posts/${randomPost?._id}`}
                          className="pb-4 block"
                        >
                          <h3 className="text-lg pt-4 font-medium text-gray-800 hover:text-primary-800 cursor-pointer">
                            {randomPost?.title}
                          </h3>
                        </Link>
                        {/* <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                    <ClockIcon className="w-4 h-4" />
                    <p className="py-2">
                      {formatDateTime(randomPost?.createdAt)}
                    </p>
                  </div> */}
                        <hr />
                      </div>
                    </div>
                  )}
                  <div className=" space-y-3 py-5">
                    {posts?.slice(0, 11)?.map((sideBlog, sideBlogIndex) => (
                      <div
                        key={sideBlogIndex}
                        className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer"
                      >
                        <BoldArrowIcon className="w-2.5 h-2.5" />
                        <Link to={`/posts/${sideBlog?._id}`}>
                          <p>{sideBlog?.title}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <article className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-lg font-semibold uppercase text-gray-800">
                  Click and win
                </h3>
              </a>

              <p className="mt-2 pb-4 line-clamp-3 text-sm/relaxed text-gray-500">
                Daily recharge cards to be won by lucky users
              </p>

              <HookForm
                defaultValues={defaultFormValue}
                onSubmit={onSubmit}
                schema={productSchema}
              >
                <Input
                  name="email"
                  // label="Listing Price"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className="pb-4">
                  <CustomSelect
                    label="Select your network provider"
                    selected={selectedAirtime}
                    setSelected={setSelectedAirtime}
                    data={airtimeData}
                    withImage={true}
                    placeholder="Select network provider"
                  />
                </div>
                <Button className="w-full justify-center" size="lg" rounded>
                  Click To Win{" "}
                </Button>
              </HookForm>
            </article>

            <div className="p-5">
              <img src={adbanner} alt=" banner ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
