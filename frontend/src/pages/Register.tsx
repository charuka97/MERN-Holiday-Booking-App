import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api.client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async (message) => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: message, type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Create an Account</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        {/* First Name */}
        <label className="flex-1 text-sm font-bold text-gray-700">
          First Name
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("firstName", {
              required: "First name should be required!",
            })}
          ></input>
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>

        {/* Last Name */}
        <label className="flex-1 text-sm font-bold text-gray-700">
          Last Name
          <input
            type="text"
            className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
            {...register("lastName", {
              required: "Last name should be required!",
            })}
          ></input>
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>

      {/* Email */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Email
        <input
          type="email"
          className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
          {...register("email", { required: "Email should be required!" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      {/* Password */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
          {...register("password", {
            required: "Password should be required!",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      {/* Confirm Password */}
      <label className="flex-1 text-sm font-bold text-gray-700">
        Confirm Password
        <input
          type="password"
          className="w-full px-2 py-1 font-normal border border-gray-300 rounded"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) {
                return "Confirm password should be required!";
              } else if (watch("password") !== value) {
                return "Your password does not match!";
              }
            },
          })}
        ></input>
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>

      {/* Submit button */}
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Registered?{" "}
          <Link className="hover:underline hover:text-blue-600" to="/sign-in">
            Sign in here
          </Link>
        </span>
        <button
          type="submit"
          className="p-2 text-xl font-bold text-white bg-blue-600 hover:bg-blue-500"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
