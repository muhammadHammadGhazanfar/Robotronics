import { FaChevronRight } from "react-icons/fa";
import Header from "../header";

const Intro = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "My Account", href: "/account" },
    { name: "Personal Info", href: "/account/personal-info" },
  ];
  return (
    <div className="bg-background" >
      {/* intro */}
      <div>
        <div className="py-10 px-5">
          <Header />
        </div>
        {/* Dynamics-URLS */}
        <nav className="flex w-1/2 mx-auto bg-gray-100  rounded-lg">
          <ol className="list-reset flex text-gray-600">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className={`text-xs lg:text-sm poppins-extralight ${
                    index === breadcrumbs.length - 1 ? "text-black" : ""
                  }`}
                >
                  {breadcrumb.name}
                </a>
                {index < breadcrumbs.length - 1 && (
                  <FaChevronRight className="mx-2 text-gray-400" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Intro;
