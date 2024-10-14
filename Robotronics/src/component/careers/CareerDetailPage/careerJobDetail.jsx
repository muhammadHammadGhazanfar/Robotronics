import { FiArrowUpRight } from "react-icons/fi";

const CareerJobDetail = () => {
  const data = {
    title:
      "Our agency focuses on Robotics and producing top-tier Robotics engineers in Pakistan.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    roleOverview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    keyResponsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    ],
    requiredSkills: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    ],
  };
  return (
    <div className="lg:px-56 px-10 bg-background">
      <h1 className="lg:text-4xl text-xl poppins-extrabold mb-4">{data.title}</h1>
      <p className="mb-4 poppins-light">{data.description}</p>

      <h2 className="text-xl poppins-bold font-bold mb-2">Role Overview:</h2>
      <p className="mb-4">{data.roleOverview}</p>

      <h2 className="text-xl poppins-bold mb-2">Key Responsibilities:</h2>
      <ul className="list-disc poppins-light list-inside mb-4">
        {data.keyResponsibilities.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl poppins-bold mb-2">Required Skills:</h2>
      <ul className="list-disc poppins-light list-inside mb-4">
        {data.requiredSkills.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <div className="lg:pb-20 pb-10">
        {/* text */}
        <div className="lg:py-20 py-10">
          <p className="text-wrap text-brown poppins-medium lg:text-2xl text-xl mb-10">
            Jumpstart your journey with Artistsweb by sending your CV, portfolio
            by using the link below.
          </p>
          <p className="text-wrap text-brown poppins-medium lg:text-2xl text-xl">
            We appreciate passionate individuals who bring unique perspectives
            and are willing to grow with our organnization. We strongly believe
            in diversity and encourage people of all genders and ethnicities to
            apply!
          </p>
        </div>
        <div className=" flex flex-row justify-between border border-smallText lg:p-10 p-5  rounded-xl">
          <p className="text-wrap text-brown poppins-medium lg:text-2xl  self-center ">
            Interested in this position?
          </p>
          {/* button */}
          <a
            className="bg-brown text-white poppins-medium lg:text-xl text-sm p-3 rounded-xl self-center "
            href="#"
          >
            Apply Now {"  "}
            <button className="border border-white rounded-full p-2 ">
              <FiArrowUpRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareerJobDetail;
