import SectionWrapper from "@/components/SectionWrapper";
import SkillLevel from "./SkillLevel";
import reactLogo from "../../public/images/react-logo.svg";
import pythonLogo from "../../public/images/python-logo.png";
import nodeLogo from "../../public/images/node-logo.png";
import gcpLogo from "../../public/images/gcp-logo.png";
import SectionView from "./SectionView";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionView>
        <div className="flex flex-col gap-6 w-full">
          <SkillLevel name="React" width="w-3/4" logo={reactLogo} />
          <SkillLevel name="Python" width="w-2/3" logo={pythonLogo} />
          <SkillLevel name="Node.js" width="w-2/5" logo={nodeLogo} />
          <SkillLevel name="GCP" width="w-1/3" logo={gcpLogo} />
        </div>
      </SectionView>
    </SectionWrapper>
  );
}
