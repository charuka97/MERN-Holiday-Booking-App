import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-3 text-3xl font-bold">Add Hotel</h1>
      {/* Name filed */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Name
        <input
          type="text"
          className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
          {...register("name", {
            required: "Hotel name should be required!",
          })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      {/* City filed */}
      <div className="flex gap-4">
        <label className="flex-1 text-sm font-bold text-gray-700">
          City
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("city", {
              required: "City should be required!",
            })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>

        {/* Country filed */}
        <label className="flex-1 text-sm font-bold text-gray-700">
          Country
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("country", {
              required: "Country should be required!",
            })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>

      {/* Description filed */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Description
        <textarea
          rows={5}
          className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
          {...register("description", {
            required: "Description should be required!",
          })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        {/* Price Per Night filed */}
        <label className="flex-1 text-sm font-bold text-gray-700">
          Price Per Night
          <input
            type="number"
            min={1}
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("pricePerNight", {
              required: "Price Per Night should be required!",
            })}
          ></input>
          {errors.pricePerNight && (
            <span className="text-red-500">{errors.pricePerNight.message}</span>
          )}
        </label>

        {/* Start Rating filed */}
        <label className="flex-1 text-sm font-bold text-gray-700">
          Start Rating
          <select
            {...register("starRating", {
              required: "This filed is required!",
            })}
            className="w-full p-2 font-normal text-gray-700 border rounded"
          >
            <option value="" className="text-sm font-bold">
              Select as Rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-red-500">{errors.starRating.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
