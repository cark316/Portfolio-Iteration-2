import { useEffect, useRef, forwardRef, ForwardedRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";

const LandingPage = forwardRef(
  (props: any, ref: ForwardedRef<HTMLDivElement>) => {
    const spanRef = useRef(null);
    const divRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline();

      tl.to(spanRef.current, { opacity: 1, duration: 1 }).to(divRef.current, {
        opacity: 1,
        duration: 1,
      });
    }, []);

    return (
      <div
        ref={ref}
        className="h-screen flex justify-center items-center font-urbanist-semibold text-[288px] relative overflow-hidden z-30 bg-card"
      >
        <div className="flex flex-col justify-center items-start absolute backdrop-blur-2xl z-40 rounded-2xl border-2">
          <span ref={spanRef} className="opacity-0">
            SAAD
          </span>
        </div>
        <div ref={divRef} className="opacity-0 flex flex-col gap-64">
          <Marquee speed={100}>
            <span>Frontend Developer</span>
          </Marquee>
          <Marquee speed={100} direction="right">
            <span>Frontend Developer</span>
          </Marquee>
        </div>
      </div>
    );
  }
);

export default LandingPage;
