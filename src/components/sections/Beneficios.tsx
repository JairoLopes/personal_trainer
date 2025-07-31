import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import { IoCheckmark } from "react-icons/io5";
const beneficiosData: string[] = [
  "Suporte completo 24h em tempo real.",
  "Pode fazer até duas vídeo chamadas na semana para tirar dúvidas e falar sobre todo o protocolo.",
  "Suplementação com desconto na loja TF.",
  "Treino com o personal na sala de musculação.",
  "Funcional em área externa/bike.",
  "Dieta personalizada (valor adicional no plano).",
  "Indicação de planos ganha desconto.",
  "Avaliação e anamnese.",
  "Correção de exercício com vídeos demonstrativos.",
  "Ajuste e feedback semanal ou sempre que necessário conforme a sua evolução.",
  "Preenchimento de Anamnese.",
  "Grupo no WhatsApp do Team TF.",
];

const Beneficios = () => {
  return (
    <section
      id="beneficios"
      className="section-style bg-navBlack/80 text-myWhite"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style"
        >
          Benefícios do time TF
        </motion.h2>

        <motion.p
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="font-semibold text-sm sm:text-[16px] text-mainTheme text-center  mb-8 lg:mb-18"
        >
          Venha fazer parte do nosso time e aproveite todos os benefícios que
          oferecemos.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiosData.map((item, index) => (
            <motion.div
              key={index}
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-4 bg-deepBlue/85 rounded-lg"
            >
              <IoCheckmark className="text-secondaryTheme text-2xl flex-shrink-0" />
              <p className="text-sm sm:text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
