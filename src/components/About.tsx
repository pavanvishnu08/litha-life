import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Microscope, Leaf, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10 mix-blend-luminosity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6"
          >
            About Litha Life Sciences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-200 font-medium max-w-3xl mx-auto"
          >
            Your Trusted Partner in Pharmaceutical Manufacturing
          </motion.p>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate text-slate-600">
            <p className="text-xl leading-relaxed font-medium text-slate-800 mb-6">
              Welcome to Litha Life Sciences Private Limited, a dynamic and growth-driven pharmaceutical company led by a team of highly experienced professionals with strong technical expertise and industry knowledge. Our organization is built on a clear vision of delivering excellence through innovation, quality, and customer-focused pharmaceutical solutions.
            </p>
            <p className="mb-6">
              At Litha Life Sciences, our strategic focus lies in the development, manufacturing, and supply of high-quality Pharmaceutical Intermediates, Advanced Intermediates, Active Pharmaceutical Ingredients (APIs), Key Starting Materials (KSMs), and Raw Materials for the global pharmaceutical industry. Through a carefully curated and continuously expanding product portfolio, we are steadily progressing toward our goal of becoming a global leader in APIs and Pharmaceutical Intermediates.
            </p>
            <p className="mb-6">
              Our journey is defined by a commitment to innovation, operational excellence, and long-term partnerships. Over the years, we have successfully developed and supplied multiple products to renowned domestic and international pharmaceutical companies, earning a reputation for reliability, consistency, and quality.
            </p>
            <p>
              We firmly believe that access to quality healthcare should be available to everyone. This belief drives our mission to provide high-quality and affordable pharmaceutical solutions that contribute to improving health outcomes worldwide. By combining scientific expertise with manufacturing excellence, we strive to make a meaningful impact on the lives of people across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Core Activities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Today, Litha Life Sciences serves customers through a wide range of activities including:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800">{activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Responsible Business */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Strengths */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Our Strengths</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Innovative Research & Development</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Innovation is at the heart of everything we do. Our research and development efforts focus on creating efficient manufacturing processes, developing new products, and continuously improving existing technologies. This commitment enables us to stay ahead of industry trends and deliver solutions that meet evolving pharmaceutical requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Exceptional Quality Standards</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Quality forms the foundation of our business. We implement rigorous quality control measures across every stage of production to ensure consistency, safety, and compliance with international pharmaceutical standards. Our commitment to quality enables us to deliver products that customers can trust with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsible Business */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Responsible Business</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Litha Life Sciences, we recognize the responsibility that comes with being part of the global healthcare ecosystem. We are committed to conducting our business with integrity, transparency, and accountability while creating value for customers, employees, communities, and the environment.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Our responsible business approach includes:
                </h4>
                <ul className="space-y-3">
                  {responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-600 leading-relaxed mt-6 text-sm">
                By integrating responsibility into every aspect of our operations, we aim to contribute positively to society while delivering high-quality pharmaceutical solutions that improve lives worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To advance global healthcare by providing high-quality, reliable, and affordable pharmaceutical products and solutions. Through innovation, manufacturing excellence, and an unwavering commitment to quality, we strive to improve healthcare accessibility and empower individuals to lead healthier and more fulfilling lives.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To become a globally recognized leader in APIs, Pharmaceutical Intermediates, and specialty pharmaceutical solutions by setting new benchmarks in innovation, quality, affordability, and sustainability. We envision a future where access to quality healthcare is universal, and our contributions help build healthier communities and a better tomorrow for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

const activities = [
  "Manufacturing of APIs and Pharmaceutical Intermediates",
  "Advanced Intermediates and Key Starting Materials (KSMs)",
  "Raw Materials Supply",
  "Contract Manufacturing Services",
  "Pharmaceutical Marketing Solutions",
  "Global Export Operations"
];

const responsibilities = [
  "Ethical and transparent business practices",
  "Sustainable and environmentally conscious operations",
  "Continuous efforts to reduce environmental impact",
  "Employee development and workplace well-being",
  "Community engagement and social responsibility initiatives",
  "Compliance with industry regulations and global standards"
];
