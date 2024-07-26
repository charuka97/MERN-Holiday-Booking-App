import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-option-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSetion = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Type</h2>
      <div className="grid items-center grid-cols-5 gap-4">
        {hotelTypes.map((type) => (
          <label
            className={
              typeWatch === type
                ? "cursor-pointer text-center bg-blue-300 text-sm rounded-full px-2 py-2 font-semibold"
                : "cursor-pointer text-center bg-gray-300 text-sm rounded-full px-2 py-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-sm font-bold text-red-500">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSetion;
