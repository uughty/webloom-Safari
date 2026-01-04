import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";

/* ---------------- Animations ---------------- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* ---------------- Component ---------------- */

const ProjectsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Maternal Hub",
      category: "Health & Community Platform",
      description:
        "A digital health solution empowering mothers with access to maternal services, community forums, and real-time guidance.",
      image: project1,
      tags: ["HTML", "TailwindCSS", "JavaScript"],
      link: "https://magnificent-peony-f9d546.netlify.app/",
    },
    {
      title: "AfriArts Kenya",
      category: "E-commerce & Art Gallery",
      description:
        "An online marketplace connecting African artists to global buyers through a stunning modern interface.",
      image: project2,
      tags: ["React", "HTML", "TailwindCSS"],
      link: "https://splendorous-dolphin-b0c15c.netlify.app/",
    },
    {
      title: "CyberTrove Africa",
      category: "Web Design & Branding",
      description:
        "A cutting-edge tech agency website featuring animations, fluid UX design, and brand storytelling.",
      image: project3,
      tags: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://cybertroveafrica.com/",
    },
    {
      title: "Africa Yetu",
      category: "Responsive Web Design",
      description:
      "A safari and travel experience platform celebrating the heart of Africa’s wildlife, landscapes, and cultures. The website showcases curated safari adventures, breathtaking destinations, and authentic experiences designed to connect travelers with the true spirit of Africa",
      image: project4,
    
      tags: ["React", "Next.js", "Frame motion", "TailwindCss"],
      link: "https://benevolent-entremet-3e5f38.netlify.app/",
    },
     {
      title: "PharmaQ Meds Kenya",
      category: "Responsive Web Design",
      description:
      "A pharmaceutical analytics dashboard designed to provide real-time insights into drug inventory, sales performance, and regulatory compliance. The platform enables data-driven decision-making through clear visualizations, interactive reports, and streamlined operational monitoring.",
      image: project5,
    
      tags: ["React", "Next.js", "TailwindCss", "Python Django"],
      link: "",
    },

  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-400 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            A showcase of our creative and technical expertise across web design,
            development, and branding.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="group relative rounded-2xl bg-neutral-900/70 border border-white/10
                         backdrop-blur-xl overflow-hidden focus:outline-none"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t
                             from-black/90 via-black/60 to-transparent"
                />

                {/* View Project CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-4 right-4 flex items-center gap-2
                             px-4 py-2 rounded-full bg-amber-400 text-black
                             text-sm font-semibold"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-amber-400 mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-amber-400/10 text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
