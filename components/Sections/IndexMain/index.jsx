import Image from "next/image";
import { CldImage } from 'next-cloudinary';

export default function index() {
  return (
    <>
      <div className="relative flex justify-center py-12 bg-neutral-800">
        <div className="">
          <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={800} height={400} alt="" />
        </div>
        <div className="absolute right-0 w-1/2 bg-blue-200 -bottom-8 h-44">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            itaque soluta laboriosam quis necessitatibus voluptas!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 px-12 py-20 bg-neutral-800">
        <div className="grid justify-center ">
          <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={400} height={0} alt="" />
          <h1 className="text-xl font-bold text-white">Lorem, ipsum.</h1>
          <p className="pt-2 text-2xl leading-tight text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="grid justify-center">
        <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={400} height={0} alt="" />
          <div>
            <h1 className="text-xl font-bold text-white">Lorem, ipsum.</h1>
            <p className="pt-2 text-2xl leading-tight text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="grid justify-center">
          <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={400} height={0} alt="" />
          <h1 className="text-xl font-bold text-white">Lorem, ipsum.</h1>
          <p className="pt-2 text-2xl leading-tight text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 bg-neutral-800">
        <div className="grid justify-center">
          <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={600} height={0} alt="" />
          <div className="flex items-center px-2 py-2">
            <Image src="/clock.svg" width={20} height={12} alt="" />

            <h1 className="px-2 font-bold text-white text-sml">10 min</h1>
            <Image src="/star.svg" width={20} height={12} alt="" />
            <h1 className="pl-2 font-bold text-white text-sml">4.6</h1>
          </div>
          <h1 className="text-2xl font-bold text-white">Titulo de la receta</h1>
        </div>
        <div className="grid justify-center">
          <CldImage src="https://res.cloudinary.com/dy4p1m5wv/image/upload/v1674062392/recetario-next/recipe-1_zwpzxc.webp" width={600} height={0} alt="" />
          <div className="flex items-center px-2 py-2">
            <Image src="/clock.svg" width={20} height={12} alt="" />

            <h1 className="px-2 font-bold text-white text-sml">10 min</h1>
            <Image src="/star.svg" width={20} height={12} alt="" />
            <h1 className="pl-2 font-bold text-white text-sml">4.6</h1>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Titulo de la receta.
          </h1>
        </div>
      </div>
    </>
  );
}

