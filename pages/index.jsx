import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";

export default function Index({ recipes }) {
  const swiperRef = useRef();
  return (
    <>
      <div className="h-screen py-12 bg-neutral-800">
        <div>
          <div className="flex items-center justify-center h-full py-12">
            <div className="w-full px-2 md:w-2/3">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                <SwiperSlide>
                  <CldImage
                    src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674213762/recetario-next/receta-4_vjz3za.jpg"
                    width="1920"
                    height="600"
                    alt="Alt prueba"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CldImage
                    src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674213762/recetario-next/receta-3_jguwdi.jpg"
                    width="1920"
                    height="600"
                    alt="Alt prueba"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CldImage
                    src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674213715/recetario-next/receta-2_fks2cn.jpg"
                    width="1920"
                    height="600"
                    alt="Alt prueba"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CldImage
                    src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674213647/recetario-next/receta-1_bsmis5.jpg"
                    width="1920"
                    height="600"
                    alt="Alt prueba"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="flex justify-between py-2">
                <button onClick={() => swiperRef.current?.slidePrev()}>
                  <Image
                    src="/nav-arrow-left.svg"
                    width={24}
                    height={12}
                    alt=""
                  />
                </button>
                <button onClick={() => swiperRef.current?.slideNext()}>
                  <Image
                    src="/nav-arrow-right.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-24 bg-neutral-800">
        <div className="grid grid-cols-3 gap-8 px-6">
          <div>
            <Image
              src={urlFor(recipes[0].image).url()}
              alt="Prueba"
              width="400"
              height="100"
              className=""
            />
            <h1 className="py-2 text-2xl font-bold text-white">
              {recipes[0].title}
            </h1>
            <div className="flex items-center py-2">
              <Image src="/clock.svg" width={20} height={12} alt="" />

              <h1 className="px-2 font-bold text-white text-sml">
                {recipes[0].cookingtime} Min
              </h1>
              <Image src="/star.svg" width={20} height={12} alt="" />
              <h1 className="pl-2 font-bold text-white text-sml">4.6</h1>
            </div>
          </div>
          <div>
            <Image
              src={urlFor(recipes[1].image).url()}
              alt="Prueba"
              width="400"
              height="100"
              className=""
            />
            <h1 className="py-2 text-2xl font-bold text-white">
              {recipes[1].title}
            </h1>
            <div className="flex items-center py-2">
              <Image src="/clock.svg" width={20} height={12} alt="" />

              <h1 className="px-2 font-bold text-white text-sml">
                {recipes[1].cookingtime} Min
              </h1>
              <Image src="/star.svg" width={20} height={12} alt="" />
              <h1 className="pl-2 font-bold text-white text-sml">4.6</h1>
            </div>
          </div>
          <div>
            <Image
              src={urlFor(recipes[2].image).url()}
              alt="Prueba"
              width="400"
              height="100"
              className=""
            />
            <h1 className="py-2 text-2xl font-bold text-white">
              {recipes[2].title}
            </h1>
            <div className="flex items-center py-2">
              <Image src="/clock.svg" width={20} height={12} alt="" />

              <h1 className="px-2 font-bold text-white text-sml">
                {recipes[2].cookingtime} Min
              </h1>
              <Image src="/star.svg" width={20} height={12} alt="" />
              <h1 className="pl-2 font-bold text-white text-sml">4.6</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const recipes = await client.fetch(`*[_type == "recipe"]`);
  console.log(recipes[0]);

  return {
    props: {
      recipes,
    },
  };
}
