"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <p className="text-center max-w-[45rem] italic">
          I'm currently engaged in several exciting projects, and I can't wait
          to share them with you. Stay tuned for updates on my latest work,
          including details on the technologies, challenges, and outcomes of
          these projects. More to come soon!
        </p>
      </div>
    </section>
  );
}
