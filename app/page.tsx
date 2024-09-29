import Section from "@/components/Section";
import Project from "@/components/Project";
import homeData from "./homeData";
import projectsData from "./projectsData";
import FollowUs from "@/components/FollowUs";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main dir="rtl">
      {homeData.map((element, index) => (
        <Section {...element} key={index} />
      ))}
      <section
        className="px-4 md:px-10 lg:px-32 py-10 relative 
          after:content-['']
          after:absolute
          after:left-1/4
          after:bottom-0
          after:w-1/2
          after:h-[0.5px]
          after:block
        after:bg-black"
        id="projects"
      >
        <h1 className="font-bold text-2xl lg:text-5xl mb-6">مشاريعنا</h1>
        <div className="grid md:grid-cols-3 gap-8 ">
          {projectsData.map((element, index) => (
            <Project {...element} key={index} />
          ))}
        </div>
      </section>
      <FollowUs />
      <Form />
    </main>
  );
}
