import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ContactPage({ navigate }) {
  const { contact } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#07050d] text-white">
      {/* Top Banner Section */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-[#180828] to-[#07050d] overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-sans mb-6">
            Let's build something intelligent
          </h1>

          <p className="text-base sm:text-xl text-purple-200/80 leading-relaxed font-sans max-w-2xl">
            Have a workflow to improve or an idea to automate? Let's connect and explore how AI can help your business work smarter.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans">
              Let's talk about your next project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Form Card */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 text-gray-900 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 font-sans">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-purple-900 text-white font-medium text-sm hover:bg-purple-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-sans text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-sans text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Row 3: Project Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Project type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-sans text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="Shopify Development">Shopify Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="App Development">App Development</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud & Cybersecurity">Cloud & Cybersecurity</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 font-sans">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, goals, and challenges."
                      className="w-full px-4 py-3 rounded-xl bg-gray-100/80 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #9945FF 0%, #7928CA 100%)',
                    }}
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: 3 Contact Info Cards */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white text-gray-900 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-purple-600/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block font-sans">
                    Email address
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-base font-bold text-gray-900 hover:text-purple-600 transition-colors font-sans"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white text-gray-900 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-purple-600/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block font-sans">
                    Phone
                  </span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-base font-bold text-gray-900 hover:text-purple-600 transition-colors font-sans"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-white text-gray-900 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-purple-600/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block font-sans">
                    Location
                  </span>
                  <span className="text-base font-bold text-gray-900 block font-sans capitalize">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
