import Image from "next/image";
import { urlFor } from "@/lib/client";
import Link from "next/link";

export default function index({
  title,
  image,
  description,
  slug,
  preparationtime,
}) {
  return (
    <div className="duration-300 hover:scale-105">
      <div className="max-w-sm border border-gray-200 rounded-lg shadow-md">
        <Image
          src={urlFor(image).url()}
          alt="Prueba"
          width="400"
          height="100"
          className="rounded-t-lg"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-white">{description}</p>
          <div className="py-4">
            <p className="text-white">{preparationtime} Min</p>
          </div>
          <Link href={`/recipe/${encodeURIComponent(slug.current)}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
