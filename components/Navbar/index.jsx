import Link from 'next/link'

export default function index() {
  return (
    <div className="flex justify-between px-4 py-4">
      <div><Link href="/">Logo</Link></div>
      <div className='flex'>
        <Link href="/contact"><h1 className='pr-4'>Contact</h1></Link>
        <Link href="/blog"><h1 className='pr-4'>Blog</h1></Link>
        <Link href="/recipe"><h1 className='pr-4'>Recetas</h1></Link>
      </div>
      
    </div>
  );
}
