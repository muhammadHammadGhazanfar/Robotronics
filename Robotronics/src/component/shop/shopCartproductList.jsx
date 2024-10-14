import ShopCartItems from "../shop/shopCartItems";
const ShopCartproductList = () => {
  const products = [
    {
      id: 1,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "High-quality wireless headphones with noise-cancelling technology.",
      image: "https://example.com/images/wireless-headphones.jpg",
      price: 79.99,
      category: "Electronics",
    },
    {
      id: 2,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "Lightweight running shoes designed for maximum comfort and performance.",
      image: "https://example.com/images/running-shoes.jpg",
      price: 59.99,
      category: "Footwear",
    },
    {
      id: 3,
      title: "MORDERN BLACK STANDING LEGO",
      description:
        "High-quality wireless headphones with noise-cancelling technology.",
      image: "https://example.com/images/wireless-headphones.jpg",
      price: 79.99,
      category: "Electronics",
    },
  ];
  return (
    // body of the page
    <div className="lg:flex flex-row">
      {/* items */}
      <div className="lg:flex lg:w-2/3 flex-col lg:px-5 shadow-lg bg-gray ">
        {products.map((product) => {
          return (
            <ShopCartItems
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
      {/* line */}
      <div className="flex flex-col bg-gray p-2">
        <div className=" h-full border border-line"></div>
      </div>
      {/* bills */}
      <div className="flex flex-col bg-gray lg:px-20 px-10 ">
        {/* text 1 */}
        <div className="flex flex-col text-wrap text-left">
          <p className="lg:text-3xl text-1xl font-bold"> ORDER SUMMARY </p>
          <p className="text-sm text-wrap lg:py-8 ">
            Apply your monthly voucher to get more discount!
          </p>
        </div>
        {/* total bills */}
        <div className="justify-between lg:space-y-5 space-y-3">
          {/* text 2 */}
          <div className="flex flex-col lg:py-5 py-2  ">
            <p className="text-sm">Your voucher code</p>
            <div className=" h-0 border border-line  "></div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Price</p>
            <p className="text-sm font-bold">Pkr 1,725.00</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Discount 10%</p>
            <p className="text-sm font-bold">Pkr 1,725.00</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Price</p>
            <p className="text-sm text-yellow font-bold">Pkr 1,725.00</p>
          </div>
          <div className="lg:space-y-3 space-y-1 lg:py-4 py-2">
            <p className="text-sm">Write your notes here...</p>
            <input className="bg-gray" type="text" />
            <div className="h-0  border border-line "></div>
          </div>
          {/* button */}
          {/* <div className="flex justify-center py-4" >
              <a href="/CustomerInfo">
              <button className="text-center text-sm text-white text-wrap bg-brown py-1 px-10" >
              PROCEED TO CHECKOUT
              </button>
              </a>
            </div> */}
          <div className="flex justify-center py-4">
            <a href="/CustomerInfo">
              {/* form submit buttom */}
              <button
                type="submit"
                className="text-center lg:text-xl text-sm text-gold  bg-brown py-2 lg:px-20 px-10"
              >
                PROCEED TO CHECKOUT
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCartproductList;