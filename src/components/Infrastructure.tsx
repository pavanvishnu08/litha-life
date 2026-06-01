import { motion } from 'motion/react';
import { Factory, Settings, Leaf, Globe, RefreshCcw, Microscope, Lightbulb, Users, Laptop, TestTube, Handshake, FileCheck, Rocket, Beaker } from 'lucide-react';

export function Infrastructure() {
  const manufacturingFeatures = [
    {
      title: "Technologically Advanced Infrastructure",
      description: "Our manufacturing capabilities are outfitted with the latest technological advancements, ensuring efficiency, precision, and scalability. This empowers us to produce a diverse range of pharmaceutical products with unmatched quality.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Stringent Quality Control",
      description: "Quality is paramount in our manufacturing process. Stringent quality control measures are implemented at every stage, from raw material acquisition to the final product. This unwavering commitment to quality ensures that our pharmaceuticals consistently meet or exceed global regulatory requirements.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Versatility in Production",
      description: "Our manufacturing capabilities extend across a broad spectrum of pharmaceutical products, including Active Pharmaceutical Ingredients (API), intermediates, Key Starting Materials (KSM), and raw materials. This versatility allows us to respond promptly to market demands and offer comprehensive solutions to our partners.",
      icon: <RefreshCcw className="w-6 h-6" />
    },
    {
      title: "Sustainable Practices",
      description: "We prioritize environmental responsibility in our manufacturing processes. Our commitment to sustainability is reflected in the incorporation of eco-friendly practices, waste reduction initiatives, and energy-efficient technologies, aligning our operations with global environmental stewardship goals.",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Compliance with Global Standards",
      description: "Litha Life Sciences adheres strictly to international regulatory standards. Our manufacturing facilities comply with Good Manufacturing Practices (GMP) and other relevant guidelines, ensuring that our products meet the highest quality and safety benchmarks for global distribution.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Scalability and Flexibility",
      description: "Our manufacturing capabilities are designed for scalability and flexibility, enabling us to meet the evolving needs of the pharmaceutical market. Whether for small-scale production or large-scale manufacturing, we possess the agility to adapt to diverse requirements.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Research and Development Integration",
      description: "Our manufacturing capabilities are seamlessly integrated with our robust Research and Development (R&D) efforts. This synergy allows us to stay ahead in terms of innovation, continually enhancing our manufacturing processes to deliver pharmaceutical solutions that address emerging healthcare challenges.",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  const rndFeatures = [
    {
      title: "Innovation as a Core Value",
      description: "Innovation is ingrained in our organizational DNA. Our R&D team is continuously pushing the boundaries of scientific discovery to develop novel pharmaceutical products that enhance patient outcomes. We invest in forward-thinking research that encompasses diverse therapeutic areas, ensuring a comprehensive approach to healthcare innovation.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Cross-disciplinary Expertise",
      description: "The success of our R&D endeavors is rooted in the diverse expertise of our team. Our researchers, scientists, and technicians collaborate across disciplines, fostering a dynamic environment where ideas converge, and innovative solutions emerge. This cross-disciplinary approach accelerates the development of groundbreaking pharmaceuticals.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cutting-edge Technologies",
      description: "Embracing the latest technologies, our R&D facilities are equipped with state-of-the-art instrumentation and research tools. This commitment to technological advancement enables us to conduct precise and efficient research, driving the development of high-quality pharmaceutical products.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Drug Discovery and Development",
      description: "From early-stage drug discovery to the development of advanced formulations, our R&D activities cover the entire spectrum of pharmaceutical research. We are dedicated to bringing new, effective, and safe medications to the market, contributing to the well-being of individuals and communities worldwide.",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      title: "Collaboration and Partnerships",
      description: "We recognize the value of collaboration in fostering innovation. Our R&D department actively engages in partnerships with academic institutions, research organizations, and industry experts. These collaborations broaden our perspectives, enhance our capabilities, and accelerate the translation of scientific discoveries into tangible healthcare solutions.",
      icon: <Handshake className="w-6 h-6" />
    },
    {
      title: "Regulatory Compliance",
      description: "Our R&D practices adhere to stringent regulatory standards. This commitment ensures that our research processes align with global regulatory requirements, laying the foundation for the successful development and eventual approval of pharmaceutical products for market distribution.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Future-focused Approach",
      description: "Litha Life Sciences is not only committed to addressing current healthcare challenges but also anticipates future needs. Our R&D initiatives are future-focused, aiming to stay ahead of emerging trends, technologies, and medical advancements to contribute proactively to the evolving landscape of healthcare.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const reactions = [
    "Acetylation",
    "Condensation",
    "Cryogenic Reaction",
    "Oxidation",
    "Hydrolysis",
    "Chemical Resolution",
    "Halogenation",
    "Methylation",
    "Friedel Craft Reactions",
    "Reduction",
    "Grignard Reaction",
    "Other Reactions"
  ];

  return (
    <div className="flex flex-col bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6"
          >
            Infrastructure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-200 font-medium max-w-4xl mx-auto leading-relaxed"
          >
            Your trusted partner and leading pharmaceutical bulk manufacturer of Intermediates, Advanced Intermediates for renowned domestic and international companies
          </motion.p>
        </div>
      </section>

      {/* Manufacturing Capabilities Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 relative inline-block">
              Manufacturing Capabilities
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl font-medium mt-6">
              At Litha Life Sciences, our associated manufacturing capabilities stand as a testament to our commitment to excellence and innovation in the pharmaceutical industry. We associated with state-of-the-art manufacturing facilities equipped with cutting-edge technology and adhering to the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <p className="text-lg text-blue-900 font-medium max-w-4xl mx-auto">
              At Litha Life Sciences, our manufacturing capabilities form the backbone of our commitment to providing high-quality and innovative pharmaceutical solutions. Join us in this journey where advanced technology, stringent quality control, and sustainability converge to shape the future of pharmaceutical manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 relative inline-block">
              Research & Development
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl font-medium mt-6">
              In the dynamic landscape of pharmaceuticals, innovation is the key to progress, and at Litha Life Sciences, our Research and Development (R&D) department stands at the forefront of this endeavor. Comprising a team of dedicated and highly skilled professionals, our R&D efforts are driven by a commitment to advancing healthcare solutions and addressing unmet medical needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {rndFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex gap-6 hover:border-blue-200 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-50 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                Join us on the frontier of pharmaceutical innovation, where our Research and Development efforts are shaping the future of healthcare. At Litha Life Sciences, we are dedicated to pioneering discoveries that make a meaningful impact on the well-being of individuals and communities globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reactions/Capabilities Grid */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
            <Beaker className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Chemical Reactions & Capabilities</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Our facilities are equipped to handle a wide range of complex chemical reactions at scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reactions.map((reaction, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-200 py-4 px-6 rounded-xl font-semibold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
              >
                {reaction}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
