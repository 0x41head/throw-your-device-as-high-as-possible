import { useEffect, useState } from "react";

function AccelerometerComponent() {
  const [lax, setLaX] = useState(null);
  const [lay, setLaY] = useState(null);
  const [laz, setLaZ] = useState(null);
  const [maxLaz, setMaxLaz] = useState(0);
  const [height, setHeight] = useState(0);
  const [isBrowserCompatible, setIsBrowserCompatible] = useState(false);

  let laSensor = new LinearAccelerationSensor({ frequency: 60 });

  laSensor.addEventListener("reading", () => {
    setLaX(laSensor.x);
    setLaY(laSensor.y);
    setLaZ(laSensor.z);
  });

  laSensor.start();

  useEffect(() => {
    if (maxLaz > laz) {
      setHeight((laz / 60) ** 2 / (2 * 9.8));
      setMaxLaz(laz);
    }
    if (laz != null) setIsBrowserCompatible(true);
  }, [laz]);
  return isBrowserCompatible ? (
    <div>
      <p>lx-value = {lax}</p>
      <p>ly-value = {lay}</p>
      <p>lz-value = {laz}</p>
      <p>max-lz-value = {maxLaz}</p>
      <p>max height thrown = {height} m</p>
    </div>
  ) : (
    <p>
      Incompatible device Use a mobile or tablet and ensure you are using a
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor#browser_compatibility">
        compatible browser
      </a>
    </p>
  );
}

export default AccelerometerComponent;
