//src/components/Particles.js

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";





// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (/** @type {{ id: string | undefined; }} */ props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      // background: {
      //   color: "#000", // this sets a background color for the canvas
      // },
      fullScreen: {
        enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 500
          }
        },
        color: {
          value: "#fff"
        },
        opacity: {
          value: 1,
          anim: {
            enable: true,
            speed: 8,
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
          enable: true,
          speed: 3,
          direction: "right",
          straight: true
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
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async (/** @type {import("tsparticles-engine").Engine} */ engine) => {
    await loadFull(engine);
  }, []);
  

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
return <Particles id={props.id} init={particlesInit} options={options} />;

};

export default ParticlesComponent;