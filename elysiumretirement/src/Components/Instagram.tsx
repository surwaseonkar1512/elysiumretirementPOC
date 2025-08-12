import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ImageSlider: React.FC = () => {
  const images = [
    "https://scontent-den2-1.cdninstagram.com/v/t39.30808-6/525491882_122216191694114207_6420572698926933792_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=UfmficaDGxUQ7kNvwGgKmRx&_nc_oc=AdnQBPj2S2mWan3-VveHWs7GxIuJjzRNWlsWicdtr92H_tmdR_ptgO-Aak6l8r6yL1Y&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Gut3MWcteWBgbltNZ-8ZBg&oh=00_AfUkggMr6x--CMmecuQDlfTwLzOhPy_c_w9y9M_g7OMFaA&oe=68A15BB3",
    "https://scontent-den2-1.cdninstagram.com/v/t39.30808-6/525645711_122216191412114207_1037778776361263415_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=q81bqiIOU7YQ7kNvwFbuTUR&_nc_oc=Adkafj0zxl06OJchlKVV9VUe3O2wVjBNBgPsAgeRhOxpAagKyz4CxZGmZtb-Ytl9uj0&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Gut3MWcteWBgbltNZ-8ZBg&oh=00_AfU6EcFS-zmTwLWoNm1vUP6uIUlRdc1Hnh9q-Ka9VVHUUg&oe=68A16CF7",
    "https://scontent-den2-1.cdninstagram.com/v/t39.30808-6/514068000_122212291460114207_6698369615010084172_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=UJ5_qZI2w6QQ7kNvwFdRguh&_nc_oc=AdnNp8IoQKXg0nkvrpou6lb5g1G6TJgjeT70GthOLbZmWMQt41ZxfphzNIAMVQkckJQ&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Gut3MWcteWBgbltNZ-8ZBg&oh=00_AfXUPDFekDwaX927bvOCXlbEUAVowgIW-QCjaoXFWTR4mg&oe=68A14AA8",
    "https://scontent-den2-1.cdninstagram.com/v/t39.30808-6/525891141_122216192894114207_8398562860618990690_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=1n4bTAHbL1cQ7kNvwFxSt8d&_nc_oc=Admq902aaKPUJom67Nsiq-5RacNei3IwtU1tXKOfEgoHu5G3ulrPJlzoeBtfsGAnyjQ&_nc_zt=23&_nc_ht=scontent-den2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Gut3MWcteWBgbltNZ-8ZBg&oh=00_AfUgm-dR6TSkAgag5GjLNPBCDYZhx6XrTAjZ1x8Q7IHp_Q&oe=68A1626E",
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          640: {
            slidesPerView: 2, // Tablet
          },
          1024: {
            slidesPerView: 3, // Desktop
          },
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
