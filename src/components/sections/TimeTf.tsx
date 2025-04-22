import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideRight } from "../../animations";

const TimeTf = () => {
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

  const images = [
    { path: "/img/time_TF/tf1.jpeg" },
    { path: "/img/time_TF/tf2.jpeg" },
    { path: "/img/time_TF/tf3.jpeg" },
    { path: "/img/time_TF/tf4.jpeg" },
    { path: "/img/time_TF/tf5.jpeg" },
    { path: "/img/time_TF/tf6.jpeg" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 min-mobTF:max-smallHome:-mt-20">
      {/* Container de slides do Time TF */}
      <motion.div
        initial={slideRight.initial}
        whileInView={slideRight.animate}
        transition={{ duration: 0.8 }}
        className="px-1 md:px-10"
      >
        <Slider {...setting} className="flex text-center">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-0">
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
    </section>
  );
};

export default TimeTf;
