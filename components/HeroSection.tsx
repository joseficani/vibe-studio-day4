export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="container mx-auto flex min-h-[calc(100vh-120px)] items-center px-8 pb-16 pt-20 md:px-12 xl:px-16">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[var(--circle)] lg:h-[560px] lg:w-[560px]" />

        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <h1 className="text-[36px] font-light leading-tight text-[var(--soft-white)] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[78px]">
            here’s a small preview
            <br />
            glimpse of our work.
            <br />
            what’s coming next is
          </h1>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span className="h-1 w-[60px] rounded-full bg-[var(--line)]"></span>
            <span className="h-1 w-[30px] rounded-full bg-[var(--accent)]"></span>

            <h2 className="text-[34px] font-bold text-white sm:text-[46px] md:text-[56px] lg:text-[64px] xl:text-[70px]">
              <span className="text-[var(--accent)]">even</span>{" "}
              <span className="text-white">better</span>
            </h2>

            <span className="h-1 w-[30px] rounded-full bg-[var(--accent)]"></span>
            <span className="h-1 w-[60px] rounded-full bg-[var(--line)]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}