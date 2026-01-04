import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { SectionMarker3D } from "@/components/3D/NavigationElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ---------------- Animations ---------------- */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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

const ContactSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@webloomafrica.com",
      link: "mailto:webloomafrica@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 750050171",
      link: "tel:+25406825758",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden
                 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      {/* Strong visible glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px]
                        bg-pink-500/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px]
                        bg-amber-400/20 rounded-full blur-[180px]" />
      </div>

      {/* 3D Marker */}
      <div className="absolute top-10 right-10 w-16 h-16 z-20">
        <Canvas>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 2]} intensity={1.2} />
          <SectionMarker3D color="#EC4899" />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6
                         bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-500
                         bg-clip-text text-transparent">
            Let’s Work Together
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Have a project in mind? Let’s build something bold, beautiful,
            and scalable together.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Form */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl bg-neutral-900/80
                       border border-white/20 backdrop-blur-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-black/40 border-white/20
                             focus:border-pink-500 focus:ring-pink-500/20"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black/40 border-white/20
                             focus:border-pink-500 focus:ring-pink-500/20"
                />
              </div>

              <Input
                placeholder="Subject"
                className="bg-black/40 border-white/20
                           focus:border-amber-400 focus:ring-amber-400/20"
              />

              <Textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="bg-black/40 border-white/20 resize-none
                           focus:border-pink-500 focus:ring-pink-500/20"
              />

              <Button
                className="w-full text-black font-semibold
                           bg-gradient-to-r from-amber-400 to-pink-500
                           hover:from-pink-500 hover:to-fuchsia-500"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <div className="space-y-8">
            <motion.div
              variants={cardVariants}
              className="rounded-2xl bg-neutral-900/80
                         border border-white/20 backdrop-blur-xl p-8"
            >
             <h3 className="text-2xl font-semibold mb-6 text-white">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      variants={cardVariants}
                      className="flex items-center gap-4 p-4 rounded-xl
                                 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg
                                      bg-gradient-to-br from-pink-500/30 to-amber-400/30
                                      flex items-center justify-center">
                        <Icon className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400">
                          {info.label}
                        </p>
                        <p className="font-medium text-neutral-100">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              variants={cardVariants}
              className="rounded-2xl bg-neutral-900/80
                         border border-white/20 backdrop-blur-xl p-8"
            ><h4 className="text-xl font-semibold mb-4 text-white">
  Office Hours
</h4>

              <div className="space-y-2 text-neutral-300">
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
