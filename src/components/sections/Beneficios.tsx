import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import {
  Clock,
  Video,
  ShoppingBag,
  Dumbbell,
  Bike,
  Utensils,
  Users,
  FileText,
  MessageCircle,
  TrendingUp,
  Heart,
  Shield,
} from "lucide-react";

const Beneficios = () => {
  const beneficiosData = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Suporte 24/7",
      description:
        "Acompanhamento completo em tempo real, sempre que precisar.",
      category: "suporte",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Videochamadas",
      description:
        "Até duas sessões por semana para tirar dúvidas e ajustar o protocolo.",
      category: "suporte",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Descontos Exclusivos",
      description: "Suplementação com preços especiais na loja TF.",
      category: "vantagens",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Treino Personalizado",
      description:
        "Sessões presenciais com acompanhamento técnico na sala de musculação.",
      category: "treino",
    },
    {
      icon: <Bike className="w-6 h-6" />,
      title: "Treino Funcional",
      description: "Sessões em área externa e bike para variar o estímulo.",
      category: "treino",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Dieta Personalizada",
      description:
        "Plano alimentar individualizado (valor adicional no plano).",
      category: "nutricao",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Indicação Premiada",
      description: "Indique amigos e ganhe descontos nos seus próximos planos.",
      category: "vantagens",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Avaliação Completa",
      description: "Anamnese detalhada e avaliação física inicial.",
      category: "acompanhamento",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Correção com Vídeos",
      description:
        "Feedback visual com vídeos demonstrativos para aperfeiçoar a técnica.",
      category: "acompanhamento",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Ajustes Constantes",
      description: "Feedback semanal e ajustes conforme sua evolução.",
      category: "acompanhamento",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Anamnese Digital",
      description:
        "Preenchimento completo do seu histórico de saúde e objetivos.",
      category: "acompanhamento",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comunidade Exclusiva",
      description:
        "Acesso ao grupo do WhatsApp do Team TF para networking e suporte.",
      category: "comunidade",
    },
  ];

  const categorias = [
    { id: "suporte", nome: "Suporte", cor: "from-blue-500/20 to-blue-600/20" },
    { id: "treino", nome: "Treino", cor: "from-mainTheme/20 to-blue-600/20" },
    {
      id: "acompanhamento",
      nome: "Acompanhamento",
      cor: "from-secondaryTheme/20 to-yellow-500/20",
    },
    {
      id: "vantagens",
      nome: "Vantagens",
      cor: "from-green-500/20 to-emerald-600/20",
    },
    {
      id: "nutricao",
      nome: "Nutrição",
      cor: "from-orange-500/20 to-orange-600/20",
    },
    {
      id: "comunidade",
      nome: "Comunidade",
      cor: "from-purple-500/20 to-purple-600/20",
    },
  ];

  return (
    <section
      id="beneficios"
      className="section-style bg-gradient-to-b from-deepBlue via-navBlack to-deepBlue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
          >
            <Shield className="w-5 h-5 text-mainTheme" />
            <span className="text-sm font-medium text-white/80 tracking-wider">
              VANTAGENS EXCLUSIVAS
            </span>
          </motion.div>

          <motion.h2
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="h2-style mb-6"
          >
            Benefícios do Time TF
          </motion.h2>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Ao fazer parte do nosso time, você tem acesso a uma estrutura
            completa pensada para potencializar seus resultados e transformar
            sua jornada fitness.
          </motion.p>

          {/* Contador de benefícios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 bg-navBlack/50 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4"
          >
            <div className="text-3xl font-bold gradient-text">
              {beneficiosData.length}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">
                Benefícios Exclusivos
              </div>
              <div className="text-white/60 text-sm">
                Para você alcançar seus objetivos
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {beneficiosData.map((beneficio, index) => {
            const categoria = categorias.find(
              (cat) => cat.id === beneficio.category
            );

            return (
              <motion.div
                key={index}
                initial={slideUpFadeIn.initial}
                whileInView={slideUpFadeIn.animate}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navBlack/80 to-deepBlue/80 backdrop-blur-sm transition-all duration-500 hover:border-mainTheme/30`}
              >
                {/* Indicador de categoria */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${
                    categoria?.cor || "from-mainTheme/20 to-blue-600/20"
                  } rounded-bl-2xl`}
                >
                  <div className="absolute top-3 right-3 text-white/80">
                    {beneficio.icon}
                  </div>
                </div>

                <div className="p-6">
                  {/* Número do benefício */}
                  <div className="text-5xl font-bold text-white/5 absolute -bottom-4 -left-2 group-hover:text-white/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Ícone */}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center group-hover:scale-110 group-hover:border-mainTheme/50 transition-all duration-500">
                      <div className="text-mainTheme group-hover:text-secondaryTheme transition-colors duration-500">
                        {beneficio.icon}
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mainTheme transition-colors duration-300">
                      {beneficio.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>

                  {/* Badge de categoria */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
                      <span className="text-xs text-white/60">
                        {categoria?.nome}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-mainTheme/0 via-mainTheme/0 to-mainTheme/0 group-hover:via-mainTheme/5 group-hover:to-mainTheme/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Pronto para Experimentar Todos Esses Benefícios?
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Junte-se ao Time TF e transforme sua jornada fitness com suporte
                especializado, recursos exclusivos e uma comunidade que te
                motiva a ir além.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#planos"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <span>Ver Planos Disponíveis</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-secondaryTheme text-secondaryTheme hover:bg-secondaryTheme/10 font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                <i className="bx bxl-whatsapp text-2xl"></i>
                <span>Falar com o Talles</span>
              </a>
            </div>

            {/* Depoimento ou informação adicional */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm italic">
                "Mais de 50 alunos já transformaram suas vidas com nossa
                metodologia. Agora é sua vez de fazer parte dessa história de
                sucesso."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Beneficios;
