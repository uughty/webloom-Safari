import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Smile } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-black via-[#0b0b0b] to-[#031b1b]"
    >
      {/* Soft background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,100,100,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,200,0.15),transparent_40%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-pink-400 mb-4">
            About Webloom
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto mb-4" />
          <p className="max-w-xl mx-auto text-sm md:text-base text-white/70">
            Webloom Africa blends creativity and technology to craft experiences
            that inspire, engage, and elevate your brand.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-start mb-24">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-1 w-1 h-16 bg-emerald-400" />
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
              Our Vision
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              We craft interfaces that bloom with meaning, where motion meets
              emotion.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Every project grows alongside your brand, combining elegance,
              functionality, and innovation. We ensure your digital presence is
              not just seen, but felt.
            </p>
          </motion.div>

          {/* RIGHT FLOATING ICONS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <Eye className="w-20 h-20 text-emerald-400 absolute top-0 right-12" />
            <Smile className="w-20 h-20 text-amber-400 absolute bottom-0 left-12" />
            <div className="w-px h-48 bg-pink-400/60" />
          </motion.div>
        </div>

        {/* WHAT DEFINES US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mb-20"
        >
          <h3 className="text-xl font-semibold text-pink-400 mb-6">
            What Defines Us
          </h3>
          <ul className="space-y-4 text-sm text-white/80">
            {[
              "Human-centered creative strategy that prioritizes user connection.",
              "Experimental 3D web design for deeply immersive, modern experiences.",
              "Fluid motion and interactive depth, bringing static content to life.",
              "Long-term design evolution partnerships, ensuring continuous growth.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-pink-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-12 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-pink-400">
                {stat.value}
              </div>
              <div className="text-xs mt-1 text-white/60">
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
