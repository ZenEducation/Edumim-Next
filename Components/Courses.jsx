/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import c1 from "../public/assets/images/all-img/c1.png";
import c2 from "../public/assets/images/all-img/c2.png";
import c3 from "../public/assets/images/all-img/c3.png";
import c4 from "../public/assets/images/all-img/c4.png";
import c5 from "../public/assets/images/all-img/c5.png";
import c6 from "../public/assets/images/all-img/c6.png";
import c7 from "../public/assets/images/all-img/c7.png";
import c8 from "../public/assets/images/all-img/c8.png";
import c9 from "../public/assets/images/all-img/c9.png";
import c10 from "../public/assets/images/all-img/c10.png";
import c11 from "../public/assets/images/all-img/c11.png";
import c12 from "../public/assets/images/all-img/c12.png";
import file from "../public/assets/images/svg/file.svg";
import clock from "../public/assets/images/svg/clock.svg";
import star from "../public/assets/images/svg/star.svg";
const Courses = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Popular Courses</div>
          <div className="column-title ">
            Choose Our Top <span className="shape-bg">Courses</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {[c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12].map(
            (img, index) => (
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
            )
          )}
        </div>
        <div className="text-center lg:pt-16 pt-10">
          <a href="#" className=" btn btn-primary">
            View All Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
