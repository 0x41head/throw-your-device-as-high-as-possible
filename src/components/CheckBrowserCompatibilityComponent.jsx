import { useEffect, useState } from "react";
import AccelerometerComponent from "./AccelerometerComponent";

function CheckBrosweCompatibilityComponent() {
  const [isBrowserCompatible, setIsBroswerCompatible] = useState(false);
  useEffect(() => {
    try {
      let laSensor = new LinearAccelerationSensor({ frequency: 60 });
      setIsBroswerCompatible(true);
    } catch (err) {
      setIsBroswerCompatible(false);
    }
  }, []);

  return isBrowserCompatible ? (
    <AccelerometerComponent />
  ) : (
    <p>
      {" "}
      Incompatible browser/device. Check compatibility list{" "}
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor#browser_compatibility">
        here
      </a>
    </p>
  );
}

export default CheckBrosweCompatibilityComponent;
