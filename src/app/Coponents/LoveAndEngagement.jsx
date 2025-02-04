'use client';

const LoveAndEngagement = ({ data }) => {
  return (
    <div className="bg-white w-4/5 md:w-4/5 mx-auto mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center text-gray-800  mb-4 tracking-widest">
          <span>&#8212;</span> {data.title} <span>&#8212;</span>
        </h1>
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
