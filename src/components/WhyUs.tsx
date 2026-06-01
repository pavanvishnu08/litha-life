import { motion } from 'motion/react';
import { ShieldCheck, Coins, Clock, Award } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      title: "Unparalleled Quality",
      description: "At Litha Life Sciences, quality is not just a commitment; it’s our hallmark. We adhere to stringent quality control measures at every stage of our product development, ensuring that our Active Pharmaceutical Ingredients (API) and Intermediates meet or exceed international quality standards. Our state-of-the-art facilities and rigorous quality assurance processes guarantee that each product leaving our premises is of the highest quality.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/examining-sample-with-microscope.jpg"
    },
    {
      title: "Cost-Effective Solutions",
      description: "We understand the importance of cost-effectiveness in the pharmaceutical industry. Litha Life Sciences is dedicated to providing affordable medicines without compromising on quality. Our streamlined production processes, efficient supply chain management, and strategic sourcing practices allow us to offer competitive pricing, making essential healthcare more accessible to a global population.",
      icon: <Coins className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Timely Delivery",
      description: "In the dynamic world of pharmaceuticals, time is of the essence. We take pride in our ability to ensure timely delivery of our products. Our well-organized logistics and distribution network, coupled with a commitment to meeting deadlines, guarantee that our customers receive their orders promptly. This reliability in delivery timelines strengthens our partnerships and fosters trust among our clients.",
      icon: <Clock className="w-8 h-8" />,
      image: "/still-life-laboratory-samples.jpg"
    },
    {
      title: "Extensive Experience",
      description: "Litha Life Sciences boasts a team of seasoned professionals with a wealth of experience in the pharmaceutical industry. Our leadership’s extensive knowledge and expertise guide the company towards continuous growth and success. With a track record of past accomplishments, we leverage our experience to navigate challenges, innovate, and consistently enhance our product offerings.",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6"
          >
            Why Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-200 font-medium max-w-4xl mx-auto leading-relaxed"
          >
            Your trusted partner and leading pharmaceutical bulk manufacturer of Intermediates, Advanced Intermediates for renowned domestic and international companies.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Policy Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Safety Policy
            </h2>
            <p className="text-xl text-blue-600 font-medium leading-relaxed">
              Your trusted partner and leading pharmaceutical bulk manufacturer of Intermediates, Advanced Intermediates for renowned domestic and international companies
            </p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-5xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed text-justify">
              We at Litha Life Sciences are committed to value safety, health and environment protection as an integral part of our service and operations. We will work to conduct all operations and activities with due care for safety and health of all its employees and personnel (inclusive of outsiders) engaged at its manufacturing unit and also ensure proper maintenance and environment conservation. Our main aim is to make our work premises free of occupational injury, illness, and accident. Accident prevention activity is our foremost priority. We focus on safe working practices by regular training and providing best available personnel protective equipment's to carry out operation. Every effort is made to keep work place clean and tidy as it is an essential requirement for safe and healthy working. We are committed to environment by minimizing waste generation and contamination of air, water and land.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
