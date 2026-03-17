"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

declare global {
  interface Window {
    Vimeo?: any;
  }
}

type Project = {
  id: number;
  title: string;
  image: string;
  description?: string;
  text?: string;
  client?: string;
  director?: string;
  directors?: string;
  cinematographer?: string;
  agency?: string;
  vimeo_id?: string;
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    async function getProjects() {
      try {
        const res = await fetch("https://hanzo.dxpshift.com/api/projects");
        const data = await res.json();

        if (data.success) {
          const list = data.data || [];
          setProjects(list);

          const currentProject = list.find((item: any) => String(item.id) === slug);
          setProject(currentProject || null);
        }
      } catch (error) {
        console.log("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }

    getProjects();
  }, [slug]);

  useEffect(() => {
    if (!showVideo || !project?.vimeo_id || !iframeRef.current) return;

    let script: HTMLScriptElement | null = null;

    function startPlayer() {
      if (!window.Vimeo || !iframeRef.current) return;

      playerRef.current = new window.Vimeo.Player(iframeRef.current);

      playerRef.current.on("ended", () => {
        setShowVideo(false);
      });
    }

    if (window.Vimeo) {
      startPlayer();
    } else {
      script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = startPlayer;
      document.body.appendChild(script);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unload().catch(() => {});
        playerRef.current = null;
      }
    };
  }, [showVideo, project]);

  if (loading) {
    return (
      <section className="min-h-screen bg-black px-8 py-20 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1400px]">
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="min-h-screen bg-black px-8 py-20 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1400px]">
            <h1 className="text-3xl font-bold">Project not found</h1>
            <Link href="/" className="mt-6 inline-block underline">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const paragraph =
    project.description || project.text || "No description available.";

  return (
    <section className="min-h-screen bg-black px-8 py-20 text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="mb-10 inline-block text-sm text-white/70 hover:text-white"
          >
            ← Back
          </Link>

          <div className="mb-16 overflow-hidden">
            {!showVideo ? (
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />

                {project.vimeo_id && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition hover:scale-105"
                    aria-label="Play video"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-8 w-8"
                    >
                      <path d="M8 5.14v14l11-7-11-7Z" />
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  ref={iframeRef}
                  src={`https://player.vimeo.com/video/${project.vimeo_id}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            )}
          </div>

          <h1 className="mb-16 text-center text-[28px] font-light md:text-[40px]">
            {project.title}
          </h1>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="max-w-[760px]">
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

          <div className="mt-20 flex items-center justify-between">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.id}`}
                className="rounded border border-white px-6 py-3 text-sm hover:bg-white hover:text-black"
              >
                ← Previous
              </Link>
            ) : (
              <div></div>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="rounded border border-white px-6 py-3 text-sm hover:bg-white hover:text-black"
              >
                Next →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}