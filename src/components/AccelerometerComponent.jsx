import { useEffect, useState } from "react";

function AccelerometerComponent() {
  const [lax, setLaX] = useState(null);
  const [lay, setLaY] = useState(null);
  const [laz, setLaZ] = useState(null);
  const [maxLaz, setMaxLaz] = useState(0);
  const [height, setHeight] = useState(0);

  let laSensor = new LinearAccelerationSensor({ frequency: 60 });

  laSensor.addEventListener("reading", () => {
    setLaX(laSensor.x);
    setLaY(laSensor.y);
    setLaZ(laSensor.z);
  });

  laSensor.start();

  useEffect(() => {
    if (maxLaz > laz) {
      setHeight((laz * 0.1) ** 2 / (2 * 9.8));
      setMaxLaz(laz);
    }
  }, [laz]);
  return (
    <div>
      <p>lx-value = {lax}</p>
      <p>ly-value = {lay}</p>
      <p>lz-value = {laz}</p>
      <p>max-lz-value = {maxLaz}</p>
      <p>max height thrown = {height} m</p>
    </div>
  );
}

export default AccelerometerComponent;
