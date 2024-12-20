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
    return {
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      particles: {
        number: {
          value: 355,
          density: {
            enable: true,
            value_area: 789.1476416322727
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.48927153781200905,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    };
  }, []);
  
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