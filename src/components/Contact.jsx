import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contactLinks = [
  { icon: Mail, label: 'Email', value: '[EMAIL]', href: 'mailto:[EMAIL]' },
  { icon: Linkedin, label: 'LinkedIn', value: '[LINKEDIN_URL]', href: '[LINKEDIN_URL]' },
  { icon: Github, label: 'GitHub', value: '[GITHUB_URL]', href: '[GITHUB_URL]' },
  { icon: Code2, label: 'LeetCode', value: '[LEETCODE_URL]', href: '[LEETCODE_URL]' },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Connect"
          subtitle="I'm open to software engineering opportunities, internships, collaborations and interesting projects."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, transition: { duration: 0.5 } }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-navy-800/50 border border-white/10 rounded-2xl card-hover group"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors flex-shrink-0">
                    <Icon size={20} className="text-accent-blue-light" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{link.label}</p>
                    <p className="text-white text-sm font-medium truncate">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, transition: { duration: 0.5 } }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-navy-800/50 border border-white/10 rounded-2xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-navy-900/60 border rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-navy-900/60 border rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-navy-900/60 border rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-white/10'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1.5">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-navy-900/60 border rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue-light text-white font-medium rounded-lg transition-colors disabled:opacity-70 shadow-lg shadow-accent-blue/20"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
