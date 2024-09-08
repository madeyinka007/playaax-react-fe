const Category = () => {
  return (
    <div>
      <div
        className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
        data-nc-id="Card3"
      >
        <div className="flex flex-col flex-grow">
          <div className="space-y-5 mb-4">
            <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  ">
              Life
            </span>
            <div>
              <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                <a
                  className="line-clamp-2 capitalize"
                  title="title"
                  href="/ciseco/blog-signle"
                >
                  in mollis nunc sed id semper risus in hendrerit gravida
                </a>
              </h2>
              <div className="hidden sm:block sm:mt-2">
                <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, culpa?
                </span>
              </div>
            </div>
            <div
              className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
              data-nc-id="PostCardMeta"
            >
              <a
                className="flex-shrink-0 relative flex items-center space-x-2"
                href="/ciseco/blog"
              >
                <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    src="./static/media/Image-10.93048ca791076288cf69.png"
                    alt="John Doe"
                  />
                  <span className="wil-avatar__name">J</span>
                </div>
                <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                  Malakai Cey
                </span>
              </a>
              <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                ·
              </span>
              <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                May 20, 2021
              </span>
            </div>
          </div>
        </div>
        <div className="block  max-w-xs flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
          <a className="block w-full " href="/ciseco/blog-single">
            <div className="nc-NcImage absolute inset-0" data-nc-id="NcImage">
              {/* <img
                src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="object-cover w-full h-full"
                alt="nc-imgs"
              /> */}
            </div>
          </a>
        </div>
      </div>

      <div className="nc-SectionLatestPosts relative py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
            <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
              <div className="">
                <h2 className=" text-3xl md:text-4xl font-semibold">
                  Latest Articles 🎈
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1">
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Life
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          in mollis nunc sed id semper risus in hendrerit
                          gravida
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-10.93048ca791076288cf69.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Malakai Cey
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Javascript
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          et leo duis ut diam quam nulla porttitor massa id
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-2.405c62ff9ad88c47e28c.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Giada Mann
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Javascript
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          et leo duis ut diam quam nulla porttitor massa id
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-2.405c62ff9ad88c47e28c.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Camren Banes
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Beauty
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          sagittis vitae et leo duis ut diam quam nulla
                          porttitor
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-10.93048ca791076288cf69.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Karli Costa
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/3579484/pexels-photo-3579484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Car
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          non sodales neque sodales ut etiam sit amet nisl purus
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-9.d879028d45de09c9ca3b.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Malakai Cey
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group "
                data-nc-id="Card3"
              >
                <div className="flex flex-col flex-grow">
                  <div className="space-y-5 mb-4">
                    <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">
                      Vue
                    </span>
                    <div>
                      <h2 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl">
                        <a
                          className="line-clamp-2 capitalize"
                          title="title"
                          href="/ciseco/blog-signle"
                        >
                          fringilla ut morbi tincidunt augue interdum velit
                          euismod in pellentesque
                        </a>
                      </h2>
                      <div className="hidden sm:block sm:mt-2">
                        <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, culpa?
                        </span>
                      </div>
                    </div>
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-10.93048ca791076288cf69.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Mireya Roman
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                  <a
                    className="block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 "
                    href="/ciseco/blog-single"
                  >
                    <div
                      className="nc-NcImage absolute inset-0"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none">
                  1
                </span>
                <a
                  className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/ciseco/blog"
                >
                  2
                </a>
                <a
                  className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/ciseco/blog"
                >
                  3
                </a>
                <a
                  className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  href="/ciseco/blog"
                >
                  4
                </a>
              </nav>
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Show me more
              </button>
            </div>
          </div>
          <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
            <div
              className="nc-WidgetCategories rounded-3xl  overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              data-nc-id="WidgetCategories"
            >
              <div
                className="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                data-nc-id="WidgetHeading1"
              >
                <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  ✨ Trending topic
                </h2>
                <a
                  className="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/ciseco/"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Php
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        14 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Reactjs
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        53 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Php
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        19 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Hotdog
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        44 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Androind
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        18 Articles
                      </span>
                    </div>
                  </a>
                  <a
                    aria-current="page"
                    className="nc-CardCategory1 flex items-center p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700 active"
                    data-nc-id="CardCategory1"
                    href="/ciseco/blog"
                  >
                    <div
                      className="nc-NcImage flex-shrink-0 w-12 h-12 rounded-lg mr-4 overflow-hidden"
                      data-nc-id="NcImage"
                    >
                      <img
                        src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        className="object-cover w-full h-full"
                        alt="nc-imgs"
                      />
                    </div>
                    <div>
                      <h2 className="text-base nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold">
                        Reactjs
                      </h2>
                      <span className="text-xs block mt-[2px] text-neutral-500 dark:text-neutral-400">
                        28 Articles
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="nc-WidgetPosts rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800"
              data-nc-id="WidgetPosts"
            >
              <div
                className="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                data-nc-id="WidgetHeading1"
              >
                <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                  🎯 Popular Posts
                </h2>
                <a
                  className="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  rel="noopener noreferrer"
                  href="/ciseco/"
                >
                  View all
                </a>
              </div>
              <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-2.405c62ff9ad88c47e28c.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Derick Hub
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        in mollis nunc sed id semper risus in hendrerit gravida
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/12699167/pexels-photo-12699167.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-4.36899b28c72dc4bc41a9.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Evie Osborn
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        ut faucibus pulvinar elementum integer enim neque
                        volutpat ac tincidunt
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/12699167/pexels-photo-12699167.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-6.f9fbe7060b79c99c7a60.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Amaris Pitt
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        in mollis nunc sed id semper risus in hendrerit gravida
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-1.90baa8cc883db8970fda.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Malakai Cey
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        turpis cursus in hac habitasse platea dictumst quisque
                        sagittis purus
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-7.c88583919650f636b191.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Karli Costa
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        in mollis nunc sed id semper risus in hendrerit gravida
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/5843990/pexels-photo-5843990.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="nc-Card3Small relative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  data-nc-id="Card3Small"
                >
                  <a
                    className=" absolute inset-0"
                    title="title"
                    href="/ciseco/blog-single"
                  />
                  <div className="relative space-y-2">
                    <div
                      className="nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none"
                      data-nc-id="PostCardMeta"
                    >
                      <a
                        className="flex-shrink-0 relative flex items-center space-x-2"
                        href="/ciseco/blog"
                      >
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src="./static/media/Image-3.f257bc3c2ce5ae3a57db.png"
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                          Charlize Ray
                        </span>
                      </a>
                      <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                        ·
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                        May 20, 2021
                      </span>
                    </div>
                    <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      <a
                        className=" line-clamp-2 capitalize"
                        title="title"
                        href="/ciseco/blog-single"
                      >
                        tellus integer feugiat scelerisque varius morbi enim
                        nunc faucibus a
                      </a>
                    </h2>
                  </div>
                  <a
                    title="title"
                    className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                    href="/ciseco/blog-single"
                  >
                    <div className="w-full h-0 aspect-w-16 aspect-h-9 sm:aspect-h-16">
                      <div
                        className="nc-NcImage absolute inset-0"
                        data-nc-id="NcImage"
                      >
                        <img
                          src="https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                          className="object-cover w-full h-full group-hover:scale-110 transform transition-transform duration-300"
                          alt="nc-imgs"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
