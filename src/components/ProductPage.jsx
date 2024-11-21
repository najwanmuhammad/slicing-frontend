import React, { useState } from "react";
import product1 from "@/assets/img/product/product1.png";
import product2 from "@/assets/img/product/product2.png";
import product3 from "@/assets/img/product/product3.png";
import product4 from "@/assets/img/product/product4.png";
import product5 from "@/assets/img/product/product5.png";
import product6 from "@/assets/img/product/product6.png";

import img1 from "@/assets/img/product/carousel-item1.png";
import img2 from "@/assets/img/product/carousel-item2.jpg";
import img3 from "@/assets/img/product/carousel-item1.png";

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  const [displayIndex, setDisplayIndex] = useState(0);

  const images = [img2, img3];

  const products = [
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product1 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product2 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product3 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product4 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product5 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product6 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product1 },
    { title: "Graphic Design", variant: "English Department", price: "$16.48", otherPrice: "$6.48", image: product2 },
  ];

  const nextImage = () => {
    setDisplayIndex((displayIndex + 1) % images.length);
    setCurrentImage(images[(displayIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setDisplayIndex((displayIndex - 1 + images.length) % images.length);
    setCurrentImage(images[(displayIndex - 1 + images.length) % images.length]);
  };

  return (
    <div className="w-screen h-screen bg-[#FAFAFA] font-montserrat overflow-x-hidden">
      {/* Content Container */}
      <div className="md:container md:px-36 mx-auto sm:mt-16 md:mt-28">
        {/* Breadcrumb */}
        <div className="w-full h-24 bg-[#FAFAFA] flex flex-row items-center sm:justify-center md:justify-start gap-x-3">
          <p className="text-sm text-[#252B42] font-bold cursor-pointer">Home</p>
          <img src="@/assets/img/icon/breadcrumb_arrow.svg" alt="" />
          <p className="text-sm text-[#BDBDBD] font-bold cursor-pointer">Shop</p>
        </div>

        {/* Main Product Container */}
        <div className="w-full h-fit flex sm:flex-col md:flex-row gap-x-3">
          {/* Image Section */}
          <div className="sm:w-full md:w-[50%] h-full flex flex-col">
            {/* Main Image */}
            <div
              id="mainImage"
              className="relative sm:w-[348px] md:w-[490px] sm:h-[277px] md:h-[450px] sm:mx-auto bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${currentImage})` }}
            >
              <img
                src="@/assets/img/icon/arrow_display_product.svg"
                alt=""
                className="absolute right-8 bottom-28 cursor-pointer"
                onClick={nextImage}
              />
              <img
                src="@/assets/img/icon/arrow_display_product.svg"
                alt=""
                className="absolute left-8 bottom-28 cursor-pointer rotate-180"
                onClick={prevImage}
              />
            </div>

            {/* Thumbnails */}
            <div className="w-full h-fit flex flex-row gap-x-4 mt-5 sm:px-4 md:px-0">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="thumbnail"
                  className="thumbnail object-cover w-[100px] h-[75px] cursor-pointer"
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="sm:w-full md:w-[50%] h-full sm:px-6 md:pl-8 pt-4">
            <h1 className="text-[#252B42] font-medium text-xl">Floating Phone</h1>

            {/* Star Rating */}
            <div className="w-fit h-fit flex flex-row justify-between gap-x-1 items-center mt-3">
              <img src="@/assets/img/icon/icon_star_fill.svg" alt="" />
              <img src="@/assets/img/icon/icon_star_fill.svg" alt="" />
              <img src="@/assets/img/icon/icon_star_fill.svg" alt="" />
              <img src="@/assets/img/icon/icon_star_fill.svg" alt="" />
              <img src="@/assets/img/icon/icon_star_unfill.svg" alt="" />
              <p className="text-[#737373] text-sm font-bold ml-1.5">10 Reviews</p>
            </div>
            <h1 className="text-[#252B42] text-2xl font-bold mt-6">$1,139.33</h1>
            <h2 className="text-sm text-[#737373] font-bold mt-1.5">
              Availability : <span className="text-[#23A6F0]"> In Stock</span>
            </h2>
            <p className="text-[#858585] text-sm font-medium mt-8 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>

            <hr className="border-b border-[#BDBDBD] mt-8" />

            {/* Color Options */}
            <div className="w-full h-fit flex flex-row justify-start gap-x-2.5 mt-8">
              <img src="@/assets/img/product/circle-blue.svg" alt="" />
              <img src="@/assets/img/product/circle-green.svg" alt="" />
              <img src="@/assets/img/product/circle-orange.svg" alt="" />
              <img src="@/assets/img/product/circle-dark-blue.svg" alt="" />
            </div>

            {/* Buttons */}
            <div className="w-fit h-fit flex flex-row mt-14 gap-x-4">
              <button className="w-36 h-11 text-white text-sm font-bold rounded-lg bg-[#23A6F0] hover:bg-[#2a81b3] focus:bg-[#2674a0]">
                Select Options
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="@/assets/img/icon/icon_fav.png" alt="" className="m-auto" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="@/assets/img/icon/icon_cart_black.svg" alt="" className="m-auto" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="@/assets/img/icon/icon_eye.svg" alt="" className="m-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Best Sellers Products */}
        <div className="w-full h-full mt-14 flex flex-col sm:px-2 md:pl-10">
          <h1 className="text-[#252B42] font-bold sm:text-xl md:text-2xl sm:items-center sm:mx-auto md:mx-0">
            BESTSELLER PRODUCTS
          </h1>
          <hr className="sm:w-[80%] md:w-full mx-auto border-b-2 border-[#ECECEC] mt-4 mb-4" />

          <div className="w-full h-auto grid sm:grid-cols-1 md:grid-cols-4 md:grid-rows-2 sm:gap-y-16 md:gap-x-3 md:gap-y-1 sm:pt-8 md:pt-0">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-[239px] h-[442px] sm:scale-110 md:scale-90 flex flex-col bg-white sm:mx-auto md:mx-0 hover:shadow-sm cursor-pointer"
              >
                <img src={product.image} alt="best seller img" className="w-full h-[280px] object-cover" />
                <div className="w-full h-full flex flex-col py-6 px-6 justify-start align-middle gap-y-3">
                  <h5 className="text-[#252B42] text-base font-bold">{product.title}</h5>
                  <p className="text-[#737373] text-sm font-bold">{product.variant}</p>
                  <h5 className="text-[#BDBDBD] text-base font-bold ">
                    {product.price} <span className="text-[#23856D]">{product.otherPrice}</span>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
