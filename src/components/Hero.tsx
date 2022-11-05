import React from "react";
import HeroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
        <div className="w-full md:w-1/3 text-left">
          <h1 className="text-4xl text-gray-50 text-center sm:text-left">
            Bytehub+ 是社区驱动的数据保管、分享与协助开源社区
          </h1>
        </div>

          <div className="w-full mt-8">
          <img src={HeroImg} />
          </div>
      </section>
    </div>
  );
};

export default Hero;
