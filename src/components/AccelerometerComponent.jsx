import { useState } from "react";

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
    console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
    console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
    console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
    if (setMaxLaz > laSensor.z) {
      setMaxLaz(laSensor.z);
      setHeight(laSensor.z ** 2 / (2 * 9.8));
    }
  });
  laSensor.start();
  return (
    <div>
      <p>lx-value = {lax}</p>
      <p>ly-value = {lay}</p>
      <p>lz-value = {laz}</p>
      <p>max lz = {maxLaz}</p>
      <p>max height thrown = {height}</p>
    </div>
  );
}

export default AccelerometerComponent;
