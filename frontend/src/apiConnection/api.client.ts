import { RegisterFormData } from "../pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const register = async (formdata: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(formdata),
  });

  const responseBody = await response.json();

  if (!responseBody.Ok) {
    throw new Error(responseBody.message);
  }
};
