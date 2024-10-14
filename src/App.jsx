import { useEffect } from "react";
import AccelerometerComponent from "./components/AccelerometerComponent";
// import "./App.css";

function App() {
  useEffect(() => {
    const acl = new Accelerometer({ frequency: 60 });

    acl.addEventListener("reading", () => {
      console.log(`Acceleration along the X-axis ${acl.x}`);
      console.log(`Acceleration along the Y-axis ${acl.y}`);
      console.log(`Acceleration along the Z-axis ${acl.z}`);
    });

    console.log("inside use effect ");
    acl.start();
  });

  return <AccelerometerComponent />;
}

export default App;
