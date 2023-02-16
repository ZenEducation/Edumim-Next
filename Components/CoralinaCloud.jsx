/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  singleIns,
  counter1,
  counter2,
  counter3,
  c1,
  file,
  clock,
  star,
  c4,
  c3,
  c2,
} from "../constant/images";

const CoralinaCloud = () => {
  return (
    <div className="section-padding bg-[url('../images/all-img/insbg.png')] bg-contain   bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-0 gap-[30px]">
          <div className="lg:col-span-4 col-span-12 ">
            <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
              <div className="h-[400px] mb-8">
                <Image
                  src={singleIns}
                  alt=""
                  className="w-full h-full block object-cover rounded-t-md"
                />
              </div>
              <div className="px-8 pb-8">
                <h5 className=" text-2xl font-bold text-black mb-4">
                  Coralina Cloud
                </h5>
                <div className="mb-8">
                  Professor & Chair of Department of Computer Science at
                  University the where been since 1994. vulput for the
                  pellentesque commodo.
                </div>
                <ul className=" space-y-[19px]">
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:envelope"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">info@designpixls.com</span>
                  </li>
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:phone"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">8939 2390 3879 29</span>
                  </li>
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">6/2, Stavello Hall, Sydney</span>
                  </li>
                </ul>
                <div className=" text-xl text-black mt-8 mb-4">
                  Follow Me On:
                </div>
                <ul className="flex space-x-4 ">
                  {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                    <li key={indx}>
                      <a href="#" className="flex h-10 w-10">
                        <Image src={item} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="mb-10">
              <h2>Coralina Cloud</h2>
              <span className=" inline-block text-primary">UI/UX Designer</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vulputate pellentesque commodo. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              <br /> <br /> Donec faucibus imperdiet libero, at lacinia metus.
              Quisque finibus ante non arcu aliquet, nec vestibulum dolor
              condimentum. Nulla facilisi. Vestibulum porttitor vestibulum est
              eu dignissim. Quisque blandit elementum convallis. Ut et mi
              hendrerit, posuere purus ac, facilisis nibh.
            </div>
            <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-24">
              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <Image
                  src={counter1}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">82</span>
                  k+
                </h4>
                <p>Enrolled Students</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <Image
                  src={counter2}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">460</span>+
                </h4>
                <p>Academic Programs</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <Image
                  src={counter3}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">20</span>+
                </h4>
                <p>Certified Students</p>
              </div>
            </div>
            <div className="mt-20 mb-14">
              <div className="mini-title">Courses By Coralina</div>
              <div className="column-title ">
                Courses By <span className="shape-bg">Coralina</span>
              </div>
            </div>
            <div className=" grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-[30px]">
              {[c1, c2, c3, c4].map((img, index) => (
                <a
                  className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                  href="#"
                  key={index}
                >
                  <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                    <Image
                      src={img}
                      alt=""
                      className=" w-full h-full object-cover rounded-t-[8px]"
                    />
                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                      Art &amp; Design
                    </span>
                  </div>
                  <div className="course-content p-8">
                    <div className="text-secondary font-bold text-2xl mb-3">
                      $29.28
                    </div>
                    <h4 className=" text-xl mb-3 font-bold">
                      Basic Fundamentals of Interior &amp; Graphics Design
                    </h4>
                    <div className="flex justify-between  space-x-3">
                      <span className=" flex items-center space-x-2">
                        <Image src={file} alt="" />
                        <span>2 Lessons</span>
                      </span>
                      <span className=" flex items-center space-x-2">
                        <Image src={clock} alt="" />
                        <span>4h 30m</span>
                      </span>
                      <span className=" flex items-center space-x-2">
                        <Image src={star} alt="" />
                        <span>4.8</span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center lg:pt-14 pt-8">
              <a href="#" className=" btn btn-primary">
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralinaCloud;
