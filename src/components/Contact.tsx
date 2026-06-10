import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export function Contact() {
  const { search } = useLocation();

  const prefillMessage = useMemo(() => {
    const params = new URLSearchParams(search);
    const apiName = params.get('apiName');
    const impurityName = params.get('impurityName');
    const catNo = params.get('catNo');
    const casNo = params.get('casNo');
    const iupac = params.get('iupac');
    const mf = params.get('mf');
    const mw = params.get('mw');
    const storage = params.get('storage');
    const status = params.get('status');

    if (!apiName && !impurityName && !catNo) return '';

    const lines = [
      'Hello,',
      '',
      'I would like to request a quote for the following product:',
      apiName ? `API Name: ${apiName}` : '',
      impurityName ? `Impurity Name: ${impurityName}` : '',
      catNo ? `CAT NO: ${catNo}` : '',
      casNo ? `CAS No: ${casNo}` : '',
      iupac ? `IUPAC Name: ${iupac}` : '',
      mf ? `Molecular Formula: ${mf}` : '',
      mw ? `Molecular Weight: ${mw}` : '',
      storage ? `Storage: ${storage}` : '',
      status ? `Inventory Status: ${status}` : '',
      '',
      'Regards,'
    ];

    return lines.filter(Boolean).join('\n');
  }, [search]);
  return (
    <section id="contact" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Partner With Us
          </h3>
          <p className="text-slate-600 font-medium">
            Contact Litha Life Sciences for inquiries regarding our products, custom manufacturing services, or potential collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex items-start gap-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0077FF] shadow-sm shrink-0 border border-slate-200">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Corporate Office & Plant</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  #Block A-205, Pagadala Pride, <br />
                  Bachupally (V), Medchal-Malkajigiri (D),<br />
                  Telangana, India - 500090
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href="mailto:info@lithalife.com" className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0077FF] shadow-sm border border-slate-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 mb-1">Email Us</h4>
                    <span className="text-slate-600 text-sm">info@lithalife.com</span>
                  </div>
                </a>
              
              <a href="tel:+918790545679" className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0077FF] shadow-sm border border-slate-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 mb-1">Call Us</h4>
                  <span className="text-slate-600 text-sm">+91 8790545679</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="bg-white shadow-xl shadow-slate-200/50 border border-slate-100 rounded-2xl p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const fd = new FormData(form);
                const name = (fd.get('name') || '').toString();
                const company = (fd.get('company') || '').toString();
                const email = (fd.get('email') || '').toString();
                const phone = (fd.get('phone') || '').toString();
                const message = (fd.get('message') || '').toString();

                const subject = `Product Inquiry from ${name || 'Website Visitor'}`;
                const bodyLines = [] as string[];
                if (company) bodyLines.push(`Company: ${company}`);
                if (email) bodyLines.push(`Email: ${email}`);
                if (phone) bodyLines.push(`Phone: ${phone}`);
                if (message) bodyLines.push('', message);
                const body = bodyLines.join('\n');

                const mailto = `mailto:info@lithalife.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailto;
              }}
            >
              <h4 className="text-2xl font-heading font-bold text-slate-900 mb-6">Send an Inquiry</h4>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input name="name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0077FF]/20 focus:border-[#0077FF] transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                  <input name="company" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0077FF]/20 focus:border-[#0077FF] transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input name="email" type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0077FF]/20 focus:border-[#0077FF] transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <input name="phone" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0077FF]/20 focus:border-[#0077FF] transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message or Product Requirement</label>
                <textarea rows={6} name="message" defaultValue={prefillMessage} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0077FF]/20 focus:border-[#0077FF] transition-all text-slate-900 placeholder:text-slate-400 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full medical-gradient text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
                Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
