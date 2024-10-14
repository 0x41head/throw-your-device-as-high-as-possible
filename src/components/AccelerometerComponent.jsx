import { useState } from "react";

function AccelerometerComponent() {
  const [lax, setLaX] = useState("");
  const [lay, setLaY] = useState("");
  const [laz, setLaZ] = useState("");
  const [maxLaz, setMaxLaz] = useState(0);
  let laSensor = new LinearAccelerationSensor({ frequency: 60 });

  laSensor.addEventListener("reading", (e) => {
    setLaX(laSensor.x);
    setLaY(laSensor.y);
    setLaZ(laSensor.z);
    console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
    console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
    console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
    if (setMaxLaz < laSensor.z) setMaxLaz(laSensor.z);
  });
  laSensor.start();
  return (
    <div>
      <p>lx-value = {lax}</p>
      <p>ly-value = {lay}</p>
      <p>lz-value = {laz}</p>
      <p>max height thrown = {maxLaz ** 2 / (2 * 9.8)}</p>
    </div>
  );
}

export default AccelerometerComponent;
