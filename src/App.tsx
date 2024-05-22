import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import LandingPage from "./layouts/LandingPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LogosMarquee from "./layouts/LogosMarquee";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const navRef = useRef(null) as any;
  const landingRef = useRef(null) as any;
  const landingDivRef = useRef(null) as any;
  const coverDivRef = useRef(null) as any;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(landingRef.current, { opacity: 1, duration: 1 })
      .to(navRef.current, {
        opacity: 1,
        y: "-10%",
        ease: "power2.inOut",
        duration: 1,
      })
      .to(landingRef.current, {
        scale: 1,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top",
          end: "+=4860",
          scrub: true,
          onUpdate: (self) => {
            const scale = 1 - self.progress;
            gsap.set(landingDivRef.current, { scale: scale });
            if (scale >= 0.47) {
              landingDivRef.current.style.position = "sticky";
              landingDivRef.current.style.top = "0";
            } else {
              landingDivRef.current.style.position = "sticky";
            }
          },
        },
      });
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative">
        <div ref={landingDivRef} className="z-40">
          <LandingPage ref={landingRef} />
        </div>
        <div className="flex flex-row h-screen justify-between px-32 top-0 bottom-0 left-0 right-0 sticky z-10">
          <LogosMarquee invert={false} />
          <LogosMarquee invert={true} />
        </div>
        <div ref={coverDivRef} className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="flex items-center justify-center sticky p-4 z-50 bottom-0">
          <Navbar ref={navRef} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <div className="flex flex-row justify-center items-center gap-[1vh]">
        <Button variant="outline" className="font-urbanist-medium">
          Button
        </Button>
        <ModeToggle />
      </div> */
}
