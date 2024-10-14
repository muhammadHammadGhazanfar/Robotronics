import step1 from "../../../assets/images/stepAddShoppingBag.svg";
import step2 from "../../../assets/images/stepUserCircle.svg";
import step3 from "../../../assets/images/stepCreditCard.svg";
import step4 from "../../../assets/images/stepeye.svg";
const CartsStep = () => {
  return (
    <div className="lg:p-20">
      {/* line */}
      <div className="p-2">
        <div className="relative w-full h-0 border border-black">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      {/* steps */}
      <div className="lg:flex flex-row lg:p-2 p-1 justify-between ">

        {/* steps 1 */}
        <div className="justify-center">
          <img
            className="bg-brown rounded-full lg:p-3 p-1 items-start"
            src={step1}
            alt=""
          />
          <div className="flex flex-col" >
            <p className="lg:text-xl text-sm text-center">CUSTOMER INFORMATION</p>
            <p className="text-sm text-center text-wrap">
              Add your name, phone <br/> number and address.
            </p>
          </div>
        </div>

        {/* steps 2 */}
        <div className="justify-center">
          <img
            className="bg-brown rounded-full p-1 lg:p-3 items-start"
            src={step2}
            alt=""
          />
          <div className="flex flex-col" >
            <p className=" lg:text-xl text-sm text-center">CUSTOMER INFORMATION</p>
            <p className="text-sm text-center text-wrap">
              Add your name, phone <br/> number and address.
            </p>
          </div>
        </div>

        {/* steps 3 */}
        <div className="justify-center">
          <img
            className="bg-brown rounded-full p-1 lg:p-3 items-start"
            src={step3}
            alt=""
          />
          <div className="flex flex-col" >
            <p className="lg:text-xl text-sm text-center">CUSTOMER INFORMATION</p>
            <p className="text-sm text-center text-wrap">
              Add your name, phone <br/> number and address.
            </p>
          </div>
        </div>

        {/* steps 4 */}
        <div className="justify-center">
          <img
            className="bg-brown rounded-full p-1 lg:p-3 items-start"
            src={step4}
            alt=""
          />
          <div className="flex flex-col" >
            <p className="lg:text-xl text-sm text-center">CUSTOMER INFORMATION</p>
            <p className="text-sm text-center text-wrap">
              Add your name, phone <br/> number and address.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartsStep;
