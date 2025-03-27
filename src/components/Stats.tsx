
interface StatProps {
  value: string;
  label: string;
}

interface StatsProps {
  title: string;
  description: string;
  stats: StatProps[];
}

const Stats = ({ title, description, stats }: StatsProps) => {
  return (
    <section className="py-12 bg-brand-50 rounded-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 hover-lift transition-transform hover:translate-y-[-5px] duration-300">
              <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
