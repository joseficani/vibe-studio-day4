import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/images/image-1.jpg",
    title: "Creative Brand Campaign",
    description: "A campaign made to catch attention and connect with people.",
  },
  {
    id: 2,
    image: "/images/image-2.jpg",
    title: "Modern Retail Display",
    description: "A clean display designed to highlight products clearly.",
  },
  {
    id: 3,
    image: "/images/image-3.jpg",
    title: "Fitness Product Promotion",
    description: "A dynamic setup presenting sports and fitness products.",
  },
  {
    id: 4,
    image: "/images/image-4.jpg",
    title: "Eco Friendly Product Launch",
    description: "A natural concept built around sustainability.",
  },
  {
    id: 5,
    image: "/images/image-5.jpg",
    title: "Interactive Brand Experience",
    description: "An installation where visitors interact with the brand.",
  },
  {
    id: 6,
    image: "/images/image-6.jpg",
    title: "Luxury Product Presentation",
    description: "A premium display focused on elegance and quality.",
  },
  {
    id: 7,
    image: "/images/image-7.jpg",
    title: "Digital Product Launch",
    description: "A product reveal using digital visuals and lighting.",
  },
  {
    id: 8,
    image: "/images/image-8.jpg",
    title: "Sustainable Brand Activation",
    description: "A campaign promoting eco-friendly ideas and products.",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-12 xl:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.id}>
                <div className="relative h-[260px] w-full overflow-hidden bg-neutral-900 sm:h-[320px] md:h-[360px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-[22px] font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-[15px] text-white/80">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1 w-[40px] rounded-full bg-cyan-400"></span>
              <span className="h-1 w-[25px] rounded-full bg-red-400"></span>
              <span className="h-1 w-[80px] rounded-full bg-cyan-400"></span>
            </div>

            <p className="text-[26px] leading-relaxed text-white">
              <span className="font-semibold text-red-400">we’d love</span> to see your project
              <br />
              added here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}