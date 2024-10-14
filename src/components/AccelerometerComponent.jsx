import { useState } from "react";

function AccelerometerComponent() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [lax, setLaX] = useState("");
  const [lay, setLaY] = useState("");
  const [laz, setLaZ] = useState("");
  const acl = new Accelerometer({ frequency: 60 });
  acl.addEventListener("reading", () => {
    setX(acl.x);
    setY(acl.y);
    setZ(acl.z);
    console.log(`Acceleration along the X-axis ${acl.x}`);
    console.log(`Acceleration along the Y-axis ${acl.y}`);
    console.log(`Acceleration along the Z-axis ${acl.z}`);
  });

  let laSensor = new LinearAccelerationSensor({ frequency: 60 });

  laSensor.addEventListener("reading", (e) => {
    setLaX(laSensor.x);
    setLaY(laSensor.y);
    setLaZ(laSensor.z);
    console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
    console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
    console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
  });
  laSensor.start();

  acl.start();
  return (
    <div>
      <p>x-value = {x}</p>
      <p>y-value = {y}</p>
      <p>z-value = {z}</p>
      <p>lx-value = {lax}</p>
      <p>ly-value = {lay}</p>
      <p>lz-value = {laz}</p>
    </div>
  );
}

export default AccelerometerComponent;
