import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type ListItem = {id: number;title: string;image: string;};

type Section = {section_type: string;title: string;details?: {  list?: ListItem[];};};

export default async function AboutPage() {
  let sections: Section[] = [];

  try {
    const res = await fetch("https://hanzo.dxpshift.com/api/page/our-story", {
      cache: "no-store",
    });

    const data = await res.json();
    sections = data?.data?.sections || [];
  } catch (error) {
    console.log(error);
  }

  const clientsSection = sections.find(
    (section) =>
      section.section_type === "list" &&
      section.title?.toLowerCase() === "clients"
  );

  const awardIconsSection = sections.find(
    (section) =>
      section.section_type === "list" &&
      section.title?.toLowerCase() === "awards"
  );

  const awardBadgesSection = sections.find(
    (section) =>
      section.section_type === "list" &&
      section.title === ""
  );

  const clients = clientsSection?.details?.list || [];
  const awardIcons = awardIconsSection?.details?.list || [];
  const awardBadges = awardBadgesSection?.details?.list || [];

  return (
    <>
      <Navbar />

      <section className="bg-black px-8 py-20 text-white">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1200px]">
            {clients.length > 0 && (
              <div>
                <h2 className="mb-12 text-center text-[24px] font-semibold tracking-[0.2em]">
                  — CLIENTS
                </h2>

                <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
                  {clients.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[70px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {awardIcons.length > 0 && (
              <div className="mt-24">
                <h2 className="mb-10 text-center text-[24px] font-semibold tracking-[0.2em]">
                  — AWARDS
                </h2>

                <div className="mx-auto grid max-w-[500px] grid-cols-2 gap-8 sm:grid-cols-4">
                  {awardIcons.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[80px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {awardBadges.length > 0 && (
              <div className="mt-16">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                  {awardBadges.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[160px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}