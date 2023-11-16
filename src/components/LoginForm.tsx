import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/auth";

interface Props {
  onClose: () => void;
}

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "نام کاربری شامل باید شامل حداقل 3 کارکتر باشد." }),
  password: z
    .string()
    .min(3, { message: "رمز عبور باید شامل حداقل 3 کارکتر باشد." }),
});

type DataForm = z.infer<typeof schema>;

const LoginForm = ({ onClose }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<DataForm>({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<DataForm> = (data) => {
    dispatch(authActions.login({ username: data.username }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[50%]">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              نام کاربری
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="نام کاربری"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              className="bg-[#0085a1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#005263]"
              type="submit"
            >
              ورود
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
