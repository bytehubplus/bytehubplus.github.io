import React from "react";
import { HiBriefcase, HiLockClosed, HiGlobeAlt, HiCog6Tooth } from "react-icons/hi2";

const Service = () => {
  return (
    <section id="service" className="py-5 sm:py-10 mt-5 sm:mt-10 bg-gray-200">
      <div className="text-center">
        <p className="text-4xl text-sky-800 font-bold"> FUSION </p>
      </div>

      <h2 className="text-center mt-2 text-2xl">
        Fusion是Bytehub+的核心项目，旨在提供面向未来的数据的保管、加工处理与分享。
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-6 sm:gap-10">
        <div className="block rounded-lg shadow-lg text-center">
          <div className="flex text-6xl justify-center items-center text-sky-800"> <HiLockClosed /></div>
          <div className="border-b border-gray-300 text-2xl">安全</div>
          <p className="border-b border-gray-300 ">基于W3C DID实现敏感数据自治</p>
        </div>
        <div className="block rounded-lg shadow-lg text-center">
          <div className="flex text-6xl justify-center items-center text-sky-800"> <HiBriefcase /></div>
          <div className="border-b border-gray-300 text-2xl">可携带</div>
          <p className="border-b border-gray-300 ">用户可以随时将自己的数据从一个节点转移到另外一个节点。</p>
        </div>
        <div className="block rounded-lg shadow-lg text-center">
          <div className="flex text-6xl justify-center items-center text-sky-800"> <HiGlobeAlt /></div>
          <div className="border-b border-gray-300 text-2xl">去中心化</div>
          <p className="border-b border-gray-300 ">Fusion网络由多个主体共同组建，网络不受任何一方单独控制。</p>
        </div>
        <div className="block rounded-lg shadow-lg text-center">
          <div className="flex text-6xl justify-center items-center text-sky-800"> <HiCog6Tooth /></div>
          <div className="border-b border-gray-300 text-2xl">插件化</div>
          <p className="border-b border-gray-300 ">数据的加工处理、分享、使用采用灵活的插件化设计，并且可以灵活扩展。</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
