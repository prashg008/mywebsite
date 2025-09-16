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
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 3,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};

export default Canvas;