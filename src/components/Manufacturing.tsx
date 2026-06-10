import { motion } from 'motion/react';
import { Factory, TestTube, CheckCircle2 } from 'lucide-react';
import { useDeferredBackground } from '../lib/useDeferredBackground';

export function Manufacturing() {
  const backgroundImage = useDeferredBackground('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop');

  return (
    <section id="manufacturing" className="py-24 relative overflow-hidden bg-blue-800">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-3">Manufacturing Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              State-of-the-Art Production Infrastructure.
            </h3>
            <p className="text-slate-300 font-medium leading-relaxed mb-8">
              Our modern manufacturing facilities are designed to handle complex chemical syntheses with uncompromising safety and quality. From process development to commercial scale-up, we deliver robust solutions.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "cGMP Compliant Facilities",
                "Advanced Process Control Systems",
                "Dedicated API and Intermediate Blocks",
                "High-capacity Stainless Steel and Glass-lined Reactors",
                "Zero Liquid Discharge (ZLD) Environmental Systems"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="glass border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-colors">
              Download Equipment List
            </button>
          </motion.div>

          {/* Setup visuals */}
          <div className="grid gap-6">
            <motion.div 
              className="glass p-8 rounded-2xl border-white/10 flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                <Factory className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-white mb-1">Volumetric Capacity</h4>
                <p className="text-slate-300 text-sm">Over 500 KL total reactor capacity ranging from 100L to 10,000L to support flexible scale-up.</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass p-8 rounded-2xl border-white/10 flex items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                <TestTube className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading text-white mb-1">Quality Control Lab</h4>
                <p className="text-slate-300 text-sm">Equipped with highly sensitive analytical instruments like HPLC, GC, FTIR, and UV spectrophotometers.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
