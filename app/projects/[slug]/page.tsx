import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch("https://hanzo.dxpshift.com/api/projects", {
    cache: "no-store",
  });

  const data = await res.json();
  const projects = data.success ? data.data : [];
  const project = projects.find(
    (item: any) => String(item.id) === slug
  );

  if (!project) {
    return (
      <section className="min-h-screen bg-black px-8 py-20 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1100px]">
            <h1 className="text-3xl font-bold">Project not found</h1>

            <Link href="/" className="mt-6 inline-block underline">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }
  const paragraph =
    project.description ||
    project.text ||
    "No description available.";

  return (
    <section className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="mb-12 inline-block text-sm text-white/70 hover:text-white"
          >
            ← Back
          </Link>
          <h1 className="mb-16 text-center text-[28px] font-light md:text-[40px]">
            {project.title}
          </h1>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="max-w-[700px]">
              <div className="mb-10 h-[4px] w-20 bg-white"></div>

              <p className="text-[20px] leading-[1.8] text-white">
                {paragraph}
              </p>
            </div>
            <div>

              <div className="border-b border-white/10 py-6">
                <p className="text-[18px] uppercase tracking-wide">
                  CLIENT:{" "}
                  <span className="normal-case">
                    {project.client || "N/A"}
                  </span>
                </p>
              </div>

              <div className="border-b border-white/10 py-6">
                <p className="text-[18px] uppercase tracking-wide">
                  DIRECTOR:{" "}
                  <span className="normal-case">
                    {project.director || project.directors || "N/A"}
                  </span>
                </p>
              </div>

              <div className="border-b border-white/10 py-6">
                <p className="text-[18px] uppercase tracking-wide">
                  DP:{" "}
                  <span className="normal-case">
                    {project.cinematographer || "N/A"}
                  </span>
                </p>
              </div>

              <div className="border-b border-white/10 py-6">
                <p className="text-[18px] uppercase tracking-wide">
                  AGENCY:{" "}
                  <span className="normal-case">
                    {project.agency || "N/A"}
                  </span>
                </p>
              </div>

            </div>
          </div>
          {project.image && (
            <div className="mt-16">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}