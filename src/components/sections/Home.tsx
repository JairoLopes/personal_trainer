import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideUpFadeIn, slideDownFadeIn } from "../../animations";
import { ArrowRight, Award, Dumbbell, Star } from "lucide-react";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Transformando vidas",
    "Resultados garantidos",
    "Metodologia comprovada",
    "Disciplina e evolução",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-deepBlue pt-10 px-7"
    >
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-deepBlue via-navBlack to-deepBlue">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mainTheme rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryTheme rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mainTheme/30 rounded-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: window.innerHeight,
              opacity: [0, 1, 0],
              x: Math.sin(i * 45) * 100,
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${(i + 1) * 12}%`,
            }}
          />
        ))}
      </div>

      {/* Container principal */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Coluna esquerda - Conteúdo */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge de profissional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/20 to-secondaryTheme/20 border border-mainTheme/30 px-4 py-2 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-secondaryTheme" />
              <span className="text-sm font-medium text-white/80">
                Personal Trainer Certificado
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={slideDownFadeIn.initial}
              whileInView={slideDownFadeIn.animate}
              transition={{ duration: 1 }}
              className="text-center lg:text-left text-4xl sm:text-5xl space-x-3 lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text2 lg:block">Talles</span>
              <span className="gradient-text lg:block">Furtado</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Dumbbell className="w-6 h-6 text-secondaryTheme" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Especialista em Hipertrofia e Emagrecimento
                </h2>
              </div>

              {/* Texto rotativo */}
              <div className="h-8 overflow-hidden">
                <motion.p
                  key={currentTextIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-center lg:text-left sm:text-xl text-mainTheme font-semibold"
                >
                  {texts[currentTextIndex]}
                </motion.p>
              </div>
            </motion.div>

            {/* Descrição */}
            <motion.p
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-8"
            >
              <strong className="text-secondaryTheme">
                Bacharel em Educação Física
              </strong>
              , atleta de fisiculturismo e praticante há mais de{" "}
              <strong className="text-secondaryTheme">10 anos</strong>. Dedico
              minha carreira a transformar vidas através do esporte, combinando
              ciência, experiência prática e acompanhamento personalizado.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {[
                { value: "10+", label: "Anos de Experiência" },
                { value: "2x", label: "Campeão Mens Physique" },
                { value: "100%", label: "Satisfação dos alunos" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-navBlack/50 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="text-2xl font-bold text-mainTheme mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Botões de ação */}
            <motion.div
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Botão Planos */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#planos"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-mainTheme/30"
              >
                <span>Ver Planos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Botão WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 border border-green-500/30"
              >
                <i className="bx bxl-whatsapp text-2xl"></i>
                <span>Fale no WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Coluna direita - Imagem */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Moldura decorativa */}
            <div className="absolute inset-0 bg-gradient-to-r from-mainTheme to-secondaryTheme rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -inset-4 border-2 border-mainTheme/30 rounded-full animate-spin-slow"></div>

            {/* Imagem principal */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src="/img/Img_Hero/profile2.png"
                alt="Talles Furtado - Personal Trainer"
                className="w-[280px] sm:w-[350px] lg:w-[450px] rounded-2xl shadow-2xl shadow-mainTheme/30 border-4 border-white/10"
              />

              {/* Badge flutuante */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-secondaryTheme to-yellow-500 text-deepBlue font-bold px-4 py-2 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm">Atleta Campeão</span>
                </div>
              </motion.div>

              {/* Elementos decorativos ao redor */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-mainTheme rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    top: `${[20, 50, 80][i]}%`,
                    left: `${[-10, 110, 50][i]}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Cards flutuantes com informações */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-navBlack/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mainTheme/20 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-mainTheme" />
                </div>
                <div>
                  <div className="text-white font-bold">+10 anos</div>
                  <div className="text-white/60 text-xs">Experiência</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -top-6 -right-6 bg-navBlack/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondaryTheme/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-secondaryTheme" />
                </div>
                <div>
                  <div className="text-white font-bold">2x</div>
                  <div className="text-white/60 text-xs">Campeão</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#formacao"
          className="flex flex-col items-center text-white/60 hover:text-mainTheme transition-colors duration-300"
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>

      {/* Adicionar animação de spin lento ao Tailwind */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
