import techStackData from '../data/techStack';

const TechStack = () => {
  // Group technologies by category
  const groupedTech = techStackData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  const categories = Object.keys(groupedTech);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            The tools, software, programming languages, and technologies I work with.
          </p>
        </div>
        
        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-cyan-400">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {groupedTech[category].map((tech) => (
                  <div 
                    key={tech.name}
                    className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-4 text-cyan-300 group-hover:text-cyan-400 transition-colors duration-300">
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-center">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;