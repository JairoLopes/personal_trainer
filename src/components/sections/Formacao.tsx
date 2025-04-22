import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const Formacao = () => {
  const topicosText: string[] = [
    "Treinos personalizados, intensos e que se encaixam na sua rotina, seja em casa, na academia ou no lugar que você quiser.",
    "Opções adaptáveis para todos os níveis e objetivos: seja emagrecimento, ganho de massa ou condicionamento físico, proporcionando uma jornada fitness completa, desafiando seus limites diariamente",
    "Aulas personalizadas, gravadas para você assistir e treinar de onde quiser.Aulas personalizadas, gravadas para você assistir e treinar de onde quiser.",
    "Treinos para iniciantes, intermediários e avançados atualizados mensalmente, suporte diário através do WhatsApp.",
  ];

  return (
    <section id="formacao" className="section-style">
      {/* Container que engloba todo o FORMAÇÃO */}
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style"
        >
          Sobre mim
        </motion.h2>

        {/* Container titulos serviços e topicos. */}
        <div className="space-y-8">
          {/* Container Formação e objetivos */}
          <div className="space-y-2 text-center md:text-start">
            <motion.h3
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="gradient-text font-bold text-xl sm:text-2xl"
            >
              Formação e objetivos
            </motion.h3>

            <motion.p
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-[16px]"
            >
              Sou Graduado em Educação Física e Atleta. Meu trabalho tem como
              foco o público que tem como principal objetivo mudanças de padrões
              estético, Emagrecimento e Hipertrofia.
            </motion.p>
          </div>

          {/* Container Serviços e Tópicos */}
          <div className="space-y-8 text-center md:text-start">
            {/* Container Serviços */}
            <div>
              {/* Titulo serviços */}
              <motion.h3
                initial={slideUpFadeIn.initial}
                whileInView={slideUpFadeIn.animate}
                transition={{ duration: 0.8 }}
                className="gradient-text font-bold text-2xl"
              >
                Serviços
              </motion.h3>

              {/* Paragrafo serviços */}
              <motion.p
                initial={slideUpFadeIn.initial}
                whileInView={slideUpFadeIn.animate}
                transition={{ duration: 0.8 }}
              >
                Consultoria Online e presencial
              </motion.p>
            </div>

            {/* Container tópicos */}
            <div className="space-y-5">
              {/* Conteiner onde cada topico unico é iterado e replicado*/}
              {topicosText.map((i, index) => (
                <motion.div
                  initial={slideUpFadeIn.initial}
                  whileInView={slideUpFadeIn.animate}
                  transition={{ duration: 0.8 }}
                  key={index}
                  className="flex justify-center items-start gap-4 p-5 bg-navBlack/75 hover:shadow-lg
               hover:shadow-mainTheme hover:-translate-y-1 
               rounded transition-all duration-500"
                >
                  <i className="bx bxs-chevron-down-circle text-mainTheme text-2xl"></i>
                  <p className="text-sm sm:text-[16px]">{i}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
