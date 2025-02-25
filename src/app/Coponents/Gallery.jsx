'use client';
import Image from "next/image";
import DashedText from "./DashedText";

const Gallery = ({ data }) => {
  return (
    <div className="mx-auto px-4 py-12 max-w-screen-xl">
      {data.map((item, index) => {
        const isImageLeft = index % 2 !== 0;
        return (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12"
          >
            {/* Image Section */}
            <div
              className={`relative w-full h-[400px] md:h-[600px] overflow-hidden shadow-lg ${
                isImageLeft ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div
              className={`text-center md:text-left ${
                isImageLeft ? "md:order-2" : "md:order-1"
              }`}
            >
              
              <div className="flex flex-col items-center px-4 ">
              <DashedText  text={item.title}/>
              </div>
            
              <h4 className="text-lg text-gray-500 text-center mb-4 tracking-widest">
                {item.subtitle}
              </h4>
              <p className="text-gray-500 mb-6 text-sm tracking-widest text-center">
                {item.para}
              </p>

             <div className="text-center">
             <button className="bg-[#b18846]  text-white px-8 py-2 rounded-full hover:bg-white hover:text-gray-400 hover:border border-[#b18846] transition duration-300">
                {item.btntext}
              </button>
             </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
