import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import { CheckCircle } from "lucide-react";

const Planos = () => {
  // PLANOS ATUALIZADOS: removido plano de 5 meses, ajustados valores e adicionado "+ dieta"
  const planosData = [
    {
      plano: "Mensal",
      valor: 149.99,
      tipoPlano: "Plano padrão",
      dieta: true,
      popular: false,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20mensal",
    },
    {
      plano: "Trimestral",
      valor: 269.99,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 10%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20trimestral",
    },
    {
      plano: "Semestral",
      valor: 450.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: true,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 25%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20semestral",
    },
    {
      plano: "Anual",
      valor: 800.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 33%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20anual",
    },
    {
      plano: "1 ano e 6 meses",
      valor: 1199.99,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 40%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%201%20Ano%20e%206%20meses",
    },
    {
      plano: "2 anos",
      valor: 1600.0,
      tipoPlano: "Plano promocional",
      dieta: true,
      popular: false,
      beneficios: [
        "Treino personalizado",
        "Dieta inclusa",
        "Suporte por WhatsApp",
        "Atualização mensal",
        "Economia de 56%",
      ],
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%202%20anos",
    },
  ];

  return (
    <section
      id="planos"
      className="section-style 
    lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.97),rgb(13,12,12,0.9)),url('/img/img_Plans/plans_bg.jpg')] bg-no-repeat bg-fixed bg-cover"
    >
      {/* Div que engloba todo o PLANOS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style"
        >
          Planos
        </motion.h2>

        {/* Container de titulos de Promoções */}
        <div className="flex flex-col gap-2 text-center justify-center items-center mb-10">
          <motion.h3
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="gradient-text font-bold text-xl md:text-2xl"
          >
            Escolha o plano ideal para sua jornada
          </motion.h3>
          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-myWhite/70 text-sm md:text-base max-w-2xl mx-auto"
          >
            Todos os planos incluem dieta personalizada e suporte completo para
            você alcançar seus objetivos.
          </motion.p>
        </div>

        {/* Container que irá armazenar os PLANOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {planosData.map((i, index) => (
            <motion.article
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className={`relative bg-gradient-to-b from-navBlack/90 to-deepBlue/90 rounded-2xl border ${
                i.popular
                  ? "border-secondaryTheme/50 shadow-xl shadow-secondaryTheme/10"
                  : "border-white/10"
              } hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-mainTheme/10`}
            >
              {/* Destaque para plano popular */}
              {i.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-secondaryTheme to-yellow-500 text-deepBlue font-bold px-5 py-1.5 rounded-full text-sm shadow-lg">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Badge "+ dieta" */}
              {i.dieta && (
                <div className="absolute -top-2 -right-2 z-10">
                  <span className="bg-gradient-to-r from-mainTheme to-blue-600 text-white font-bold px-3 py-1 rounded-lg text-xs shadow-lg">
                    + DIETA
                  </span>
                </div>
              )}

              {/* Conteúdo do card */}
              <div className="p-6 md:p-7">
                {/* Cabeçalho do card */}
                <div className="text-center mb-6">
                  <h2
                    className={`text-2xl font-bold ${
                      i.popular ? "text-secondaryTheme" : "text-myWhite"
                    } mb-2`}
                  >
                    {i.plano}
                  </h2>

                  {/* Valor com destaque */}
                  <div className="mb-4">
                    <div
                      className={`text-4xl md:text-5xl font-extrabold ${
                        i.tipoPlano === "Plano promocional"
                          ? i.popular
                            ? "text-secondaryTheme"
                            : "text-mainTheme"
                          : "text-myWhite"
                      }`}
                    >
                      R${i.valor.toFixed(2).replace(".", ",")}
                    </div>
                    <p className="text-white/60 text-sm mt-1">
                      {i.plano.includes("Mensal")
                        ? "por mês"
                        : "pagamento único"}
                    </p>
                  </div>
                </div>

                {/* Lista de benefícios */}
                <div className="mb-8">
                  <h4 className="text-white/80 font-semibold mb-4 text-center text-sm">
                    INCLUI:
                  </h4>
                  <ul className="space-y-3">
                    {i.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondaryTheme flex-shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de ação */}
                <a
                  href={i.whats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 ${
                    i.popular
                      ? "bg-gradient-to-r from-secondaryTheme to-yellow-600 hover:from-yellow-500 hover:to-secondaryTheme text-deepBlue"
                      : "bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white"
                  } active:scale-95`}
                >
                  ASSINAR AGORA
                </a>

                {/* Indicador de economia para planos promocionais */}
                {i.tipoPlano === "Plano promocional" &&
                  i.plano !== "Mensal" && (
                    <div className="mt-4 text-center">
                      <p className="text-secondaryTheme text-sm font-medium">
                        Economia garantida em relação ao plano mensal
                      </p>
                    </div>
                  )}
              </div>

              {/* Decoração de canto sutil */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl ${
                  i.popular ? "border-secondaryTheme/30" : "border-mainTheme/30"
                }`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 rounded-bl-2xl ${
                  i.popular ? "border-secondaryTheme/30" : "border-mainTheme/30"
                }`}
              ></div>
            </motion.article>
          ))}
        </div>

        {/* Rodapé informativo */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <h4 className="text-white font-semibold mb-3">
              Dúvidas ou precisa de um plano personalizado?
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Entre em contato diretamente pelo WhatsApp para conversarmos sobre
              suas necessidades específicas.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95"
            >
              <i className="bx bxl-whatsapp text-xl"></i>
              FALE DIRETAMENTE COMIGO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Planos;
