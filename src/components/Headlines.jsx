import Marquee from "react-fast-marquee";
import { DotIcon } from "../assets/SvgsIcons";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "src/Redux/posts/postsThunk";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// const headline = [
//   "Will Osimhen join PSG if Napoli sign Lukaku?",
//   "NWSL, players agree on new CBA with no draft, better pay, expanded leave",
//   "Why Chelsea's spending spree on transfers could backfire in a big way",
//   "LIVE: Ten Hag names unchanged team as Man United face trip to Brighton",
//   "Why Chelsea's spending spree on transfers could backfire in a big way",
//   "Embarrassment for Barca as City get their 'prime Zidane' back",
//   "Arteta can't claim to be at overachiever Emery's level yet",
// ];
const Headlines = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const fetchPostsHandler = () => {
    dispatch(fetchPosts());
  };
  useEffect(() => {
    fetchPostsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const lastPost = posts[posts.length - 1];
  const lastFivePost = posts?.slice(-6, -1);

  // console.log("last 3 posts", lastFivePost);
  return (
    <div>
      <div className=" ">
        <Marquee
          gradient={false}
          // gradientWidth={30}
          // pauseOnHover={true}
          speed={60}
          // gradientColor={[17, 24, 38]}
        >
          {lastFivePost.map((item, index) => (
            <div key={index} className="flex items-center ">
              <Link to={`/posts/${item?._id}`}>
                <h1 className=" text-base  text-gray-800 hover:text-primary-800 ">
                  {item?.title}
                </h1>
              </Link>
              <div className="px-2 py-4">
                <DotIcon />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Headlines;
