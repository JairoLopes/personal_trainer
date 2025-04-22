import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const Planos = () => {
  const planosData = [
    {
      plano: "Mensal",
      valor: 149.99,
      tipoPlano: "Plano padrão",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20mensal",
    },
    {
      plano: "Trimestral",
      valor: 269.99,
      tipoPlano: "Plano promocional",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20trimestral",
    },
    {
      plano: "5 Meses",
      valor: 449.99,
      tipoPlano: "Plano promocional",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%20cinco%20meses",
    },
    {
      plano: "Semestral",
      valor: 399.99,
      tipoPlano: "Plano promocional",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20semestral",
    },
    {
      plano: "Anual",
      valor: 749.99,
      tipoPlano: "Plano promocional",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20anual",
    },
    {
      plano: "1 ano e 6 meses",
      valor: 1199.99,
      tipoPlano: "Plano promocional",
      whats:
        "https://wa.me/558198955665/?text=Tenho%20interesse%20em%20assinar%20o%20plano%20de%201%20Ano%20e%206%20meses",
    },
  ];

  return (
    <section
      id="planos"
      className="section-style 
    lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.97),rgb(13,12,12,0.9)),url('/img/img_Plans/plans_bg.jpg')] bg-no-repeat bg-fixed bg-cover"
    >
      {/* Div que engloba todo o PLANOS */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style"
        >
          Planos
        </motion.h2>

        {/* Container de titulos de Promoções */}
        <div className="flex flex-col gap-4 text-center justify-center items-center mb-14">
          <motion.h3
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="gradient-text font-bold text-2xl lg:text-3xl animate-pulse"
          >
            Promoção de verão
          </motion.h3>

          <motion.h4
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-xl font-bold text-secondaryTheme animate-balanco hover:animate-none active:animate-none"
          >
            Até dia 31/03
          </motion.h4>
        </div>

        {/* Container que irá armazenar os PLANOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planosData.map((i, index) => (
            <motion.article
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              key={index}
              className="bg-navBlack border-y-1 border-y-myWhite/40
               text-center py-8 px-11 rounded-xl space-y-8 hover:-translate-y-3
               transition-all duration-500"
            >
              {/* Container de Titulos do card */}
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-nowrap text-myWhite font-bold">
                  {i.plano}
                </h2>

                {/* Abaixo temos um condicional, se o tipo de plano for promocional, fica amarelo*/}
                <h3
                  className={`text-xl font-semibold
                   ${
                     i.tipoPlano === "Plano promocional"
                       ? "text-secondaryTheme"
                       : "text-myWhite"
                   }`}
                >
                  {i.tipoPlano}
                </h3>
              </div>

              {/* Container Valor e Botão */}
              <div className="pt-4 border-t-1 border-myWhite/40">
                {/* No preço, temos uma condicional, se o tipo do plano for promocional, fica amarelo */}
                <h1
                  className={`text-2xl sm:text-4xl font-extrabold ${
                    i.tipoPlano === "Plano promocional"
                      ? "text-secondaryTheme"
                      : "text-mainTheme"
                  }`}
                >
                  R${i.valor}
                </h1>
                <a
                  href={i.whats}
                  target="_blank"
                  className="block mt-6 btn-submit active:scale-95"
                >
                  Assinar
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
