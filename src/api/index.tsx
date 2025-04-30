import { AvailableDates, Locations } from "../types";

const HOST = "http://localhost:3001";

export const getLocations = async (): Promise<Locations> => {
  const response = await fetch(`${HOST}/locations`);
  return response.json();
};

export const getAvaliableDates = async (): Promise<AvailableDates> => {
  const response = await fetch(`${HOST}/available_dates`);
  return response.json();
};
