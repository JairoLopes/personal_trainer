const Footer = () => {
  return (
    <section id="footer" className="bg-navBlack p-8">
      {/* Container da logo isolada */}
      <div className="flex justify-center items-center">
        <img src="/img/Logo/A4.png" alt="" className="w-14" />
      </div>

      {/* Containter dos links do instagram */}
      <div className="flex flex-col justify-center items-center mt-8 gap-2">
        <span className="text-center text-secondaryTheme font-semibold">
          Siga-me no instagram
        </span>
        <div className="flex flex-col items-start gap-3">
          <a
            href="https://www.instagram.com/talles.furtado/"
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            <i className="bx bxl-instagram-alt text-5xl gradient-text"></i>
            Talles Personal
          </a>

          <a
            href="https://www.instagram.com/nutricionistajulialopes/"
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            <i className="bx bxl-instagram-alt text-5xl gradient-text"></i>
            Júlia Nutri
          </a>
        </div>
      </div>

      {/* Container da imagem da loja */}
      <div className="flex flex-col justify-center items-center gap-3 mt-8">
        <span className="text-center font-semibold">Siga nossa loja</span>
        <a href="https://www.instagram.com/tfsuplementos_/" target="_blank">
          <img
            src="/img/Logo/TF_Suplementos.png"
            alt=""
            className="w-[120px]"
          />
        </a>
      </div>

      {/* Container do desenvolvedor */}
      <div className="mt-10 border-t-1 border-white/50 pt-7">
        <a
          href="https://jairolopes-dev.vercel.app/"
          target="_blank"
          className="text-nowrap"
        >
          ©Desenvolvido por{" "}
          <span className="gradient-text font-semibold animate-pulse">
            Jairo Lopes
          </span>
          .
        </a>
      </div>
    </section>
  );
};

export default Footer;
