export type HotelType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: number[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  crestedAt: Date;
  lastUpdated: Date;
};
