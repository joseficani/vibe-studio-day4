import Logo from "./Logo";

const links = [
  { label: "about us", href: "#about" },
  { label: "our work", href: "#work" },
  { label: "our clients", href: "#clients" },
  { label: "our team", href: "#team" },
  { label: "contact us", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-[1600px] flex justify-between items-start px-8 pt-8 md:px-12 xl:px-16">

        <Logo />

        <div className="hidden lg:flex items-center gap-10 pt-6">

          <nav className="flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-[20px] font-semibold lowercase text-gray-400 hover:text-white transition"
              >
                {link.label}

                <span className="absolute left-1/2 -translate-x-1/2 top-[38px] h-[4px] w-0 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-[42px]" />
              </a>
            ))}
          </nav>

          <div className="flex items-center border border-white rounded-full p-[3px]">
            <button className="w-8 h-8 flex items-center justify-center bg-black text-white text-[13px] font-semibold rounded-full">
              FR
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white text-black text-[13px] font-semibold rounded-full">
              EN
            </button>
          </div>

        </div>

        <button className="flex flex-col gap-[5px] mt-5 lg:hidden">
          <span className="w-7 h-[2px] bg-white"></span>
          <span className="w-7 h-[2px] bg-white"></span>
          <span className="w-7 h-[2px] bg-white"></span>
        </button>

      </div>
    </header>
  );
}