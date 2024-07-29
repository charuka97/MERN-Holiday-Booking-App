import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api.client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels
  );

  if (!hotelData) {
    <span className="text-xl font-bold">No Hotel data found</span>;
  }
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-2xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex p-1.5 text-md font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </span>

      <div className="grid grid-cols-1 gap-8">
        {hotelData?.map((hotel) => (
          <div className="flex flex-col justify-between gap-5 p-8 border rounded-lg border-slate-400">
            <h2 className="text-xl font-bold">{hotel.name}</h2>
            <div className="whitespase-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-5 gap-2">
              <div className="flex items-center p-1 border rounded-md border-slate-400">
                <BsMap className="mr-2" />
                {hotel.city}, {hotel.country}
              </div>
              <div className="flex items-center p-1 border rounded-md border-slate-400">
                <BsBuilding className="mr-2" />
                {hotel.type},
              </div>
              <div className="flex items-center p-1 border rounded-md border-slate-400">
                <BiMoney className="mr-2" />${hotel.pricePerNight} per night
              </div>
              <div className="flex items-center p-1 border rounded-md border-slate-400">
                <BiHotel className="mr-2" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="flex items-center p-1 border rounded-md border-slate-400">
                <BiStar className="mr-2" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                className="flex p-1.5 text-md font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
                to={`/edit-hotel/${hotel._id}`}
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
