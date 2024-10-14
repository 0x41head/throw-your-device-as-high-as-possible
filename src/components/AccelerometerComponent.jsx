import { useEffect, useState } from "react";

function AccelerometerComponent() {
  const [lax, setLaX] = useState("");
  const [lay, setLaY] = useState("");
  const [laz, setLaZ] = useState("");
  const [maxLaz, setMaxLaz] = useState(0);
  const [height, setHeight] = useState(0);

  let laSensor = new LinearAccelerationSensor({ frequency: 60 });

  laSensor.addEventListener("reading", (e) => {
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
