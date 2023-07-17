import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const ParticleHome = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          background: {
            color: {
              value: "#000000",
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#003049", "#D62828", "#F77F00", "#FCBF29", "#EAE2B7"],
            },
            //   links: {
            //     color: "#ffffff",
            //     distance: 150,
            //     enable: true,
            //     opacity: 0.5,
            //     width: 1,
            //   },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 150,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 10 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};
export default ParticleHome;
