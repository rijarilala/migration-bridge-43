
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
    <section className="py-16 bg-brand-50 rounded-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover-lift">
              <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-3">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
