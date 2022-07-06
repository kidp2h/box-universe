import React, { useState } from 'react';
import AuthLayout from '@layouts/AuthLayout';
import imageForm from '@images/logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  IoArrowForwardOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import '@styles/AuthLayout.module.scss';

type Inputs = { username: string; password: string };
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {};
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleInspectPassword = () => {
    setHidden(!isHidden);
  };
  return (
    <AuthLayout>
      <div className="wrapper__imgForm rounded-l flex-col items-center justify-center bg-gradient-to-r from-purple-400 h-full lg:flex hidden">
        <div className=" flex items-center justify-center select-none pointer-events-none">
          <img src={imageForm} alt="" className="imgForm w-6/12 h-6/12  select-none" />
        </div>
        <div className="wrapper__textImageForm text-white uppercase font-bold text-4xl flex items-center justify-center flex-col select-none">
          <div>WELCOME TO MY UNIVERSE</div>
          <div>BOX UNIVERSE</div>
        </div>
      </div>
      <div className="divider h-full w-1 lg:mr-3 lg:block hidden ">{}</div>
      <div className="wrapper__formAuth flex justify-center items-center lg:mr-24 p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center">
          <div className="form-group flex flex-col mb-5">
            <label
              htmlFor="username"
              className={`text-white select-none text-xl uppercase flex flex-row items-center ${
                errors.username ? 'mb-0' : 'mb-4'
              }`}>
              Username
            </label>
            {errors.username && (
              <span className={`text-red-500 mb-0 text-sm`}>This is field is required</span>
            )}

            <div className="inputIcon relative">
              <input
                {...register('username', { required: true })}
                name="username"
                placeholder="Username"
                id="username"
                type="text"
                className="text-lg align-middle placeholder:uppercase w-60 h-12 bg-transparent  rounded-lg focus: outline-0  pl-10 border-purple-500"
                autoComplete="off"
                spellCheck="false"
              />
              <IoPersonOutline
                color="white"
                className="absolute top-1/2 transform -translate-y-1/2 ml-3"
                size={20}
              />
            </div>
          </div>
          <div className="form-group flex flex-col">
            <label
              htmlFor="password"
              className={`text-white select-none text-xl uppercase flex flex-row items-center ${
                errors.password ? 'mb-0' : 'mb-5'
              }`}>
              Password
            </label>
            {errors.password && (
              <span className={`text-red-500 mb-0 text-sm`}>This is field is required</span>
            )}
            <div className="relative">
              {isHidden ? (
                <IoEyeOutline
                  color="white"
                  size={20}
                  className="cursor-pointer absolute top-1/2 right-5 transform -translate-y-1/2"
                  onClick={handleInspectPassword}
                />
              ) : (
                <IoEyeOffOutline
                  color="white"
                  size={20}
                  className="cursor-pointer absolute top-1/2 right-5 transform -translate-y-1/2"
                  onClick={handleInspectPassword}
                />
              )}
              <input
                {...register('password', { required: true })}
                name="password"
                placeholder="Password"
                type={isHidden ? 'password' : 'text'}
                id="password"
                className="placeholder:select-none text-lg align-middle placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500"
                autoComplete="off"
                spellCheck="false"
              />
              <IoKeyOutline
                color="white"
                className="absolute top-1/2 transform -translate-y-1/2 ml-3"
                size={20}
              />
            </div>
          </div>
          <div className="form-group self-start justify-self-start mt-5 flex items-center">
            <input
              type="checkbox"
              id="rememberPassword"
              className="accent-purple-500 focus: outine-0 border-0"
            />
            <label htmlFor="rememberPassword" className="text-white ml-3 text-sm">
              Remember password
            </label>
          </div>
          <div className="buttonIcon relative mt-5 h-fit justify-self-start self-start hover:bg-purple-500 rounded-lg ">
            <input
              type="submit"
              className="w-16 h-16 -2 border-purple-500 rounded-lg text-transparent hover:bg-purple-500 cursor-pointer"
            />
            <IoArrowForwardOutline
              color="white"
              size={20}
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
