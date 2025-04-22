import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const Conquistas = () => {
  const campeonato = [
    { path: "/img/meusResultados/Talles_Trofeu.jpeg" },
    { path: "/img/meusResultados/campeonato_costas.jpg" },
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
          className="font-semibold text-sm sm:text-[16px] text-white/80 text-center max-w-[80%] mb-8 lg:mb-18"
        >
          Há algum tempo venho me dedicando como atleta de fisioculturismo, e
          desde que comecei a aplicar o protocolo em meus treinos e rotina
          alimentar, venho conquistando resultados significativos,
          consequentemente uma premiação em um campeonato.
        </motion.p>

        {/* Container que engloba as imagens */}
        <div className="flex flex-col items-center mt-8 mx-auto">
          <motion.h2
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="gradient-text font-bold text-lg sm:text-2xl lg:text-3xl text-center"
          >
            Campeão Mens Physique
          </motion.h2>
          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="font-semibold text-sm sm:text-[16px] text-white/80 text-center max-w-[80%] my-6 lg:mb-18"
          >
            Após alguns meses de preparação seguindo um rigoroso protocolo de
            dieta e treino, tive o privilégio de participar do campeonato de
            fisioculturismo CBCM, no estado de Pernambuco, onde saí vitorioso
            nas categorias: <strong>Mens Physique sênior</strong>,{" "}
            <strong>estreante</strong> e <strong>novice</strong>.
          </motion.p>

          {/* Container que engloba videos e imagens*/}
          <div className="flex flex-col items-center content-center w-full mt-4 mx-auto">
            <motion.video
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
              id="video-cortado"
              src="/video/talles_crop.mp4"
              autoPlay
              muted
              loop
            ></motion.video>
          </div>

          {/* Container que engloba o SLIDE */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 mt-2"
          >
            {campeonato.map((item, index) => (
              <img
                key={index}
                src={item.path}
                alt=""
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-2xl"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conquistas;
