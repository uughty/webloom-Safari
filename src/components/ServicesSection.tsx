import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Code, Server, ChevronDown } from "lucide-react";

/* ------------------ Animation Variants ------------------ */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* ------------------ Component ------------------ */

const ServicesSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItem, setOpenItem] = useState<string | null>(null);

  const services = [
    {
      title: "Web Design",
      icon: Palette,
      glow: "from-emerald-400/40",
      accent: "text-emerald-400",
      description:
        "Crafting visually stunning and user-centric designs that captivate audiences and enhance brand identity.",
      items: [
        { label: "UI/UX Design", text: "User-focused interfaces optimized for clarity and conversions." },
        { label: "Brand Identity", text: "Consistent visual systems that communicate trust." },
        { label: "Responsive Layouts", text: "Pixel-perfect designs across all devices." },
        { label: "Design Systems", text: "Scalable systems for long-term growth." },
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      glow: "from-rose-400/40",
      accent: "text-rose-400",
      description:
        "Building robust, scalable, and high-performance web applications using modern technologies.",
      items: [
        { label: "React & Next.js", text: "Fast, SEO-friendly production apps." },
        { label: "Full-Stack Solutions", text: "Clean architecture from frontend to backend." },
        { label: "API Integration", text: "Secure and scalable APIs." },
        { label: "3D Web Experiences", text: "Immersive Three.js & WebGL interfaces." },
      ],
    },
    {
      title: "IT Services",
      icon: Server,
      glow: "from-amber-400/40",
      accent: "text-amber-400",
      description:
        "Comprehensive IT solutions including cloud infrastructure, security, and support.",
      items: [
        { label: "Cloud Hosting", text: "Reliable, scalable cloud infrastructure." },
        { label: "DevOps", text: "Automated CI/CD pipelines." },
        { label: "Security", text: "Proactive threat protection." },
        { label: "Technical Support", text: "Ongoing monitoring and assistance." },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your online presence
            and drive business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="relative rounded-2xl bg-neutral-900/60 backdrop-blur-xl
                           border border-white/10 p-8 will-change-transform"
              >
                {/* Bottom glow */}
                <motion.div
                  className={`absolute inset-x-0 -bottom-6 h-24
                              bg-gradient-to-t ${service.glow} to-transparent blur-2xl`}
                  animate={{
                    opacity: [0.4, 0.75, 0.4],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Hover shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-2xl
                             bg-gradient-to-br from-white/5 via-transparent to-transparent
                             opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-14 h-14 mb-6 rounded-xl bg-white/5 flex items-center justify-center"
                >
                  <Icon className={`w-7 h-7 ${service.accent}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-4">
                  {service.items.map((item, i) => {
                    const id = `${index}-${i}`;
                    const isOpen = openItem === id;

                    return (
                      <li key={id}>
                        <button
                          onClick={() => setOpenItem(isOpen ? null : id)}
                          className={`w-full flex items-center justify-between text-sm font-medium ${service.accent}`}
                        >
                          {item.label}
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.span>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                            y: isOpen ? 0 : -6,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1] as const,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                            {item.text}
                          </p>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
