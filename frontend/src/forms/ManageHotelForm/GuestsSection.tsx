import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Guests</h2>
      <div className="grid grid-cols-2 gap-5 p-6 py-4 bg-gray-400">
        <label className="flex-1 text-sm font-bold text-gray-700">
          Adults
          <input
            type="number"
            min={1}
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("adultCount", {
              required: "Adult count should be required!",
            })}
          ></input>
          {errors.adultCount && (
            <span className="text-red-500">{errors.adultCount.message}</span>
          )}
        </label>
        <label className="flex-1 text-sm font-bold text-gray-700">
          Clidren
          <input
            type="number"
            min={1}
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("childCount", {
              required: "Children count should be required!",
            })}
          ></input>
          {errors.childCount && (
            <span className="text-red-500">{errors.childCount.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
