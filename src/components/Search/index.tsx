import { useEffect, useState } from "react";
import { Option, Select } from "../../shared/Select";
import { getLocations } from "../../api";
import { Locations } from "../../types";

export const Search = () => {
  const [locations, setLocations] = useState<Locations>({});
  const [countries, setCountries] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    // Fetch locations and set country list
    const fetchLocations = async () => {
      const locations = await getLocations();
      setLocations(locations);
      const countryList = Object.keys(locations).map((country) => ({
        value: country,
        label: country,
      }));
      setCountries(countryList);
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup selected city on country change
      setSelectedCity("");
    };
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;

    setSelectedCountry(value);

    const selectedCountry = locations[value];

    const cityList = selectedCountry.map(([cityId, cityName]) => ({
      value: cityId,
      label: cityName,
    }));

    setCities(cityList);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;

    // TODO: Should be kept as number?
    setSelectedCity(value);
  };

  return (
    <form>
      <Select
        name="country"
        options={countries}
        placeholder="Choose the country"
        handleChange={handleCountryChange}
        value={selectedCountry}
      />
      <Select
        name="city"
        options={cities}
        placeholder="Choose the city"
        isDisabled={!selectedCountry}
        handleChange={handleCityChange}
        value={selectedCity}
      />
      <p>Datepicker</p>
    </form>
  );
};
