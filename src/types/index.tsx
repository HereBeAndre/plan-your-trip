type City = [number, string];
type Country = Array<City>;
export type AvailableDates = string[];
export type Locations = Record<string, Country>;

// TODO: For later
type Product = {
  product_url: string;
  image: string;
  id: number;
  title: string;
  price: number;
  discount_percentage: number;
  summary: string;
  city_id: number;
  available_dates: AvailableDates;
};

// TODO: Is this needed?
// type ResponseModel = {
//   locations: Locations;
//   available_dates: AvailableDates;
//   products: Product[];
// };
