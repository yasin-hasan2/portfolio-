import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesAnimation = () => {
  async function loadParticles(main) {
    await loadFull(main);
    // console.log("particles loaded");
  }

  return (
    <div className="">
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#010610",
            },
          },
          "fullScreen": {
            "enable": true
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "star",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 1,
              random: true,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "top",
              random: true,
              straight: false,
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              hover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
            },
            modes: {
              grab: {
                distance: 150,
                links: {
                  opacity: 0.5,
                },
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
                factor: 50,
                speed: 1,
              },
            },
          },
          detectRetina: true,
          
        }}
        
      />

    </div>
  );
};

export default ParticlesAnimation;
