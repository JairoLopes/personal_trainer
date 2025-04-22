import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideUpFadeIn } from "../../animations";
import { slideLeft } from "../../animations";
import { slideRight } from "../../animations";

function Resultados() {
  const images = [
    { path: "/img/img_Resultado_Alunos/tai.jpeg" },
    { path: "/img/img_Resultado_Alunos/barbara.jpeg" },
    { path: "/img/img_Resultado_Alunos/julio.png" },
    { path: "/img/img_Resultado_Alunos/felipe.png" },
    { path: "/img/img_Resultado_Alunos/dias.jpeg" },
    { path: "/img/img_Resultado_Alunos/pep.png" },
    { path: "/img/img_Resultado_Alunos/Rhuana.jpeg" },
    { path: "/img/img_Resultado_Alunos/iris.png" },
  ];

  const meuResultados = [
    { path: "/img/profile/t3.jpeg" },
    { path: "/img/profile/t2.jpeg" },
    { path: "/img/profile/t1.jpeg" },
  ];
  const setting = {
    dots: true,
    vertical: false,
    arrow: false,
    infinite: true,
    centerMode: true,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          speed: 4000,
          autoplaySpeed: 0,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          speed: 4000,
          autoplaySpeed: 0,
          slidesToShow: 2,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1399,
        settings: {
          speed: 4000,
          autoplaySpeed: 0,
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          speed: 600,
          autoplaySpeed: 2500,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const setting2 = {
    dots: true,
    vertical: false,
    arrow: false,
    infinite: false,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          autoplay: true,
          speed: 600,
          autoplaySpeed: 2500,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section id="resultados" className="section-style">
      {/* Container principal responsivo */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.h1
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="h2-style text-center"
        >
          Resultados
        </motion.h1>

        {/* Container dos títulos "VEM PRO TIME" */}
        <motion.div
          initial={slideUpFadeIn.initial}
          whileInView={slideUpFadeIn.animate}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8 border p-4 border-gray-600/20 shadow-2xl shadow-gray-950 rounded-2xl mt-8"
        >
          <h1 className="gradient-text font-bold text-2xl lg:text-3xl text-center">
            Vem pro time!
          </h1>
          <p className="text-center">
            Seguindo minha metodologia, somada a sua disciplina e constância,
            seremos capazes de obter resultados significativos em um tempo que
            nem você esperaria.
          </p>
        </motion.div>

        {/* Container de slides ALUNOS*/}
        <motion.div
          initial={slideLeft.initial}
          whileInView={slideLeft.animate}
          transition={{ duration: 0.8 }}
          className="mt-9 px-2 md:px-10"
        >
          <Slider {...setting} className="flex text-center">
            {images.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-8">
                <div className="flex justify-center">
                  <img
                    src={item.path}
                    alt=""
                    className="w-full mobFD2:w-[300px] h-[250px] border rounded object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Container dos MEUS RESULTADOS */}
        <div className="mt-9 px-2 md:px-10">
          {/* Container Títulos */}
          <div>
            <motion.h2
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="gradient-text font-bold text-2xl lg:text-3xl text-center"
            >
              Meus Resultados
            </motion.h2>
            <motion.p
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="mt-8 text-center"
            >
              Eu confio na minha metodologia e sei que ela é capaz de
              transformar vidas.
            </motion.p>
            <motion.p
              initial={slideUpFadeIn.initial}
              whileInView={slideUpFadeIn.animate}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              Por isso, aplico o protocolo personalizado em mim mesmo.
            </motion.p>
          </div>

          {/* Container de slides MEUS RESULTADOS */}
          <div>
            <Slider {...setting2} className="flex text-center">
              {meuResultados.map((item, index) => (
                <motion.div
                  key={index}
                  initial={slideRight.initial}
                  whileInView={slideRight.animate}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-4 p-8"
                >
                  <div className="flex justify-center">
                    <img
                      src={item.path}
                      alt=""
                      className="w-full mobFD2:w-[300px] h-[250px] border rounded object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resultados;
