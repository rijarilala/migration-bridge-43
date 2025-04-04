
import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
}

interface StatsProps {
  title?: string;
  description?: string;
  stats: StatProps[];
}

const Stats = ({ title, description, stats }: StatsProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent"></div>
              <div className="font-serif font-bold text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
