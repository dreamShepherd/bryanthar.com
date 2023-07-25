import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GithubIcon } from 'lucide-react';

const links = [
  { name: "projects", href: "/about/projects" },
  { name: "resume", href: "/about/resume" },
  { name: "arts", href: "/about/arts" }
];

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);
  const router = useRouter();
  const linkjs = links.map((link, index) =>
    <Link
      href={link.href}
      key={index}
      className={`hover:text-blue-300 transition-colors ${router.pathname === link.href ? "text-black" : ""}`}
    >
      {link.name}</ Link>);

  useEffect(() => {
    const link = links.find(({ href }) => href === router.pathname);
    if (link) {
      setPageTitle(link.name.charAt(0).toUpperCase() + link.name.slice(1));
    } else {
      setPageTitle(null);
    }
  }, [router.pathname]);

  return (
    <div>
      <header
        className=" layout flex justify-between items-start text-neutral-400"
      >
        <h1 className="font-bold text-black text-2xl mb-6">
          <Link href="/about">Bryant Har </Link>
          {pageTitle ?
            (<span className='page-title' >
              <span className="text-neutral-400">—</span> {pageTitle}
            </span>) : null
          }
        </h1>
        <div className="flex items-start justify-end space-x-6 text-lg">
          {linkjs}
        </div>
      </header >

      <a href='https://github.com/dreamShepherd'><GithubIcon /></a>
      <a href='https://lichess.org/@/DreamShepherd'><img src='./static/lichess.png'></img> </a>
    </div>
  );
}
