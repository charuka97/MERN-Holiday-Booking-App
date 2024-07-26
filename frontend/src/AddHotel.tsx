import { useMutation } from "react-query";
import { useAppContext } from "./contexts/AppContext";
import ManageHotelForm from "./forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "./apiConnection/api.client";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },

    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handelSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handelSave} isLoading={isLoading} />;
};

export default AddHotel;
