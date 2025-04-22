import { motion } from "framer-motion";
import {
  slideUpFadeIn,
  slideDownFadeIn,
  slideLeft,
  slideRight,
} from "../../animations";

const Home = () => {
  return (
    /* FALTA POR O BACKGROUND  E A FRASE ANDANDO PELA SESSÃO*/
    <section
      id="home"
      className="lg:bg-[linear-gradient(to_right,rgb(13,12,12,0.9),rgb(13,12,12,0.97)),url('/img/Img_About/gym.jpg')] bg-no-repeat bg-fixed bg-cover
       min-h-screen flex justify-center items-center relative pb-20 max-sm:pt-[35%] sm:pt-[25%] md:pt-[20%] lg:pt-[10%]"
    >
      {/* Div que engloba todo o HOME */}
      <div className="flex flex-col items-center justify-center max-w-5xl gap-14 lg:px-7 lg:flex-row">
        {/* Container que engloba o lado esquero da pagina, titulos, botoões e etc */}
        <div className="flex flex-col justify-center lg:items-start space-y-3 text-center px-6">
          {/* Titulo nome */}
          <motion.h1
            initial={slideDownFadeIn.initial}
            whileInView={slideDownFadeIn.animate}
            transition={{ duration: 1 }}
            className="gradient-text2 text-nowrap text-4xl sm:text-6xl lg:text-7xl font-bold transition-all duration-500"
          >
            Talles Furtado
          </motion.h1>

          {/* Subtitulo profissao */}
          <motion.h2
            initial={slideDownFadeIn.initial}
            whileInView={slideDownFadeIn.animate}
            transition={{ duration: 1 }}
            className="gradient-text font-bold text-2xl md:text-3xl lg:text-5xl"
          >
            Personal Trainer
          </motion.h2>

          <motion.p
            initial={slideUpFadeIn.initial}
            whileInView={slideUpFadeIn.animate}
            transition={{ duration: 0.8 }}
            className="text-sm px-3 sm:text-[18px] mt-2 max-w-[600px] lg:w-full lg:text-start"
          >
            <strong> Bacharel em Ed.Física </strong>, Atleta e Praticante de
            musculação há mais de <strong>7 anos</strong>. Transformando a vida
            das pessoas.
          </motion.p>

          {/* Div que engloba os links pra Planos e Whatsapp */}
          <div className="flex justify-center space-x-4 mt-6">
            {/* Link para ir pros PLANOS */}
            <motion.a
              initial={slideRight.initial}
              whileInView={slideRight.animate}
              transition={{ duration: 0.8 }}
              href="#planos"
              className="flex justify-center items-center text-sm sm:text-lg btn-submit font-bold text-myWhite"
            >
              Planos
            </motion.a>

            {/* Link para ir pro WHATSAPP */}
            <motion.a
              initial={slideLeft.initial}
              whileInView={slideLeft.animate}
              transition={{ duration: 0.8 }}
              id="whats"
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              className="flex justify-center items-center gap-2 text-sm sm:text-lg btn-submit font-bold text-myWhite"
            >
              <i className="bx bxl-whatsapp text-4xl"></i>
              Whatsapp
            </motion.a>
          </div>
        </div>

        {/* Container que engloba o lado direito, imagem de perfil */}
        <div className="">
          <motion.img
            initial={slideDownFadeIn.initial}
            whileInView={slideDownFadeIn.animate}
            transition={{ duration: 1.5 }}
            src="/img/Img_Hero/profile2.png"
            alt=""
            className="p-1 w-[250px] lg:w-[400px] rounded-b-full shadow-2xl shadow-mainTheme"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
