import Image from 'next/image'
import { urlFor } from '@/lib/client'

export default function index({title, image, description}) {
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
          </div>
        </div>
      </div>
  )
}