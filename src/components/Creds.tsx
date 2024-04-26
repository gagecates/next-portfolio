import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

export function Creds() {
  return (
    <div className="text-4xl lg:ml-16 mobile:w-1/2">
      <div className="flex gap-3 justify-center">
        <a
          href="https://www.linkedin.com/in/gage-cates-26302a153/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
        <a
          href="https://twitter.com/gage_cates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
        <a
          href="https://www.instagram.com/stories/gmancates10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
        <a
          href="https://www.facebook.com/gage.cates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
      </div>
      <div className="flex justify-center gap-3 mt-2">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <GrDocumentText className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
        <a
          href="https://github.com/gagecates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-indigo-800 cursor-pointer mb-2" />
        </a>
      </div>
    </div>
  );
}
