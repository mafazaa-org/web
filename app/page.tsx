import Section from "@/components/Section";
import Project from "@/components/Project";
import homeData from "./homeData";
import projectsData from "./projectsData";

export default function Home() {
  return (
    <main dir="rtl">
      {homeData.map((element, index) => (
        <Section {...element} key={index} />
      ))}
      <section className="grid lg:grid-cols-3 gap-8 p-4 md:p-8 lg:p-20">
        {projectsData.map((element, index) => (
          <Project {...element} key={index} />
        ))}
      </section>
    </main>
  );
}
