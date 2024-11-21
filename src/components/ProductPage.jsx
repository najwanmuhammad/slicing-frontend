import React, { useState } from 'react';
import '../assets/App.css';
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
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z" fill="#BDBDBD"/>
          </svg>
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
                src="/src/assets/img/icon/arrow_display_product.svg"
                alt="arrow"
                className="absolute right-8 bottom-28 cursor-pointer"
                onClick={nextImage}
              />
              <img
                src="/src/assets/img/icon/arrow_display_product.svg"
                alt="arrow"
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
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1308 8.41939C20.0731 8.24958 19.967 8.10037 19.8255 7.99018C19.684 7.87999 19.5133 7.81365 19.3346 7.79934L14.1054 7.38383L11.8426 2.37482C11.7706 2.21349 11.6533 2.07646 11.5051 1.98028C11.3569 1.88409 11.184 1.83286 11.0073 1.83276C10.8306 1.83267 10.6577 1.88371 10.5094 1.97973C10.361 2.07575 10.2437 2.21265 10.1714 2.3739L7.9086 7.38383L2.67945 7.79934C2.50376 7.81326 2.3358 7.8775 2.19566 7.98438C2.05552 8.09125 1.94914 8.23624 1.88925 8.40199C1.82935 8.56774 1.81848 8.74724 1.85793 8.91901C1.89737 9.09078 1.98547 9.24755 2.11168 9.37056L5.97599 13.1376L4.60931 19.0556C4.56782 19.2348 4.58112 19.4222 4.64749 19.5937C4.71386 19.7652 4.83024 19.9128 4.98153 20.0173C5.13282 20.1218 5.31202 20.1785 5.4959 20.1799C5.67977 20.1813 5.85982 20.1274 6.01268 20.0252L11.007 16.6956L16.0014 20.0252C16.1576 20.1289 16.3419 20.1823 16.5294 20.1782C16.7168 20.1741 16.8986 20.1126 17.0501 20.0022C17.2017 19.8917 17.3157 19.7374 17.377 19.5602C17.4383 19.3829 17.4438 19.1912 17.3928 19.0107L15.7152 13.1404L19.8758 9.39625C20.1482 9.15043 20.2482 8.76702 20.1308 8.41939Z" fill="#F3CD03"/>
              </svg>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1308 8.41939C20.0731 8.24958 19.967 8.10037 19.8255 7.99018C19.684 7.87999 19.5133 7.81365 19.3346 7.79934L14.1054 7.38383L11.8426 2.37482C11.7706 2.21349 11.6533 2.07646 11.5051 1.98028C11.3569 1.88409 11.184 1.83286 11.0073 1.83276C10.8306 1.83267 10.6577 1.88371 10.5094 1.97973C10.361 2.07575 10.2437 2.21265 10.1714 2.3739L7.9086 7.38383L2.67945 7.79934C2.50376 7.81326 2.3358 7.8775 2.19566 7.98438C2.05552 8.09125 1.94914 8.23624 1.88925 8.40199C1.82935 8.56774 1.81848 8.74724 1.85793 8.91901C1.89737 9.09078 1.98547 9.24755 2.11168 9.37056L5.97599 13.1376L4.60931 19.0556C4.56782 19.2348 4.58112 19.4222 4.64749 19.5937C4.71386 19.7652 4.83024 19.9128 4.98153 20.0173C5.13282 20.1218 5.31202 20.1785 5.4959 20.1799C5.67977 20.1813 5.85982 20.1274 6.01268 20.0252L11.007 16.6956L16.0014 20.0252C16.1576 20.1289 16.3419 20.1823 16.5294 20.1782C16.7168 20.1741 16.8986 20.1126 17.0501 20.0022C17.2017 19.8917 17.3157 19.7374 17.377 19.5602C17.4383 19.3829 17.4438 19.1912 17.3928 19.0107L15.7152 13.1404L19.8758 9.39625C20.1482 9.15043 20.2482 8.76702 20.1308 8.41939Z" fill="#F3CD03"/>
              </svg>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1308 8.41939C20.0731 8.24958 19.967 8.10037 19.8255 7.99018C19.684 7.87999 19.5133 7.81365 19.3346 7.79934L14.1054 7.38383L11.8426 2.37482C11.7706 2.21349 11.6533 2.07646 11.5051 1.98028C11.3569 1.88409 11.184 1.83286 11.0073 1.83276C10.8306 1.83267 10.6577 1.88371 10.5094 1.97973C10.361 2.07575 10.2437 2.21265 10.1714 2.3739L7.9086 7.38383L2.67945 7.79934C2.50376 7.81326 2.3358 7.8775 2.19566 7.98438C2.05552 8.09125 1.94914 8.23624 1.88925 8.40199C1.82935 8.56774 1.81848 8.74724 1.85793 8.91901C1.89737 9.09078 1.98547 9.24755 2.11168 9.37056L5.97599 13.1376L4.60931 19.0556C4.56782 19.2348 4.58112 19.4222 4.64749 19.5937C4.71386 19.7652 4.83024 19.9128 4.98153 20.0173C5.13282 20.1218 5.31202 20.1785 5.4959 20.1799C5.67977 20.1813 5.85982 20.1274 6.01268 20.0252L11.007 16.6956L16.0014 20.0252C16.1576 20.1289 16.3419 20.1823 16.5294 20.1782C16.7168 20.1741 16.8986 20.1126 17.0501 20.0022C17.2017 19.8917 17.3157 19.7374 17.377 19.5602C17.4383 19.3829 17.4438 19.1912 17.3928 19.0107L15.7152 13.1404L19.8758 9.39625C20.1482 9.15043 20.2482 8.76702 20.1308 8.41939Z" fill="#F3CD03"/>
              </svg>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1308 8.41939C20.0731 8.24958 19.967 8.10037 19.8255 7.99018C19.684 7.87999 19.5133 7.81365 19.3346 7.79934L14.1054 7.38383L11.8426 2.37482C11.7706 2.21349 11.6533 2.07646 11.5051 1.98028C11.3569 1.88409 11.184 1.83286 11.0073 1.83276C10.8306 1.83267 10.6577 1.88371 10.5094 1.97973C10.361 2.07575 10.2437 2.21265 10.1714 2.3739L7.9086 7.38383L2.67945 7.79934C2.50376 7.81326 2.3358 7.8775 2.19566 7.98438C2.05552 8.09125 1.94914 8.23624 1.88925 8.40199C1.82935 8.56774 1.81848 8.74724 1.85793 8.91901C1.89737 9.09078 1.98547 9.24755 2.11168 9.37056L5.97599 13.1376L4.60931 19.0556C4.56782 19.2348 4.58112 19.4222 4.64749 19.5937C4.71386 19.7652 4.83024 19.9128 4.98153 20.0173C5.13282 20.1218 5.31202 20.1785 5.4959 20.1799C5.67977 20.1813 5.85982 20.1274 6.01268 20.0252L11.007 16.6956L16.0014 20.0252C16.1576 20.1289 16.3419 20.1823 16.5294 20.1782C16.7168 20.1741 16.8986 20.1126 17.0501 20.0022C17.2017 19.8917 17.3157 19.7374 17.377 19.5602C17.4383 19.3829 17.4438 19.1912 17.3928 19.0107L15.7152 13.1404L19.8758 9.39625C20.1482 9.15043 20.2482 8.76702 20.1308 8.41939Z" fill="#F3CD03"/>
              </svg>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.03178 13.1377L4.6651 19.0557C4.62278 19.2349 4.63549 19.4227 4.70156 19.5945C4.76763 19.7664 4.88399 19.9143 5.03545 20.0191C5.18691 20.1238 5.36643 20.1804 5.55056 20.1814C5.73468 20.1825 5.91486 20.1281 6.06755 20.0252L11.0619 16.6956L16.0562 20.0252C16.2125 20.1289 16.3967 20.1823 16.5842 20.1782C16.7717 20.1741 16.9535 20.1127 17.105 20.0022C17.2565 19.8917 17.3706 19.7375 17.4319 19.5602C17.4931 19.383 17.4986 19.1912 17.4477 19.0107L15.7701 13.1404L19.9306 9.39628C20.0639 9.27629 20.159 9.11988 20.2043 8.94638C20.2497 8.77289 20.2431 8.58992 20.1855 8.4201C20.1279 8.25029 20.0219 8.10107 19.8804 7.99091C19.7389 7.88075 19.5682 7.81448 19.3895 7.80029L14.1603 7.38386L11.8975 2.37485C11.8253 2.21356 11.708 2.0766 11.5598 1.98049C11.4115 1.88439 11.2386 1.83325 11.0619 1.83325C10.8852 1.83325 10.7123 1.88439 10.564 1.98049C10.4157 2.0766 10.2984 2.21356 10.2263 2.37485L7.96347 7.38386L2.73432 7.79937C2.55863 7.81329 2.39067 7.87753 2.25053 7.98441C2.11039 8.09128 2.00401 8.23627 1.94412 8.40202C1.88422 8.56777 1.87335 8.74727 1.9128 8.91904C1.95225 9.09081 2.04034 9.24758 2.16656 9.37059L6.03178 13.1377ZM8.64865 9.16972C8.81237 9.15682 8.96961 9.10012 9.10387 9.00555C9.23814 8.91098 9.3445 8.78203 9.41179 8.63222L11.0619 4.98071L12.712 8.63222C12.7793 8.78203 12.8856 8.91098 13.0199 9.00555C13.1542 9.10012 13.3114 9.15682 13.4751 9.16972L17.1184 9.45865L14.1181 12.159C13.8576 12.3938 13.754 12.7552 13.8494 13.0927L14.9987 17.1148L11.5719 14.83C11.4215 14.729 11.2444 14.6751 11.0633 14.6751C10.8821 14.6751 10.7051 14.729 10.5547 14.83L6.97378 17.2175L7.93688 13.0478C7.97219 12.8944 7.96745 12.7346 7.92311 12.5836C7.87878 12.4326 7.79634 12.2955 7.68372 12.1856L4.89716 9.46874L8.64865 9.16972Z" fill="#F3CD03"/>
              </svg>
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
              <img src="/src/assets/img/product/circle-blue.svg" alt="" />
              <img src="/src/assets/img/product/circle-green.svg" alt="" />
              <img src="/src/assets/img/product/circle-orange.svg" alt="" />
              <img src="/src/assets/img/product/circle-dark-blue.svg" alt="" />
            </div>

            {/* Buttons */}
            <div className="w-fit h-fit flex flex-row mt-14 gap-x-4">
              <button className="w-36 h-11 text-white text-sm font-bold rounded-lg bg-[#23A6F0] hover:bg-[#2a81b3] focus:bg-[#2674a0]">
                Select Options
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="/src/assets/img/icon/icon_fav.png" alt="" className="m-auto" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="/src/assets/img/icon/icon_cart_black.svg" alt="" className="m-auto" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E8E8E8] bg-white hover:bg-slate-50 focus:bg-slate-100">
                <img src="/src/assets/img/icon/icon_eye.svg" alt="" className="m-auto" />
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
