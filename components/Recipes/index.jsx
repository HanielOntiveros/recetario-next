import Image from "next/image";
import { urlFor } from "@/lib/client";
import Link from "next/link";

export default function index({ title, image, description, slug, time }) {
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
          <ul className="list-disc">
            <li>{time}</li>
          </ul>
          <Link href={`/recipe/${encodeURIComponent(slug.current)}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
