import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const Conquistas = () => {
  // Dados da competição de 2024
  const campeonato2024 = [
    { path: "/img/meusResultados/Talles_Trofeu.jpeg", legenda: "Troféu 2024" },
    {
      path: "/img/meusResultados/campeonato_costas.jpg",
      legenda: "Costas 2024",
    },
  ];

  // Dados da competição de 2025
  const campeonato2025 = [
    { path: "/img/meusResultados/compRecente1.jpeg", legenda: "Campeão 2025" },
    { path: "/img/meusResultados/CompRecente2.jpeg", legenda: "Campeão 2025" },
  ];

  return (
    <section
      id="conquistas"
      className="section-style
  lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.85),rgb(13,12,12,0.99)),url('/img/Img_Feedback/fb3.jpg')] bg-no-repeat bg-fixed bg-cover"
    >
      {/* Container que engloba todo o CONQUISTAS */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style text-center"
        >
          Conquistas
        </motion.h2>

        <motion.p
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="font-semibold text-sm sm:text-[16px] text-white/80 text-center max-w-[80%] mb-12"
        >
          Há algum tempo venho me dedicando como atleta de fisiculturismo, e
          desde que comecei a aplicar o protocolo em meus treinos e rotina
          alimentar, venho conquistando resultados significativos,
          consequentemente premiações em campeonatos.
        </motion.p>

        {/* Container principal das competições - Layout Vertical */}
        <div className="w-full space-y-10">
          {/* Competição 2025 - Layout Vertical */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="bg-navBlack/50 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/5"
          >
            {/* Cabeçalho da competição 2025 */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondaryTheme/15 to-secondaryTheme/5 px-3 py-1 rounded-full mb-2">
                <span className="w-1.5 h-1.5 bg-secondaryTheme rounded-full"></span>
                <span className="text-secondaryTheme font-bold text-xs tracking-wider">
                  2025
                </span>
              </div>
              <h3 className="gradient-text font-bold text-lg md:text-xl mb-2">
                Campeão Mens Physique
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Conquista do título de Campeão Mens Physique 2025 no campeonato
                CBCM, nas categorias sênior, estreante e novice.
              </p>
            </div>

            {/* Conteúdo Vertical - 2025 */}
            <div className="flex flex-col items-center gap-4">
              {/* Vídeo 2025 - Formato Vertical */}
              <div className="w-full max-w-[280px] mx-auto">
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[9/16]">
                  <video
                    className="w-full h-full object-cover"
                    src="/video/compRecenteVideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-3">
                    <span className="text-white text-xs font-medium">
                      Campeão 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Fotos 2025 - Grid Vertical */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                  {campeonato2025.map((item, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg aspect-[3/4]"
                    >
                      <img
                        src={item.path}
                        alt={`Campeonato 2025 - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-3">
                        <span className="text-white text-xs font-medium">
                          {item.legenda}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Linha Divisória Sutil */}
          <div className="relative flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-mainTheme/20 to-transparent"></div>
            <div className="absolute px-2 py-0.5 bg-deepBlue">
              <span className="text-mainTheme/50 text-[10px] font-semibold tracking-widest">
                • • •
              </span>
            </div>
          </div>

          {/* Competição 2024 - Layout Vertical */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="bg-navBlack/50 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/5"
          >
            {/* Cabeçalho da competição 2024 */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-mainTheme/5 px-3 py-1 rounded-full mb-2">
                <span className="w-1.5 h-1.5 bg-mainTheme rounded-full"></span>
                <span className="text-mainTheme font-bold text-xs tracking-wider">
                  2024
                </span>
              </div>
              <h3 className="gradient-text font-bold text-lg md:text-xl mb-2">
                Campeão Mens Physique
              </h3>
              <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                Conquista do título de Campeão Mens Physique 2024 no campeonato
                CBCM, em Pernambuco, nas categorias sênior, estreante e novice.
              </p>
            </div>

            {/* Conteúdo Vertical - 2024 */}
            <div className="flex flex-col items-center gap-4">
              {/* Vídeo 2024 - Formato Vertical */}
              <div className="w-full max-w-[280px] mx-auto">
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[9/16]">
                  <video
                    className="w-full h-full object-cover"
                    src="/video/talles_crop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-3">
                    <span className="text-white text-xs font-medium">
                      Campeão 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Fotos 2024 - Grid Vertical */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                  {campeonato2024.map((item, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg aspect-[3/4]"
                    >
                      <img
                        src={item.path}
                        alt={`Campeonato 2024 - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2 px-3">
                        <span className="text-white text-xs font-medium">
                          {item.legenda}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resumo Final Minimalista */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-center pt-4"
          >
            <div className="inline-block">
              <h4 className="text-sm font-medium text-white/70 mb-1">
                Trajetória Vitoriosa
              </h4>
              <p className="text-white/50 text-xs max-w-md mx-auto">
                Consecutividade nas conquistas comprova a eficácia do método
                aplicado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conquistas;
