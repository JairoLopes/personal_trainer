import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import {
  GraduationCap,
  Target,
  Users,
  Video,
  Dumbbell,
  Clock,
  MessageCircle,
  CheckCircle,
  Award,
  Calendar,
} from "lucide-react";

const Formacao = () => {
  const formacaoData = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formação Acadêmica",
      items: [
        "Bacharel em Educação Física",
        "Especialização em Fisiologia do Exercício",
        "Certificação Internacional em Treinamento Funcional",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco Principal",
      items: [
        "Hipertrofia Muscular",
        "Emagrecimento Eficiente",
        "Condicionamento Físico",
        "Preparação para Competições",
      ],
    },
  ];

  const servicosData = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Consultoria Online",
      description:
        "Acompanhamento completo via WhatsApp com treinos personalizados e ajustes semanais",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Treinamento Presencial",
      description:
        "Acompanhamento individual em academia com correção técnica e periodização avançada",
    },
  ];

  const metodologiaData = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Treinos Personalizados",
      description:
        "Protocolos desenvolvidos especificamente para seu biotipo, objetivos e disponibilidade",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Adaptável à Rotina",
      description:
        "Seja em casa, na academia ou onde preferir - seu treino se adapta ao seu estilo de vida",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Suporte Diário",
      description:
        "Acompanhamento constante via WhatsApp para dúvidas, ajustes e motivação",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Atualização Mensal",
      description:
        "Treinos revisados e atualizados mensalmente para evitar platô e manter evolução constante",
    },
  ];

  return (
    <section
      id="formacao"
      className="section-style bg-gradient-to-b from-deepBlue to-navBlack"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
          >
            <Award className="w-5 h-5 text-mainTheme" />
            <span className="text-sm font-medium text-white/80 tracking-wider">
              FORMAÇÃO E EXPERIÊNCIA
            </span>
          </motion.div>

          <motion.h2
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="h2-style mb-6"
          >
            Sobre Mim
          </motion.h2>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Com mais de uma década dedicada ao fitness, combino formação
            acadêmica sólida com experiência prática de atleta para entregar
            resultados reais e duradouros.
          </motion.p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna da Esquerda - Formação e Foco */}
          <div className="space-y-12">
            {/* Cards de Formação */}
            <div className="space-y-8">
              {formacaoData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={slideUpFadeIn.initial}
                  whileInView={slideUpFadeIn.animate}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-mainTheme/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center">
                      <div className="text-mainTheme">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondaryTheme mt-1 flex-shrink-0" />
                        <span className="text-white/80">{listItem}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Filosofia */}
            <motion.div
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 144, 255, 0.1), rgba(255, 204, 0, 0.05))",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-mainTheme/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Minha Filosofia
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Acredito que a transformação física vai além da estética - é
                  sobre
                  <strong className="text-secondaryTheme"> disciplina</strong>,
                  <strong className="text-mainTheme"> consistência</strong> e
                  <strong className="text-secondaryTheme">
                    {" "}
                    superação pessoal
                  </strong>
                  . Meu objetivo é guiar cada aluno não apenas para resultados
                  visíveis, mas para uma relação saudável e duradoura com o
                  exercício físico.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Coluna da Direita - Serviços e Metodologia */}
          <div className="space-y-12">
            {/* Serviços */}
            <div>
              <motion.div
                initial={slideUpFadeIn.initial}
                whileInView={slideUpFadeIn.animate}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-mainTheme to-secondaryTheme"></div>
                <h3 className="gradient-text font-bold text-2xl lg:text-3xl">
                  Serviços Oferecidos
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-secondaryTheme to-mainTheme"></div>
              </motion.div>

              <div className="space-y-6">
                {servicosData.map((servico, index) => (
                  <motion.div
                    key={index}
                    initial={slideUpFadeIn.initial}
                    whileInView={slideUpFadeIn.animate}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group bg-navBlack/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-mainTheme/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-mainTheme/20 to-secondaryTheme/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-mainTheme group-hover:text-secondaryTheme transition-colors duration-300">
                          {servico.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">
                          {servico.title}
                        </h4>
                        <p className="text-white/70">{servico.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metodologia */}
            <div>
              <motion.div
                initial={slideUpFadeIn.initial}
                whileInView={slideUpFadeIn.animate}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-0.5 bg-gradient-to-r from-secondaryTheme to-mainTheme"></div>
                <h3 className="gradient-text font-bold text-2xl lg:text-3xl">
                  Metodologia
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-mainTheme to-secondaryTheme"></div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {metodologiaData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={slideUpFadeIn.initial}
                    whileInView={slideUpFadeIn.animate}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gradient-to-b from-navBlack/60 to-deepBlue/60 border border-white/10 rounded-xl p-6 hover:border-mainTheme/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-mainTheme group-hover:text-secondaryTheme transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 rounded-2xl p-8 text-center"
            >
              <h4 className="text-xl font-bold text-white mb-4">
                Pronto para Transformar Seu Corpo?
              </h4>
              <p className="text-white/70 mb-6">
                Entre em contato para uma avaliação personalizada e descubra
                como posso ajudar você a alcançar seus objetivos.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <i className="bx bxl-whatsapp text-2xl"></i>
                <span>Agendar Consultoria</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Experiência Complementar */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
              Experiência Complementar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Atleta Competitivo",
                  description:
                    "2x Campeão Mens Physique com experiência em preparação para competições",
                  color: "from-mainTheme/20 to-blue-600/20",
                },
                {
                  title: "+10 Anos de Prática",
                  description:
                    "Experiência pessoal intensa em musculação e métodos de treinamento",
                  color: "from-secondaryTheme/20 to-yellow-500/20",
                },
                {
                  title: "Liderança de Equipe",
                  description:
                    "Coordenação do Time TF com dezenas de alunos transformados",
                  color: "from-mainTheme/20 to-secondaryTheme/20",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} border border-white/10 rounded-2xl p-8 text-center`}
                >
                  <h4 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formacao;
