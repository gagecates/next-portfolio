import SectionWrapper from "@/components/sections/SectionWrapper";
import SectionView from "./SectionView";

export default function About() {
  return (
    <SectionWrapper>
      <div className="flex flex-col mobile:justify-center gap-4 text-xs mobile:text-lg typewriter-about mt-10 mobile:mt-0">
        <SectionView>
          <p>
            I left my life as an electrician behind to pursue software
            development and have not been happier since. The idea and ability to
            create such amazing things at the tips of my fingertips is
            incomparable. My mindset is if you can think of it, it can be done.
            And that is just so awesome to me. I always looking forward to what
            is in store for me next.
          </p>
        </SectionView>
        <SectionView>
          <p>And... my favorite color is purple 😎</p>
        </SectionView>
      </div>
    </SectionWrapper>
  );
}
