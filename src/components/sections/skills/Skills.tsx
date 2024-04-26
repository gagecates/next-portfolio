import SectionWrapper from "@/components/sections/SectionWrapper";
import SkillLevel from "./SkillLevel";
import reactLogo from "/public/images/react-logo.svg";
import pythonLogo from "/public/images/python-logo.png";
import nodeLogo from "/public/images/node-logo.png";
import gcpLogo from "/public/images/gcp-logo.png";
import postgresLogo from "/public/images/postgres-logo.svg";
import mongoLogo from "/public/images/mongo-logo.webp";
import svelteLogo from "/public/images/svelte-logo.svg";
import flutterLogo from "/public/images/flutter-logo.svg";
import SectionView from "../SectionView";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionView>
        <div className="flex flex-col gap-6 w-full">
          <SkillLevel name="React" width="w-3/4" logo={reactLogo} />
          <SkillLevel name="Python" width="w-2/3" logo={pythonLogo} />
          <SkillLevel name="PostgreSQL" width="w-1/2" logo={postgresLogo} />
          <SkillLevel name="Node.js" width="w-2/5" logo={nodeLogo} />
          <SkillLevel name="MongoDB" width="w-2/5" logo={mongoLogo} />
          <SkillLevel name="GCP" width="w-1/3" logo={gcpLogo} />
          <SkillLevel name="Svelte" width="w-1/4" logo={svelteLogo} />
          <SkillLevel name="Flutter" width="w-1/5" logo={flutterLogo} />
        </div>
      </SectionView>
    </SectionWrapper>
  );
}
