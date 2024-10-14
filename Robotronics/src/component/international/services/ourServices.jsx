import robot from "../../../assets/images/IServicesS4.svg";
import robot1 from "../../../assets/images/IServicesS.svg";
import robot2 from "../../../assets/images/IServicesS2.svg";
import robot3 from "../../../assets/images/IServicesS3.svg";
import robot4 from "../../../assets/images/IServicesS4.svg";
const OurServices = () => {
  const services = [
    { title: "Robotic Workshops", imgSrc: robot },
    { title: "Robotic Kits", imgSrc: robot1 },
    { title: "After-School Robotics Clubs", imgSrc: robot2 },
    { title: "Grade 1-8 Robotronics Curriculum", imgSrc: robot3 },
    {
      title: "Robotic Competitions (Preparation and Consultation) ",
      imgSrc: robot4,
    },
  ];
  return (
    <div className="OurServices p-20">
      <div className="container mx-auto ">
        <h2 className="lg:text-6xl md:text5xl text-4xl text-brown poppins-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg ">
              <div className="p-5">
                <h3 className="text-2xl text-brown poppins-regular mb-2">{service.title}</h3>
              </div>
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
