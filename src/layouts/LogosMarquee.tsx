import { useRef, useEffect } from "react";
import gsap from "gsap";

import {
  react,
  figma,
  html5,
  css3,
  javascript,
  tailwindcss,
} from "../components/svg";

const LogosMarquee = (props: boolean) => {
  const ulRef = useRef(null) as any;

  const invert = props.invert;

  const logoList = [
    { logo: html5, name: "HTML5" },
    { logo: css3, name: "CSS3" },
    { logo: javascript, name: "Javascript" },
    { logo: react, name: "ReactJS" },
    { logo: tailwindcss, name: "TailwindCSS" },
    { logo: figma, name: "Figma" },
    { logo: html5, name: "HTML5" },
    { logo: css3, name: "CSS3" },
    { logo: javascript, name: "Javascript" },
    { logo: react, name: "ReactJS" },
    { logo: tailwindcss, name: "TailwindCSS" },
    { logo: figma, name: "Figma" },
  ];

  //   tl.to(list, { yPercent: -51.25, duration: 5, ease: "linear" });

  useEffect(() => {
    const list = ulRef.current;
    const tl = gsap.timeline({ repeat: -1 });
    if (invert === false) {
      tl.to(list, { yPercent: -51.25, duration: 7.5, ease: "linear" });
    } else {
      tl.fromTo(
        list,
        { yPercent: -51.25 },
        { yPercent: 34.75, duration: 7.5, ease: "linear", marginTop: 0 }
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <ul ref={ulRef} className="flex flex-col gap-16 mt-[235vh]">
        {logoList.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center justify-center gap-4 font-urbanist-semibold text-6xl"
          >
            <img src={item.logo} alt="logo" height={128} width={128} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogosMarquee;
