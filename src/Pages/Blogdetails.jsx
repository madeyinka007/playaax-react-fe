/* eslint-disable jsx-a11y/anchor-is-valid */
// import Headlines from "src/components/Headlines";
// import Header from "src/components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchPost, fetchPosts } from "src/Redux/posts/postsThunk";
import LoadingSpinner from "src/components/Loading/LoadingSpinner";
import ErrorStatus from "src/components/ui/ErrorStatus";
// import { DiscussionEmbed } from "disqus-react";
import { formatDateOnly } from "src/utils/constant";
import addside from "../assets/images/ads-sidebar.png";
import CategoryItem from "src/components/ui/CategoryItem";
import { fetchCategorys } from "src/Redux/category/categoriesThunk";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";

const tagsData = [
  "Hockey",
  "BasketBall",
  "FootBall",
  "Uefa",
  "Boxing",
  "Table Tennis",
  "Volley Ball",
  "Premeier League",
  "Laliga",
  "Transfer News",
];
const Blogdetails = () => {
  const { _id } = useParams(); // Type assertion for _id
  const { posts, post, loading, error } = useSelector((state) => state.posts);

  // console.log("_id gotten", _id);
  // console.log("single posts", post);

  const postData = post?.response;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(_id));
  }, [_id, dispatch]);

  const fetchPostsHandler = () => {
    dispatch(fetchPosts());
  };
  useEffect(() => {
    fetchPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const { categories } = useSelector((state) => state.category);
  //  console.log("all categories", categories);

  const fetchCategorysHandler = () => {
    dispatch(fetchCategorys());
  };
  useEffect(() => {
    fetchCategorysHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const baseUrl = window.location.origin;

  const location = useLocation();
  const currentPath = location.pathname;

  // console.log("test base", baseUrl);
  // console.log("first path: ", currentPath);

  const shareUrl = `https://playaax.com${currentPath}`;

  // console.log("test base", shareUrl);

  return (
    <div>
      {/* <Header />
      <div className="pt-[68px]">
        <Headlines />
      </div> */}
      <div className="bg-gray-100 px-4">
        <section className="py-16 md:py-[100px]">
          <div className="container w-full mx-auto grid grid-cols-8 text-gray-600 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
            <div className="col-span-8">
              {loading ? (
                <div className="min-h-[200px] flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              ) : error ? (
                <ErrorStatus
                  message={JSON.stringify(error?.message)}
                  statusCode={error?.status_code || error?.status}
                  link="/admin/product/categories"
                  reload
                />
              ) : (
                <div className="w-full">
                  <img
                    src={postData?.image}
                    alt="Post gallery "
                    className="w-full object-cover rounded-lg"
                  />
                  <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-gray-800 font-semibold mt-[30px]">
                    {postData?.title}
                  </h1>
                  <div className="flex mt-[22px] mb-2 gap-4 items-center">
                    <div
                      className="text-paragraph flex-1 first-letter:font-bold first-letter:text-4xl first-letter:text-gray-800  space-y-4"
                      dangerouslySetInnerHTML={{
                        __html: `${postData?.content}`,
                      }}
                    ></div>
                  </div>

                  {/* <DiscussionEmbed
                    shortname="playaax-com"
                    config={{
                      url: this.props.article.url,
                      identifier: this.props.article.id,
                      title: this.props.article.title,
                      language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
                    }}
                  /> */}
                  {/* <div className="my-10">
                    <DiscussionEmbed
                      shortname="playaax-com"
                      config={{
                        url: `/posts/${postData?._id},`,
                        identifier: postData?._id,
                        title: postData?.title,
                        // language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
                      }}
                    />
                  </div> */}
                  <div className="">
                    <div className="flex flex-col sm:flex-row gap-4 items-center mt-8 pt-8 sm:mt-0">
                      <h1 className="text-18  text-gray-800 font-semibold">
                        Share Post on:
                      </h1>
                      <div className=" flex gap-2 flex-wrap">
                        <FacebookShareButton
                          url={shareUrl}
                          quote={"playaax.com post"}
                          hashtag={"#playaaxpost..."}
                        >
                          <FacebookIcon size={30} round={true} />
                        </FacebookShareButton>

                        <WhatsappShareButton
                          url={shareUrl}
                          quote={"playaax.com post"}
                          hashtag={"#playaaxpost..."}
                        >
                          <WhatsappIcon size={30} round={true} />
                        </WhatsappShareButton>

                        <TwitterShareButton
                          url={shareUrl}
                          quote={"playaax.com post"}
                          hashtag={"#playaaxpost..."}
                        >
                          <TwitterIcon size={30} round={true} />
                        </TwitterShareButton>

                        <LinkedinShareButton
                          url={shareUrl}
                          quote={"playaax.com post"}
                          hashtag={"#playaaxpost..."}
                        >
                          <LinkedinIcon size={30} round={true} />
                        </LinkedinShareButton>
                        <TelegramShareButton
                          url={shareUrl}
                          quote={"playaax.com post"}
                          hashtag={"#playaaxpost..."}
                        >
                          <TelegramIcon size={30} round={true} />
                        </TelegramShareButton>
                        {/* <a
                          href=""
                          aria-label="facebook"
                          className="text-paragraph hover:text-purple transition-all duration-300"
                        >
                          <svg
                            width={11}
                            height={16}
                            viewBox="0 0 11 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          aria-label="twitter"
                          className="text-paragraph hover:text-purple transition-all duration-300"
                        >
                          <svg
                            width={20}
                            height={17}
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4302 0C11.2382 0 9.46131 1.86585 9.46131 4.1675C9.46131 4.5153 9.50189 4.85315 9.57834 5.17611C7.47071 5.17611 4.29615 4.74999 1.64488 2.09376C1.29233 1.74054 0.642232 1.9767 0.666686 2.47516C1.0596 10.484 4.48955 12.8202 6.25587 12.9656C5.11528 14.0921 3.45844 14.9813 1.79122 15.3804C1.35121 15.4857 1.24251 15.9674 1.67277 16.1073C2.86574 16.4953 4.57331 16.6448 5.49244 16.67C11.9946 16.67 17.2794 11.1972 17.3971 4.3991C18.2507 3.84394 18.7976 2.63855 19.1048 1.78464C19.1796 1.57667 18.8388 1.33436 18.6348 1.41931C17.9971 1.68479 17.1874 1.74773 16.4978 1.52302C15.7699 0.593104 14.666 0 13.4302 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          aria-label="instagram"
                          className="text-paragraph hover:text-purple transition-all duration-300"
                        >
                          <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.11523 0C2.35381 0 0.115234 2.23858 0.115234 5V11.33C0.115234 14.0914 2.35381 16.33 5.11524 16.33H11.4452C14.2067 16.33 16.4452 14.0914 16.4452 11.33V5C16.4452 2.23858 14.2067 0 11.4452 0H5.11523ZM13.1798 4.08222C13.6307 4.08222 13.9963 3.71666 13.9963 3.26572C13.9963 2.81478 13.6307 2.44922 13.1798 2.44922C12.7288 2.44922 12.3633 2.81478 12.3633 3.26572C12.3633 3.71666 12.7288 4.08222 13.1798 4.08222ZM12.3623 8.16551C12.3623 10.4202 10.5345 12.248 8.27977 12.248C6.02506 12.248 4.19727 10.4202 4.19727 8.16551C4.19727 5.91081 6.02506 4.08301 8.27977 4.08301C10.5345 4.08301 12.3623 5.91081 12.3623 8.16551ZM8.27958 10.6138C9.6324 10.6138 10.7291 9.51717 10.7291 8.16434C10.7291 6.81152 9.6324 5.71484 8.27958 5.71484C6.92676 5.71484 5.83008 6.81152 5.83008 8.16434C5.83008 9.51717 6.92676 10.6138 8.27958 10.6138Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                        <a
                          href=""
                          aria-label="dribble"
                          className="text-paragraph hover:text-purple transition-all duration-300"
                        >
                          <svg
                            width={17}
                            height={17}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.524052 9.30802C0.924329 12.1654 2.80355 14.5487 5.36306 15.659C5.47512 13.356 5.95067 11.1433 6.7362 9.07041C5.89882 8.9105 5.03169 8.82648 4.14321 8.82648C2.88602 8.82648 1.67174 8.99469 0.524052 9.30802ZM6.57217 16.0737C7.22347 16.241 7.90618 16.33 8.60968 16.33C10.953 16.33 13.0657 15.3429 14.5548 13.7617C12.9294 11.6968 10.6209 10.1289 7.93798 9.35723C7.1216 11.4629 6.64582 13.7214 6.57217 16.0737ZM15.3419 12.7863C16.2457 11.4722 16.7747 9.88038 16.7747 8.165C16.7747 8.02114 16.771 7.87815 16.7636 7.73612C15.8939 7.89367 14.9964 7.97608 14.079 7.97608C12.2835 7.97608 10.5646 7.66043 8.98191 7.0839C8.78252 7.4571 8.59437 7.83648 8.41787 8.22164C11.1904 9.04927 13.5969 10.6611 15.3419 12.7863ZM16.6088 6.51933C16.1842 4.44472 14.9728 2.65674 13.3 1.48077C11.864 2.8241 10.6176 4.3446 9.60064 6.00404C10.9951 6.48713 12.5035 6.75133 14.079 6.75133C14.9453 6.75133 15.7911 6.67147 16.6088 6.51933ZM12.2047 0.832001C11.12 0.299202 9.89978 0 8.60968 0C6.71878 0 4.978 0.642773 3.59394 1.72174C4.84339 3.34139 6.5099 4.66239 8.44771 5.54348C9.48209 3.81972 10.748 2.23669 12.2047 0.832001ZM2.68441 2.54729C1.31815 3.98787 0.471669 5.92628 0.445312 8.06219C1.62485 7.76178 2.8647 7.60173 4.14321 7.60173C5.1964 7.60173 6.22326 7.71034 7.21172 7.91649C7.40855 7.47512 7.61972 7.04087 7.84467 6.61427C5.79912 5.66611 4.02972 4.26525 2.68441 2.54729Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-8 lg:col-span-4 space-y-8">
              <div className="">
                <div className="bg-white space-y-5 rounded-xl p-5 ">
                  <article className="group">
                    <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                      <p> Categories</p>
                    </div>

                    <div className="px-4">
                      <CategoryItem categories={categories} />
                    </div>
                  </article>
                </div>
              </div>
              <div className="">
                <div className="bg-white p-4 rounded-xl ">
                  <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                    <p> Recent News</p>
                  </div>

                  <div className="mt-8">
                    {posts?.slice(0, 8)?.map((blogItem, blogIndex) => (
                      <Link
                        key={blogIndex}
                        to={`/posts/${blogItem?._id}`}
                        className="flex gap-2 sm:gap-[25px] items-center group mb-6"
                      >
                        <div className="w-20 h-[80px] rounded-md overflow-hidden bg-red-100">
                          <img
                            src={blogItem?.image}
                            alt=""
                            className="w-full h-20 object-cover group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-paragraph">
                            {formatDateOnly(blogItem?.createdAt)}
                          </p>
                          <p className="text-gray-800 font-semibold mt-1.5 transition-all duration-300 line-clamp-2 group-hover:underline">
                            {blogItem?.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" bg-white p-4 pb-8 rounded-xl">
                  <div className="flex items-center gap-4 text-lg py-3 border-b mb-4 font-semibold uppercase text-gray-800">
                    <p> Popular Tags</p>
                  </div>

                  <div className="mt-8 flex gap-2.5 flex-wrap">
                    {tagsData?.map((tag, tagIndex) => (
                      <a
                        key={tagIndex}
                        href=""
                        className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-primary-800 before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                      >
                        <span className="px-[18px] relative z-20 transition-colors ease-in-out duration-300 capitalize group-hover:text-white">
                          {tag}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-[30px] flex justify-center items-end relative w-full rounded-2xl overflow-hidden">
                <img src={addside} alt="" className="w-full object-cover" />
                <div className="w-full h-full absolute black_overlay" />
              </div>
            </div>
            {/* <div className=" col-span-12 relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
              <div className="container ">
                <h2 className="text-3xl font-semibold">Related posts</h2>
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  <div className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group">
                    <a href="/ciseco/blog-single" />
                    <div className="nc-NcImage " data-nc-id="NcImage">
                      <img
                        src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" />
                    </div>
                    <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
                      <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                        Categories
                      </span>
                      <h2 className="block text-lg font-semibold text-white ">
                        <span className="line-clamp-2">
                          natoque penatibus et magnis dis parturient montes
                          nascetur ridiculus mus
                        </span>
                      </h2>
                      <div className="flex">
                        <span className="block text-neutral-200 hover:text-white font-medium truncate">
                          Karli Costa
                        </span>
                        <span className="mx-1.5 font-medium">·</span>
                        <span className="font-normal truncate">
                          May 20, 2021
                        </span>
                      </div>
                    </div>
                    <a href="/ciseco/blog-single" />
                  </div>
                  <div className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group">
                    <a href="/ciseco/blog-single" />
                    <div className="nc-NcImage " data-nc-id="NcImage">
                      <img
                        src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" />
                    </div>
                    <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
                      <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                        Categories
                      </span>
                      <h2 className="block text-lg font-semibold text-white ">
                        <span className="line-clamp-2">
                          turpis cursus in hac habitasse platea dictumst quisque
                          sagittis purus
                        </span>
                      </h2>
                      <div className="flex">
                        <span className="block text-neutral-200 hover:text-white font-medium truncate">
                          Giada Mann
                        </span>
                        <span className="mx-1.5 font-medium">·</span>
                        <span className="font-normal truncate">
                          May 20, 2021
                        </span>
                      </div>
                    </div>
                    <a href="/ciseco/blog-single" />
                  </div>
                  <div className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group">
                    <a href="/ciseco/blog-single" />
                    <div className="nc-NcImage " data-nc-id="NcImage">
                      <img
                        src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" />
                    </div>
                    <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
                      <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                        Categories
                      </span>
                      <h2 className="block text-lg font-semibold text-white ">
                        <span className="line-clamp-2">
                          natoque penatibus et magnis dis parturient montes
                          nascetur ridiculus mus
                        </span>
                      </h2>
                      <div className="flex">
                        <span className="block text-neutral-200 hover:text-white font-medium truncate">
                          Amaris Pitt
                        </span>
                        <span className="mx-1.5 font-medium">·</span>
                        <span className="font-normal truncate">
                          May 20, 2021
                        </span>
                      </div>
                    </div>
                    <a href="/ciseco/blog-single" />
                  </div>
                  <div className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group">
                    <a href="/ciseco/blog-single" />
                    <div className="nc-NcImage " data-nc-id="NcImage">
                      <img
                        src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black" />
                    </div>
                    <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
                      <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                        Categories
                      </span>
                      <h2 className="block text-lg font-semibold text-white ">
                        <span className="line-clamp-2">
                          non sodales neque sodales ut etiam sit amet nisl purus
                        </span>
                      </h2>
                      <div className="flex">
                        <span className="block text-neutral-200 hover:text-white font-medium truncate">
                          Jameson Dick
                        </span>
                        <span className="mx-1.5 font-medium">·</span>
                        <span className="font-normal truncate">
                          May 20, 2021
                        </span>
                      </div>
                    </div>
                    <a href="/ciseco/blog-single" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          ~
        </section>
      </div>
    </div>
  );
};

export default Blogdetails;
