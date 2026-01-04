import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@webloomafrica.com", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden bg-neutral-950 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-pink-500/10 blur-[140px]" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary/10 blur-[140px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Webloom <span className="gradient-text">Africa</span>
            </h3>
            <p className="text-neutral-300 leading-relaxed max-w-sm">
              We craft modern digital experiences that blend design, performance,
              and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-neutral-300">
              {["Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
                  >
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Connect With Us
            </h4>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10
                               flex items-center justify-center
                               hover:bg-pink-500/20 hover:border-pink-500/40
                               transition-all"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row
                     items-center justify-between gap-4 text-sm text-neutral-400"
        >
          <p>
            © {new Date().getFullYear()} Webloom Africa. All rights reserved.
          </p>

          <p className="text-neutral-500">
            Designed & Built with ❤️ in Africa
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
