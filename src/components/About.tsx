import SectionWrapper from "@/components/SectionWrapper";
import SectionView from "./SectionView";

export default function About() {
  return (
    <SectionWrapper>
      <SectionView>
        <div className="flex flex-col gap-4 text-xl">
          <div>
            <p>
              I left my life as an electrician behind to persue software
              development and have not been happier since. The idea and ability
              to create such amazing things at tips of my fingertips is
              uncomparable. My mindset is if you can think of it, it can be
              done. And that is just so awesome to me.
            </p>
          </div>
          <div>
            <p>
              Always in my career have I pushed myself to learn all aspects of
              the things I work on. From the UI to DevOps I love the entire
              process of development and am always striving to learn more and
              excel. I have had the opportunity to build state of the art
              software that helps everyday people and I always looking forward
              to what is in store for me next.
            </p>
          </div>
          <div>
            <p>And (obviously) my favorite color is purple.</p>
          </div>
          <p className="mt-6">Anyways, enough about me. Onward!</p>
        </div>
      </SectionView>
    </SectionWrapper>
  );
}
