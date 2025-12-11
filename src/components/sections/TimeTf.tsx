import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideRight, slideUpFadeIn } from "../../animations";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Interface para as props das setas do slider
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TimeTf = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeMembers = [
    {
      path: "/img/time_TF/tf1.jpeg",
      name: "Membro TF",
      role: "Ativo há 8 meses",
    },
    {
      path: "/img/time_TF/tf2.jpeg",
      name: "Membro TF",
      role: "Transformação em andamento",
    },
    {
      path: "/img/time_TF/tf3.jpeg",
      name: "Membro TF",
      role: "Foco total nos objetivos",
    },
    {
      path: "/img/time_TF/tf4.jpeg",
      name: "Membro TF",
      role: "Disciplina e evolução",
    },
    {
      path: "/img/time_TF/tf5.jpeg",
      name: "Membro TF",
      role: "Resultados consistentes",
    },
    {
      path: "/img/time_TF/tf6.jpeg",
      name: "Membro TF",
      role: "Dedicação máxima",
    },
  ];

  // Função para renderizar setas personalizadas
  const PrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} !w-10 !h-10 rounded-full bg-navBlack/80 backdrop-blur-sm border border-white/20 flex items-center justify-center !-left-12 hover:bg-navBlack hover:border-mainTheme transition-all duration-300 z-10`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} !w-10 !h-10 rounded-full bg-navBlack/80 backdrop-blur-sm border border-white/20 flex items-center justify-center !-right-12 hover:bg-navBlack hover:border-mainTheme transition-all duration-300 z-10`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    );
  };

  // Configurações otimizadas do slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  // Adicionar estilos CSS dinamicamente
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .timeteam-slider .slick-dots {
        bottom: -40px;
      }
      
      .timeteam-slider .slick-dots li button:before {
        color: rgba(255, 255, 255, 0.3);
        font-size: 10px;
      }
      
      .timeteam-slider .slick-dots li.slick-active button:before {
        color: #1e90ff;
      }
      
      .timeteam-slider .slick-slide {
        padding: 10px 15px;
      }
      
      @media (max-width: 768px) {
        .timeteam-slider .slick-slide {
          padding: 10px 0;
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-deepBlue via-navBlack to-deepBlue overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mainTheme rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondaryTheme rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-5 py-2 rounded-full mb-6"
          >
            <Heart className="w-5 h-5 text-mainTheme" />
            <span className="text-sm font-medium text-white/80 tracking-wider">
              FAMÍLIA TF
            </span>
          </motion.div>

          <motion.h2
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Nossa Comunidade
          </motion.h2>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Conheça alguns membros do Time TF que estão transformando suas vidas
            através da disciplina, dedicação e método comprovado.
          </motion.p>
        </div>

        {/* Slider de Membros */}
        <div className="relative mb-16 mt-4">
          {/* Indicador de slide atual */}
          <div className="absolute -top-8 right-4 md:right-12 z-10">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>
                {currentSlide + 1} / {timeMembers.length}
              </span>
            </div>
          </div>

          <motion.div
            initial={slideRight.initial}
            whileInView={slideRight.animate}
            transition={{ duration: 0.8 }}
          >
            <Slider {...settings} className="timeteam-slider">
              {timeMembers.map((member, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-navBlack/80 to-deepBlue/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-mainTheme/30"
                  >
                    {/* Imagem do membro */}
                    <div className="aspect-square relative overflow-hidden rounded-t-2xl">
                      <img
                        src={member.path}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlay gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                      {/* Badge de membro */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-mainTheme/90 to-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          TF Member
                        </div>
                      </div>
                    </div>

                    {/* Informações do membro */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-mainTheme transition-colors duration-300">
                          {member.name}
                        </h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-secondaryTheme fill-secondaryTheme"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-4">
                        {member.role}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <Heart className="w-3 h-3 text-mainTheme" />
                        <span>Ativo na Comunidade</span>
                      </div>
                    </div>

                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mainTheme/0 via-mainTheme/0 to-mainTheme/0 group-hover:via-mainTheme/5 group-hover:to-mainTheme/10 transition-all duration-500 pointer-events-none" />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Mensagem final */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-mainTheme/20 to-secondaryTheme/20 rounded-2xl blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeTf;
