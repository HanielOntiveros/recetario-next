import Link from "next/link";

export default function index() {
  return (
    <div className="flex justify-between px-4 py-4 bg-neutral-800">
      <div>
        <Link href="/">
          <h1 className="text-white ">Logo</h1>
        </Link>
      </div>
      <div className="flex">
        <Link href="/contact">
          <h1 className="pr-4 text-white">Contact</h1>
        </Link>
        <Link href="/blog">
          <h1 className="pr-4 text-white">Blog</h1>
        </Link>
        <Link href="/recipe">
          <h1 className="pr-4 text-white">Recetas</h1>
        </Link>
        <Link href="/test">
          <h1 className="pr-4 text-white"> Test</h1>
        </Link>
      </div>
    </div>
  );
}
