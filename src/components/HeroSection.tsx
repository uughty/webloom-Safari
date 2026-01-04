import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden
                 bg-[url('/hero.jpeg')]
                 bg-cover bg-center bg-no-repeat"
    >
      {/* Soft overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-yellow-400">Transform Your</span>
            <span className="block text-yellow-400">Ideas into</span>
            <span className="block text-pink-500">Digital</span>
            <span className="block text-pink-500">Masterpieces</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm md:text-base text-white/80">
            At <span className="text-cyan-400 font-semibold">Webloom Africa</span>, we craft websites
            that are not only visually stunning but also deliver measurable results.
            Bold, interactive, unforgettable — your brand deserves to bloom online.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-400 hover:opacity-90"
            >
              Start Your Project
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            >
              Explore Our Work
            </Button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Pink glow */}
          <div className="absolute w-[420px] h-[420px] bg-pink-500/40 blur-[120px] rounded-full" />

          {/* Image placeholders */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
