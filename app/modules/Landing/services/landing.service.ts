import type { LandingConfiguration } from "../models/landing.type";

export const fetchLandingConfig = async (): Promise<LandingConfiguration> => {
  const response = await fetch("/api/landing");
  const data = await response.json();

  return data;
};
