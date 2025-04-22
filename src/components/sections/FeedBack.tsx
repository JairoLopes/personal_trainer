import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";

const FeedBack = () => {
  const testimonials = [
    {
      testimonial:
        "Mano, o treino desse mês ta insano! Fiz o treino de costas ontem e hoje o de peito, só nesses primeiros já deeu pra sentir a intensidade bem maior e as mudanças no meu corpo também, esse ta sendo o melhor desse ano! Simbora pra cima.",
    },
    {
      testimonial:
        "Talles, quero te dizer que eu estou amando meus treinos, e estou dando meu melhor, não ta sendo fácil pra mim, mas com sua ajuda nos treinos eu sei que vou conseguir, e olhe que eu ja perdi 3 quilos em 2 semanas. Obrigado por me ajudar, você é o melhor.",
    },
    {
      testimonial:
        "Treinos bem intensos e pesados, adaptado de acordo com a necessidade e objetivo de cada aluno. Sem falar no excelente profissional, super atencioso, incentivador e acima de tudo, uma grande inspiração pra nós alunos!",
    },
    {
      testimonial:
        "Acho que nunca suei tanto na minha vida durante o treino, sai com as pernas bambas e bumbum redondinho, foi ótimo. Se continuar nesse ritmo, acho que o resultado vem rápido hahaha.",
    },
    {
      testimonial:
        "Eii, quero lhe agradecer viu, por sempre estar me incentivando, mantendo firme nos treinos dolorosos da vida, os melhores treinos, a melhor consultoria, sem igual. Tamo junto meu querido.",
    },
  ];

  /* CONFIGURAÇÃO DO SLIDE DOS DEPOIMENTOS */
  const setting = {
    arrow: false,
    swipeToSlide: true,
    touchMove: true,
    centerMode: true,
    centerPadding: "20px",
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    Infinity: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="feedback"
      className="min-h-screen flex justify-center pt-[10%]"
    >
      {/*  Div que engloba FEEDBACK */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
        <motion.h2
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style text-center"
        >
          Feedback
        </motion.h2>
        <motion.p
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="gradient-text font-bold text-sm md:text-xl text-center max-w-[80%] mb-8 lg:mb-18"
        >
          O que estão falando sobre os treinos específicos e personalizados.
        </motion.p>

        {/* SLIDER DE DEPOIMENTOS */}
        <Slider {...setting} className="flex text-center w-full">
          {testimonials.map((item, index) => (
            /* CONTAINER QUE REPLICA OS DEPOIMENTOS */
            <div
              key={index}
              className="flex justify-center items-center gap-6 max-mobFD:min-h-[420px] ] text-sm sm:text-[16px] sm:min-h-[300px] max-w-[500px] p-5 bg-navBlack/75 hover:shadow-lg
               hover:shadow-mainTheme hover:-translate-y-1 
               rounded transition-all duration-500"
            >
              <i className="bx bxs-user-pin text-5xl text-mainTheme animate-balanco"></i>
              <p className="">{item.testimonial}</p>
            </div>
          ))}
        </Slider>

        {/* DIV DO TIME TF */}
        <div className="flex flex-col justify-center max-w-6xl mt-18">
          <motion.h1
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="gradient-text font-bold text-2xl lg:text-3xl text-center"
          >
            Time TF
          </motion.h1>
          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-sm lg:text-[16px] sm:font-semibold text-white/80 text-center my-8 lg:mb-18 px-5"
          >
            Vem com a gente fazer parte desse time incrivel, trocar experiências
            com nossos encontros presenciais, faça novos amigos, vem fazer parte
            da familia Talles Furtado
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
