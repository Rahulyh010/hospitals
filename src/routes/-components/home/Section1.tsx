import About from "./About";
import CityGallery from "./City";
import SpecializationGallery from "./specail";

export default function Section1() {
  return (
    <div className="pb-28">
      <div className="w-full flex px-3 mt-5 gap-x-3">
        <div className="w-full space-y-8">
          <h1 className="text-5xl font-extrabold  animate-fall">
            Leaving a Healthy Life is Essential.
          </h1>
          <div>
            <p className="text-2xl  mt-5">
              Health is the cornerstone of a fulfilling and prosperous life. It
              encompasses physical, mental, and emotional well-being, serving as
              the foundation upon which we build our daily lives. Good health a
              encompasses physical, mental, and emotional well-being, serving as
              the foundation upon which we build our daily lives. Good health a
            </p>

            <p className="text-right font-extrabold">-Budhaa</p>
          </div>
          {/* <p className="text-2xl font-bold">
            "Health is the greatest gift, contentment the greatest wealth,
            faithfulness the best relationship". {"  "} <span>- Bhudha</span>
          </p> */}
        </div>
        <div className="w-full relative">
          <img
            src="/images/aged_people.jpg"
            alt="aged-people"
            className="animate-fallRight"
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-10/12 m-auto mt-10">
        <h1 className="text-5xl mb-5 font-extrabold text-center">Cities</h1>
        <CityGallery />
      </div>
      <div className="flex gap-x-3 mt-10 px-5">
        <div className="w-full animate-fall space-y-4">
          <h1 className="text-4xl font-extrabold ">
            Don't worry. we got you .
          </h1>
          <p>
            "The greatest wealth is health." –{" "}
            <span className="font-bold text-blue-500">Virgil</span>
          </p>

          <p>
            "Good health and good sense are two of life’s greatest blessings." –{" "}
            <span className="font-bold text-blue-500">Publilius Syrus</span>
          </p>
          <p>
            "Health is not valued till sickness comes." –{" "}
            <span className="font-bold text-blue-500">Thomas Fuller</span>
          </p>
          <p>
            "It is health that is real wealth and not pieces of gold and
            silver." –{" "}
            <span className="font-bold text-blue-500">Mahatma Gandhi</span>
          </p>
          <p>
            "Take care of your body. It’s the only place you have to live." –{" "}
            <span className="font-bold text-blue-500">Jim Rohn</span>
          </p>
          <p>
            "A healthy outside starts from the inside." –{" "}
            <span className="font-bold text-blue-500">Robert Urich</span>
          </p>
          <p>
            "Happiness is the highest form of health." –{" "}
            <span className="font-bold text-blue-500">Dalai Lama</span>
          </p>
          <p>
            "Health is the first muse, and sleep is the condition to produce
            it." –{" "}
            <span className="font-bold text-blue-500">Ralph Waldo Emerson</span>
          </p>
        </div>
        <div className="w-full relative">
          <div className="w-full h-28 absolute bottom-0 bg-background z-[10]"></div>

          <img
            src="https://static3.bigstockphoto.com/1/6/1/large1500/161446178.jpg"
            alt="care"
          />
        </div>
      </div>
      <div></div>
      <SpecializationGallery />
      <About />
    </div>
  );
}
