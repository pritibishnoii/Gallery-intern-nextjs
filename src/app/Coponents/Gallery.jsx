import Image from "next/image";

const Gallery = ({ data }) => {
  return (
    <div className="mx-auto px-4 py-12 max-w-screen-xl">
      {data.map((item, index) => {
        const isImageLeft = index % 2 !== 0;
        return (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 my-12">
            {/* Image Section */}
            <div className={`w-full md:w-1/2 ${isImageLeft ? "order-1" : "order-2"}`}>
              <div className="relative h-[600px] overflow-hidden shadow-lg">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={`w-full md:w-1/2 ${isImageLeft ? "order-2" : "order-1"}`}>
              <h3 className="text-3xl font-bold text-gray-700 mb-4 text-center">___{item.title}</h3>
              <h4 className="text-xl font-semibold text-gray-600 mb-4 text-center">{item.subtitle}</h4>
              <p className="text-gray-700 mb-6 text-center">{item.para}</p>
            
                <div className="text-center">
                  <button className="bg-yellow-700 text-white px-12 py-2 rounded-full hover:bg-white hover:text-gray-400 hover:border border-yellow-700 transition duration-300">
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
