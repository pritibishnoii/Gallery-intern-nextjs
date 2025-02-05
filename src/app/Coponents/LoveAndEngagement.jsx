'use client';

import DashedText from "./DashedText";

const LoveAndEngagement = ({ data }) => {
  return (
    <div className="bg-white w-4/5 md:w-4/5 mx-auto mt-12">
      <div className=" flex flex-col items-center px-4">
        <DashedText  text={data.title} />
        <h2 className="text-xl text-center text-gray-500 mb-8 tracking-widest">
          {data.subtitle}
        </h2>
       
        <div className="mx-auto text-center text-gray-500 text-sm tracking-widest max-w-3xl">
          {data.description.map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveAndEngagement;
