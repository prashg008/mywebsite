import React, { useState, useEffect } from "react";
import Particles from "@tsparticles/react";

const Canvas: React.FC = () => {
  const [width, setWidth] = useState("0px");
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(`${window.innerWidth}px`);
      setHeight(`${window.innerHeight}px`);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="bg-layer-1"
      style={{ width, height }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ["#ffffff", "#a78bfa", "#60a5fa", "#f472b6"],
          },
          shape: {
            type: ["circle", "star"],
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.5 },
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 1,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Canvas;