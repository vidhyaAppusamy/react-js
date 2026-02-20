import { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const hour = now.getHours();
      const min = now.getMinutes().toString().padStart(2, "0");
      const secs = now.getSeconds().toString().padStart(2, "0");

      setTime(`${hour}:${min}:${secs}`);

      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 17) {
        setGreeting("Good Afternoon");
      } else if (hour < 20) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    }, 1000); // update every 1 second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{greeting}</h2>
      <h3>{time}</h3>
    </div>
  );
}
