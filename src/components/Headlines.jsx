import Marquee from "react-fast-marquee";
import { DotIcon } from "../assets/SvgsIcons";

const headline = [
  "Will Osimhen join PSG if Napoli sign Lukaku?",
  "NWSL, players agree on new CBA with no draft, better pay, expanded leave",
  "Why Chelsea's spending spree on transfers could backfire in a big way",
  "LIVE: Ten Hag names unchanged team as Man United face trip to Brighton",
  "Why Chelsea's spending spree on transfers could backfire in a big way",
  "Embarrassment for Barca as City get their 'prime Zidane' back",
  "Arteta can't claim to be at overachiever Emery's level yet",
];
const Headlines = () => {
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
          {headline.map((item, index) => (
            <div key={index} className="flex items-center ">
              <h1 className=" text-base  text-gray-800  ">{item}</h1>
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
