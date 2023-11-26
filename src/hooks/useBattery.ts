import { useEffect, useState } from "react";

const useBattery = () => {
  const [battery, setBattery] = useState({
    charging: false,
    level: 100,
  });

  useEffect(() => {
    const getBatteryDetails = async () => {
      const battery = await (navigator as any).getBattery();
      setBattery({
        level: battery.level,
        charging: battery.charging,
      });

      battery.addEventListener("chargingchange", () => {
        setBattery((prev) => ({
          ...prev,
          charging: battery.charging,
        }));
      });
      battery.addEventListener("levelchange", () => {
        setBattery((prev) => ({
          ...prev,
          level: battery.level,
        }));
      });
    };

    if ("getBattery" in navigator) {
      getBatteryDetails();
    } else {
      console.error("navigator.getBattery() not supported in this browser.");
    }
  }, []);

  return { battery };
};

export default useBattery;
