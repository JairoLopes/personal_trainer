import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideUpFadeIn, slideLeft, slideRight } from "../../animations";
import { Star, TrendingUp, Users, Check } from "lucide-react";
import { useEffect } from "react";

// Interface para as props das setas do slider
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

function Resultados() {
  // Fotos dos alunos - removidos nomes e resultados específicos
  const alunosData = [
    { path: "/img/img_Resultado_Alunos/tai.jpeg" },
    { path: "/img/img_Resultado_Alunos/barbara.jpeg" },
    { path: "/img/img_Resultado_Alunos/julio.png" },
    { path: "/img/img_Resultado_Alunos/felipe.png" },
    { path: "/img/img_Resultado_Alunos/alunoNovo1.jpeg" },
    { path: "/img/img_Resultado_Alunos/alunoNovo2.jpeg" },
    { path: "/img/img_Resultado_Alunos/alunoNovo3.jpeg" },
    { path: "/img/img_Resultado_Alunos/alunoNovo4.jpeg" },
  ];

  const meusResultados = [
    {
      path: "/img/profile/t3.jpeg",
      titulo: "Fisiculturismo Competitivo",
      descricao: "Preparação para campeonatos",
    },
    {
      path: "/img/profile/t2.jpeg",
      titulo: "Hipertrofia Avançada",
      descricao: "Anos de dedicação",
    },
    {
      path: "/img/profile/t1.jpeg",
      titulo: "Definição Muscular",
      descricao: "Protocolo aplicado em mim",
    },
  ];

  // Configurações otimizadas do slider para alunos
  const alunosSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  // Configurações otimizadas do slider para meus resultados
  const meusResultadosSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
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

  // Função para renderizar setas personalizadas com tipagem correta
  const PrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} before:content-none !w-10 !h-10 rounded-full bg-navBlack/80 border border-white/20 backdrop-blur-sm flex items-center justify-center !-left-12 hover:bg-navBlack hover:border-mainTheme transition-all duration-300`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Slide anterior"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  const NextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} before:content-none !w-10 !h-10 rounded-full bg-navBlack/80 border border-white/20 backdrop-blur-sm flex items-center justify-center !-right-12 hover:bg-navBlack hover:border-mainTheme transition-all duration-300`}
        style={{ ...style }}
        onClick={onClick}
        aria-label="Próximo slide"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  // Adicionar estilos CSS dinamicamente
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .resultados-slider .slick-dots {
        bottom: -40px;
      }
      
      .resultados-slider .slick-dots li button:before {
        color: rgba(255, 255, 255, 0.3);
        font-size: 10px;
      }
      
      .resultados-slider .slick-dots li.slick-active button:before {
        color: #1e90ff;
      }
      
      .meus-resultados-slider .slick-dots {
        bottom: -50px;
      }
      
      .meus-resultados-slider .slick-slide {
        padding: 10px 0;
      }
      
      .meus-resultados-slider .slick-center {
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }
      
      @media (max-width: 768px) {
        .meus-resultados-slider .slick-center {
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section id="resultados" className="section-style">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Cabeçalho Principal */}
        <div className="text-center mb-12">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-secondaryTheme/15 px-4 py-1.5 rounded-full mb-4"
          >
            <TrendingUp className="w-4 h-4 text-mainTheme" />
            <span className="text-sm font-medium text-white/80">
              RESULTADOS COMPROVADOS
            </span>
          </motion.div>

          <motion.h1
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="h2-style mb-4"
          >
            Transformações Reais
          </motion.h1>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Veja os resultados alcançados pelos meus alunos e pela aplicação
            consistente da minha metodologia.
          </motion.p>
        </div>

        {/* Banner Motivacional */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-mainTheme/10 to-secondaryTheme/10 border border-white/10 rounded-2xl p-8 mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-2/3">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <Users className="w-8 h-8 text-secondaryTheme" />
                Vem pro Time TF!
              </h2>
              <p className="text-white/80 text-lg">
                Seguindo minha metodologia, somada à sua disciplina e
                constância, seremos capazes de obter resultados significativos
                em um tempo que nem você esperaria.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondaryTheme to-yellow-500 text-deepBlue font-bold px-6 py-3 rounded-xl">
                <Star className="w-5 h-5" />
                <span>Junte-se a nós</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seção: Resultados dos Alunos */}
        <div className="mb-20">
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Resultados dos Alunos
              </h2>
              <p className="text-white/60">
                Transformações reais alcançadas com dedicação e método
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-sm text-white/50">
              <span>Arraste para ver mais</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={slideLeft.initial}
            whileInView={slideLeft.animate}
            transition={{ duration: 0.8 }}
          >
            <Slider
              {...alunosSliderSettings}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
              className="resultados-slider"
            >
              {alunosData.map((aluno, index) => (
                <div key={index} className="px-3">
                  <div className="group relative overflow-hidden rounded-xl bg-navBlack/50 border border-white/10 hover:border-mainTheme/30 transition-all duration-300">
                    {/* Foto com proporção mais horizontal (4:3) */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={aluno.path}
                        alt={`Resultado Aluno ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay com gradiente sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Ícone de verificação no hover */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-mainTheme text-white p-1.5 rounded-full">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Texto simples no rodapé da imagem */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-medium text-center">
                        Transformação Real
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>

        {/* Seção: Meus Resultados */}
        <div>
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mainTheme/15 to-mainTheme/5 px-4 py-1.5 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-mainTheme" />
              <span className="text-sm font-medium text-white/80">
                METODOLOGIA COMPROVADA
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Meus Resultados
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Eu confio na minha metodologia e sei que ela é capaz de
              transformar vidas. Por isso, aplico o protocolo personalizado em
              mim mesmo.
            </p>
          </motion.div>

          <motion.div
            initial={slideRight.initial}
            whileInView={slideRight.animate}
            transition={{ duration: 0.8 }}
          >
            <Slider
              {...meusResultadosSliderSettings}
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
              className="meus-resultados-slider"
            >
              {meusResultados.map((resultado, index) => (
                <div key={index} className="px-4">
                  <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-navBlack/80 to-deepBlue/80 border border-white/10 hover:border-mainTheme/50 transition-all duration-300">
                    {/* Proporção mais quadrada para meus resultados */}
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={resultado.path}
                        alt={resultado.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {resultado.titulo}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {resultado.descricao}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-mainTheme/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Personal
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Estatísticas */}
          <motion.div
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-mainTheme mb-2">
                  +50
                </div>
                <div className="text-white/70">Alunos Transformados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondaryTheme mb-2">
                  100%
                </div>
                <div className="text-white/70">Satisfação dos Alunos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-mainTheme mb-2">2x</div>
                <div className="text-white/70">Campeão Mens Physique</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resultados;
