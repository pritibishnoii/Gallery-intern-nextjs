

const LoveAndEngagement = ({ data }) => {
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-gothic font-bold text-center text-#AABBCC mb-4">
            {data.title}
          </h1>
          <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">
            {data.subtitle}
          </h2>
          <div className="max-w-2xl mx-auto text-center text-gray-700">
            {data.description.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LoveAndEngagement;