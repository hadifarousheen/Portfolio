import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    window.particlesJS.load("particles-js", "/particles.json", function () {
      console.log("particles.js loaded");
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
