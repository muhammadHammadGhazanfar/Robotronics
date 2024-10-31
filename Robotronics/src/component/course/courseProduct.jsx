import python from "../../assets/images/python.svg";
import shopStar from "../../assets/logo/shopStars.svg";
import time from "../../assets/logo/time-svgrepo-com 1.svg";
import download from "../../assets/logo/download.svg";
import sale from "../../assets/logo/sales.svg";
const CourseProduct = ({
  title,
  id,
  description,
  image,
  price,
  duration,
  category,
}) => {
  return (
    <div className="p-2  " data-aos="fade-up">
      <div className="rounded-2xl p-2 bg-white">
        {/* img */}
        <div className="">
          <img src={python} alt="" />
        </div>
        {/* title */}
        <div>
          <div className="flex flex-row flex-wrap justify-between">
            <p className="lg:text-xl p-1 text-center text-wrap font-bold">
              {title}
            </p>
            <img src={shopStar} alt="" />
          </div>
          <div className="text-right">
            <p className="lg:text-xl text-gold font-bold">PKR {price}</p>
          </div>
        </div>
        {/* line */}
        <div className="py-5">
          <div className="w-full h-0.5 border border-dotted border-black"></div>
        </div>
        {/* details */}
        <div className="flex flex-wrap justify-center lg:space-x-2 items-center">
          <div className="flex ">
            <img className=" text-xs" src={time} />
            {duration}
          </div>
          <div className="flex">
            <img className=" text-xs" src={download} />
            34 Course
          </div>
          <div className="flex">
            <img className=" text-xs" src={sale} />
            250 Sales
          </div>
        </div>
      </div>
      {/* button */}
      <div className="py-2">
        <a href={`/CoursesProduct/${id}`}>
          <div className="text-center bg-yellow p-2">
            <button className="bg-yellow text-xl p-3 font-bold rounded">
              Buy Course
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CourseProduct;
