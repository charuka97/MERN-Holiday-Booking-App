import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImageSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Images</h2>
      <div className="flex flex-col gap-4 p-4 border rounded">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full font-normal text-gray-700"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              if (imageFiles.length === 0) {
                return "At least one image should be added!";
              }

              if (imageFiles.length > 6) {
                return "Total number of images cannot be more than 6";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-sm font-bold text-red-500">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImageSection;
