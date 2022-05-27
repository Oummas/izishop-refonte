import { useEffect, useState } from "react";
import type { LandingConfiguration } from "../models/landing.type";
import { fetchLandingConfig } from "../services/landing.service";

export function useLandingConfig(): LandingConfiguration | undefined {
  const [config, setConfig] = useState<LandingConfiguration>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLandingConfig();

      setConfig(data);
    };

    if (!config) {
      fetchData();
    }
  }, [config]);

  return config;
}
