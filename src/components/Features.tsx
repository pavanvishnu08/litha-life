import { motion } from 'motion/react';
import { Shield, Settings, Microscope, Globe2, DollarSign, Truck } from 'lucide-react';
import { useDeferredBackground } from '../lib/useDeferredBackground';

export function Features() {
  const backgroundImage = useDeferredBackground('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop');

  return (
    <section className="py-24 relative overflow-hidden bg-blue-100">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined}
      ></div>
      <div className="absolute inset-0 bg-blue-900/80 z-0"></div>

      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-200 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Why Choose Litha
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Uncompromising Standards. Global Delivery.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group glass p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-xl hover:shadow-[#0077FF]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 group-hover:medical-gradient border border-white/10 flex items-center justify-center text-white group-hover:text-white transition-all duration-300 mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-400 font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Quality Excellence",
    description: "Strict quality control systems ensuring every batch meets international pharmacopoeial standards.",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Advanced Manufacturing",
    description: "Modern cGMP-compliant production facilities equipped with state-of-the-art reactor capacities.",
    icon: <Settings className="w-8 h-8" />
  },
  {
    title: "Research Driven",
    description: "Continuous innovation, process optimization, and complex new product development.",
    icon: <Microscope className="w-8 h-8" />
  },
  {
    title: "Global Standards",
    description: "Adherence to highest international regulatory compliance and documentation practices.",
    icon: <Globe2 className="w-8 h-8" />
  },
  {
    title: "Cost Efficiency",
    description: "Optimized commercial scale-up delivering affordability without compromising on quality.",
    icon: <DollarSign className="w-8 h-8" />
  },
  {
    title: "Reliable Delivery",
    description: "Consistent, safe, and timely supply chain management for our global partners.",
    icon: <Truck className="w-8 h-8" />
  }
];
