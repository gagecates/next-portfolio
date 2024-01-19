import SectionWrapper from "@/components/sections/SectionWrapper";
import SectionView from "./SectionView";

export default function About() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 text-xs mobile:text-xl typewriter-about mt-10 mobile:mt-0">
        <SectionView>
          <p>
            I left my life as an electrician behind to pursue software
            development and have not been happier since. The idea and ability to
            create such amazing things at the tips of my fingertips is
            incomparable. My mindset is if you can think of it, it can be done.
            And that is just so awesome to me.
          </p>
        </SectionView>
        <SectionView>
          <p>
            In my career I have always pushed myself to learn all aspects of the
            things I work on. From the UI to DevOps I love the entire process of
            development and am always striving to learn more and better myself.
            I have had the opportunity to build state of the art software that
            helps everyday people and I always looking forward to what is in
            store for me next.
          </p>
        </SectionView>
        <SectionView>
          <p>And... my favorite color is purple.</p>
        </SectionView>
      </div>
    </SectionWrapper>
  );
}
