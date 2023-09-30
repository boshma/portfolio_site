//src/components/Particles.js
import { useEffect, useState, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // loads tsparticles

const ParticlesComponent = (/** @type {{ id: string | undefined; }} */ props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkForMobile = () => {
      const isMobileQuery = window.matchMedia('(max-width: 767px)');
      setIsMobile(isMobileQuery.matches);
    };
    checkForMobile();
    window.addEventListener("resize", checkForMobile);
    return () => window.removeEventListener("resize", checkForMobile);
  }, []);

  const options = useMemo(() => {
    const particleNumber = 50;

    return {
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        number: {
          value: particleNumber,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        opacity: {
          value: 1,
          anim: {
            enable: true,
            speed: isMobile ? 2 : 8,
            opacity_min: 0.4,
            sync: false
          }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 5,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: !isMobile,  // Make them stationary on mobile
          speed: 3,
          direction: isMobile ? "none" : "right",  // Moving left to right on desktop
          straight: isMobile ? false : true  // Straight movement only on desktop
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          }
        }
      }
    };
  }, [isMobile])
  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async (/** @type {import("tsparticles-engine").Engine} */ engine) => {
    await loadFull(engine);
  }, []);
  

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
return <Particles
id={props.id}
init={particlesInit}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
options={options}
style={{ position: "absolute", width: "100%", height: "100%" }}
/>;

};

export default ParticlesComponent;