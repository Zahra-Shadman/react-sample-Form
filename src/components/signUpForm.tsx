import React from "react";
import { useForm } from "react-hook-form";
export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex justify-center h-screen  ">
      <div
        className="md:w-1/2 hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/3d-render-modern-background-with-flowing-cyber-particles.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-12 px-6 text-gray-50 text-3xl font-mono  ">
          <p>Welcome ! Log in to explore</p>{" "}
          <span> and connect with your world.</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex justify-center gap-1 md:w-1/2 flex-col items-center px-6  bg-gray-50  "
      >
        <p>please enter your information</p>
        <input
          type="text"
          {...register("firstName")}
          placeholder="first Name"
          className="p-3 w-5/6 bg-slate-200 rounded-lg mt-5 text-black hover:border-purple-800 focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-800"
        />
        <input
          type="text"
          {...register("exampleRequired", { required: true, minLength: 3 })}
          placeholder="last Name"
          className="p-3 w-5/6 bg-slate-200 rounded-lg mt-5 text-black hover:border-purple-800 focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-800"
        />
        {errors.exampleRequired && (
          <span className="text-red-500 ">
            This field should have more then 3 length
          </span>
        )}
        <input
          type="email"
          placeholder="email"
          className="p-3 w-5/6 bg-slate-200 rounded-lg mt-5 text-black hover:border-purple-800 focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-800"
        />
        {errors.exampleRequired && (
          <span className="text-red-500 ">
            This field should have more then 3 length
          </span>
        )}
        {errors.exampleRequired && (
          <span className="text-red-500 ">
            This field should have more then 3 length
          </span>
        )}
        <input
          type="password"
          placeholder="password"
          className="p-3 w-5/6 bg-slate-200 rounded-lg mt-5 text-black hover:border-purple-800 focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-800"
        />
        {errors.exampleRequired && (
          <span className="text-red-500 ">
            This field should have more then 3 length
          </span>
        )}
        <input
          type="password"
          placeholder="confirmation password"
          className="p-3 w-5/6 bg-slate-200 rounded-lg mt-5 text-black hover:border-purple-800 focus:outline-none focus:border-purple-800 focus:ring-2 focus:ring-purple-800"
        />
        {errors.exampleRequired && (
          <span className="text-red-500 ">
            This field should have more then 3 length
          </span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};
