import { useState } from "react";
import { BoldArrowIcon, ClockIcon, HeadingsIcon } from "../assets/SvgsIcons";
import { Button } from "../components/Form/Button";
import Header from "../components/Header";
import Headlines from "../components/Headlines";
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
  return (
    <>
      <Header />
      <div className="pt-[68px]">
        <Headlines />
      </div>
      <div className="px-4 bg-gray-100">
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
            <HeroSlider />

            <div className="bg-white space-y-5 rounded-xl p-5 ">
              <div className=" flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg font-medium uppercase py-0  text-gray-800">
                  <img src={Premier} alt="icon " className="w-9 h-9" />
                  <p>ENGLISH PREMIER LEAGUE</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="group  inline-flex items-center gap-1 text-sm font-medium text-primary-800 pr-2"
                  >
                    Read more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <article className="group">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition "
                />

                <div className="p-4">
                  <a href="#">
                    <h3 className="text-lg font-medium line-clamp-2 text-gray-800 hover:text-primary-800 cursor-pointer">
                      Bayern & Kane face uphill battle to dethrone Leverkusen
                    </h3>
                  </a>
                  <div className=" flex items-center gap-2 text-sm pb-4 text-gray-600">
                    <ClockIcon className="w-4 h-4" />
                    <p className="py-2">20 Aug 2024, 03:55 AM</p>
                  </div>
                  <hr />
                  <div className=" space-y-3 pt-5">
                    <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                      <BoldArrowIcon className="w-2.5 h-2.5" />
                      <p className="line-clamp-3 text-sm/relaxed">
                        Fulham sign Palhinha from Sporting Lisbon Why Chelsea
                        spending spree on transfers could backfire in a big way
                      </p>
                    </div>
                  </div>
                </div>
              </article>
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
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-56 w-full rounded-xl object-cover shadow-xl transition "
                />

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
                        Meet the stand-out NWSL teenager tipped for a USWNT
                        debut
                      </p>
                    </div>
                    <div className=" flex items-center gap-3 text-gray-600 text-sm hover:text-primary-800 cursor-pointer">
                      <BoldArrowIcon className="w-2.5 h-2.5" />
                      <p>
                        Liverpool preparing blockbuster offer for Everton
                        &apos;s Branthwaite
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
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
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
