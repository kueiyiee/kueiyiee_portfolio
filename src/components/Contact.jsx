import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPaperPlane, FaPhoneAlt, FaSpinner } from 'react-icons/fa';
import MotionSurface from './MotionSurface';
import useSectionInView from '../hooks/useSectionInView';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '0TMnbjtHSvShX_5Dt';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0ayxzys';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_c0f9c76';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const iconMotion = {
  whileHover: { y: -3, scale: 1.06, boxShadow: '0 8px 20px rgba(45, 212, 191, 0.22)' },
  whileTap: { y: 0, scale: 0.94 },
  transition: { type: 'spring', stiffness: 320, damping: 20 },
};

export default function Contact({ profile }) {
  const { ref, isVisible } = useSectionInView(0.15);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required before sending.' });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      });

      setStatus({ type: 'success', message: 'Message sent successfully. Thank you.' });
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: 'error', message: 'Message failed to send. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-anchor section-shell pb-6">
      <h2 className="section-title flex items-center gap-3">
        <FaPaperPlane className="text-cyan-600" /> Contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-start">
        <MotionSurface
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="surface-panel h-fit max-w-[28rem] lg:max-w-[26rem] lg:justify-self-start"
          intensity={5.2}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 text-sm font-bold text-white shadow-[0_12px_26px_rgba(14,165,233,0.22)]">
              KP
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300 font-semibold">Let's connect</p>
              <h3 className="font-semibold text-base md:text-lg text-slate-900 dark:text-slate-100">Start a conversation</h3>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-7">
            Open to internships, engineering collaborations, and product-focused roles.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2">
            <motion.a
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-100"
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
              {...iconMotion}
            >
              <FaGlobe />
            </motion.a>
            <motion.a
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-100"
              href={`mailto:${profile.emailPrimary}`}
              aria-label="Email"
              {...iconMotion}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-100"
              href={`tel:${profile.phone}`}
              aria-label="Phone"
              {...iconMotion}
            >
              <FaPhoneAlt />
            </motion.a>
            <motion.a
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-100"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              {...iconMotion}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center text-slate-700 dark:text-slate-100"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              {...iconMotion}
            >
              <FaLinkedin />
            </motion.a>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">Availability</p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">Available for select opportunities and thoughtful collaborations.</p>
          </div>
        </MotionSurface>

        <MotionSurface
          initial={{ opacity: 0, y: 18 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          className="luminous-panel"
          intensity={5.4}
        >
          <h3 className="font-semibold text-base sm:text-lg mb-4">Send a message</h3>
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Your name"
              className="form-field"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Email address"
              className="form-field"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={onChange}
              placeholder="Subject"
              className="form-field"
            />
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={onChange}
              placeholder="Your message"
              className="form-field min-h-[140px] resize-y"
            />

            <motion.button
              type="submit"
              disabled={sending}
              className="action-btn bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white disabled:opacity-70"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {sending ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.message && (
              <p
                className={`text-sm ${
                  status.type === 'success' ? 'text-emerald-600 dark:text-emerald-300' : 'text-red-600 dark:text-red-300'
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </MotionSurface>
      </div>
    </section>
  );
}
