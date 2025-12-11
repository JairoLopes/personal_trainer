import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import {
  Star,
  Quote,
  Users,
  ThumbsUp,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Interface para as props das setas do slider
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const FeedBack = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Mano, o treino desse mês ta insano! Fiz o treino de costas ontem e hoje o de peito, só nesses primeiros já deeu pra sentir a intensidade bem maior e as mudanças no meu corpo também, esse ta sendo o melhor desse ano! Simbora pra cima.",
      rating: 5,
      author: "Aluno TF",
      result: "Intensidade aumentada",
    },
    {
      text: "Talles, quero te dizer que eu estou amando meus treinos, e estou dando meu melhor, não ta sendo fácil pra mim, mas com sua ajuda nos treinos eu sei que vou conseguir, e olhe que eu ja perdi 3 quilos em 2 semanas. Obrigado por me ajudar, você é o melhor.",
      rating: 5,
      author: "Aluno TF",
      result: "3kg em 2 semanas",
    },
    {
      text: "Treinos bem intensos e pesados, adaptado de acordo com a necessidade e objetivo de cada aluno. Sem falar no excelente profissional, super atencioso, incentivador e acima de tudo, uma grande inspiração pra nós alunos!",
      rating: 5,
      author: "Aluno TF",
      result: "Treino personalizado",
    },
    {
      text: "Acho que nunca suei tanto na minha vida durante o treino, sai com as pernas bambas e bumbum redondinho, foi ótimo. Se continuar nesse ritmo, acho que o resultado vem rápido hahaha.",
      rating: 5,
      author: "Aluna TF",
      result: "Resultados visíveis",
    },
    {
      text: "Eii, quero lhe agradecer viu, por sempre estar me incentivando, mantendo firme nos treinos dolorosos da vida, os melhores treinos, a melhor consultoria, sem igual. Tamo junto meu querido.",
      rating: 5,
      author: "Aluno TF",
      result: "Acompanhamento constante",
    },
  ];

  // Estatísticas de feedback
  const stats = [
    { value: "100%", label: "Satisfação" },
    { value: "5.0", label: "Avaliação Média" },
    { value: "24/7", label: "Suporte" },
  ];

  // Função para renderizar setas personalizadas
  const PrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} !w-10 !h-10 md:!w-12 md:!h-12 rounded-full bg-navBlack/80 backdrop-blur-sm border border-white/20 flex items-center justify-center !-left-3 md:!-left-8 lg:!-left-16 hover:bg-navBlack hover:border-mainTheme transition-all duration-300 z-10`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
      </button>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} !w-10 !h-10 md:!w-12 md:!h-12 rounded-full bg-navBlack/80 backdrop-blur-sm border border-white/20 flex items-center justify-center !-right-3 md:!-right-8 lg:!-right-16 hover:bg-navBlack hover:border-mainTheme transition-all duration-300 z-10`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
      </button>
    );
  };

  // Configurações otimizadas do slider com responsividade completa
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
          arrows: false,
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false,
        },
      },
    ],
  };

  // Adicionar estilos CSS dinamicamente
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .feedback-slider .slick-dots {
        bottom: -50px;
      }
      
      .feedback-slider .slick-dots li button:before {
        color: rgba(255, 255, 255, 0.3);
        font-size: 10px;
      }
      
      .feedback-slider .slick-dots li.slick-active button:before {
        color: #1e90ff;
      }
      
      .feedback-slider .slick-slide {
        padding: 10px;
      }
      
      @media (max-width: 768px) {
        .feedback-slider .slick-slide {
          padding: 8px;
        }
      }
      
      @media (max-width: 480px) {
        .feedback-slider .slick-slide {
          padding: 5px;
        }
      }
      
      /* Garantir que o slider não ultrapasse a largura da tela */
      .feedback-slider {
        max-width: 100%;
        overflow: hidden;
      }
      
      .feedback-slider .slick-list {
        overflow: visible;
      }
      
      @media (max-width: 768px) {
        .feedback-slider .slick-list {
          overflow: hidden;
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Função para renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 md:w-4 md:h-4 ${
          index < rating
            ? "text-secondaryTheme fill-secondaryTheme"
            : "text-white/30"
        }`}
      />
    ));
  };

  return (
    <section
      id="feedback"
      className="section-style bg-gradient-to-b from-navBlack to-deepBlue overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-4 md:mb-6"
          >
            <ThumbsUp className="w-4 h-4 md:w-5 md:h-5 text-mainTheme" />
            <span className="text-xs md:text-sm font-medium text-white/80 tracking-wider">
              DEPOIMENTOS REAIS
            </span>
          </motion.div>

          <motion.h2
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6"
          >
            Feedback dos Alunos
          </motion.h2>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12"
          >
            Veja o que nossos alunos têm a dizer sobre a experiência de
            transformação com a metodologia personalizada do Time TF.
          </motion.p>

          {/* Estatísticas - Ajustadas para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-navBlack/50 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 border border-white/10"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slider de Depoimentos */}
        <div className="relative mb-16 md:mb-20 px-2 sm:px-4">
          {/* Indicador de slide atual - Ajustado para mobile */}
          <div className="absolute -top-8 md:-top-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span>
                Slide {currentSlide + 1} de {testimonials.length}
              </span>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <Slider {...settings} className="feedback-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <div className="h-full bg-gradient-to-b from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-mainTheme/30 transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:shadow-mainTheme/10">
                      {/* Cabeçalho do depoimento - Ajustado para mobile */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6 gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-mainTheme/20 to-mainTheme/10 border border-mainTheme/30 flex items-center justify-center flex-shrink-0">
                            <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-mainTheme" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
                              {testimonial.author}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>

                        {/* Badge de resultado - Ajustado para mobile */}
                        <div className="self-start sm:self-center bg-gradient-to-r from-secondaryTheme/20 to-yellow-500/20 border border-secondaryTheme/30 rounded-full px-2 py-1 sm:px-3 sm:py-1">
                          <span className="text-secondaryTheme text-xs sm:text-sm font-medium truncate">
                            {testimonial.result}
                          </span>
                        </div>
                      </div>

                      {/* Texto do depoimento - Ajustado para mobile */}
                      <div className="relative">
                        <div className="absolute -top-3 -left-3 text-4xl sm:text-5xl md:text-6xl text-mainTheme/20">
                          "
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm sm:text-base md:text-lg relative z-10 line-clamp-6">
                          {testimonial.text}
                        </p>
                        <div className="absolute -bottom-3 -right-3 text-4xl sm:text-5xl md:text-6xl text-mainTheme/20 rotate-180">
                          "
                        </div>
                      </div>

                      {/* Rodapé do depoimento - Ajustado para mobile */}
                      <div className="mt-6 pt-4 md:pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="truncate">Time TF Member</span>
                          </div>
                          <div className="text-white/40 text-xs sm:text-sm">
                            ⭐⭐⭐⭐⭐
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Seção Time TF - Ajustada para mobile */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 p-6 md:p-8 lg:p-12 mb-12 md:mb-16"
        >
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-mainTheme/5 rounded-full -translate-y-16 translate-x-16 md:-translate-y-32 md:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-secondaryTheme/5 rounded-full translate-y-16 -translate-x-16 md:translate-y-32 md:-translate-x-32"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Award className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-secondaryTheme" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Time TF - Família em Evolução
              </h3>
              <Award className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-mainTheme" />
            </div>

            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Vem com a gente fazer parte desse time incrível! Troque
              experiências em nossos encontros presenciais, faça novos amigos e
              junte-se à família Talles Furtado. Aqui, cada vitória é comemorada
              juntos e cada desafio é superado em equipe.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl transition-all duration-300"
              >
                <i className="bx bxl-whatsapp text-lg md:text-xl lg:text-2xl"></i>
                <span className="text-sm sm:text-base md:text-lg">
                  Entrar para o Time
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA Final - Ajustado para mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-2"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Sua História de Transformação Começa Aqui
          </h4>
          <p className="text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Junte-se aos dezenas de alunos que já transformaram suas vidas e
            compartilhe sua própria jornada de sucesso conosco.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="hidden md:block w-16 lg:w-20 h-0.5 bg-gradient-to-r from-transparent to-mainTheme"></div>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-mainTheme to-blue-600 hover:from-blue-500 hover:to-mainTheme text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg md:rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Star className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm sm:text-base md:text-lg">
                Começar Minha Jornada
              </span>
            </a>
            <div className="hidden md:block w-16 lg:w-20 h-0.5 bg-gradient-to-r from-mainTheme to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedBack;
