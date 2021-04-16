import React, { useContext } from "react";
import { PageLayout } from "~/components/resume/PageLayout";
import ResumePageHeader from "~/components/resume/ResumeHeader";
import { SectionLayout } from "~/components/resume/SectionLayout";
import { ContactInfoSection } from "~/components/resume/sections/ContactInfoSection";
import { EducationSection } from "~/components/resume/sections/EducationSection";
import { SideProjectsSection } from "~/components/resume/sections/SideProjectsSection";
import { SkillsSection } from "~/components/resume/sections/SkillsSection";
import { WorkExperienceSection } from "~/components/resume/sections/WorkExperienceSection";
import Layout from "~/components/site/Layout";
import resumeContext from "~/context/ResumeContext";
import { ResumeSections } from "~/model/Resume";

const ResumePage = () => {
  const context = useContext<ResumeSections>(resumeContext);
  return (
    <Layout>
      <ResumePageHeader />
      <PageLayout>
        <ContactInfoSection contactInfo={context.contactInfo} />
        <hr className="my-6" />
        <SectionLayout>
          <SkillsSection skills={context.skills} />
        </SectionLayout>
        <SectionLayout>
          <WorkExperienceSection workExperience={context.workExperience} />
        </SectionLayout>
        <SectionLayout>
          <SideProjectsSection sideProjects={context.sideProjects} />
        </SectionLayout>
        <SectionLayout>
          <EducationSection education={context.education} />
        </SectionLayout>
      </PageLayout>
    </Layout>
  );
};

// ts-prune-ignore-next
export default ResumePage;
