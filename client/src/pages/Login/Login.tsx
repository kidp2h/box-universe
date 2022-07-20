import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
  IoArrowForwardOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import '@styles/AuthLayout.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '@validations/LoginSchema';

type Inputs = { username: string; password: string };
const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    navigate('/');
  };
  const [isHidden, setHidden] = useState<boolean>(true);
  const handleInspectPassword = () => {
    setHidden(!isHidden);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-full w-8/12 lg:w-full">
      <FormGroup className="mb-5">
        <label
          htmlFor="username"
          className="text-white select-none text-xl uppercase flex flex-row items-center mb-5 ">
          Username
        </label>

        <div className="relative w-fit">
          {errors.username && (
            <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
              {errors.username.message}
            </span>
          )}
          <input
            {...register('username')}
            name="username"
            placeholder="username"
            id="username"
            className={`placeholder:select-none neon ${
              errors.username && 'error'
            } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
            autoComplete="off"
            spellCheck="false"
          />
          <IoPersonOutline
            color="white"
            className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
              errors.username ? 'text-red-500' : 'text-purple-500'
            }`}
            size={20}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <label
          htmlFor="password"
          className="text-white select-none text-xl uppercase flex flex-row items-center mb-5">
          Password
        </label>
        <div className="relative w-fit">
          {errors.password && (
            <span className="text-red-500 mb-0 text-sm absolute -top-6 left-0 bg-transparent">
              {errors.password.message}
            </span>
          )}
          {isHidden ? (
            <IoEyeOutline
              color="white"
              size={20}
              className={`cursor-pointer ${
                errors.password ? 'text-red-500' : 'text-purple-500'
              } absolute top-1/2 right-5 transform -translate-y-1/2`}
              onClick={handleInspectPassword}
            />
          ) : (
            <IoEyeOffOutline
              color="white"
              size={20}
              className={`cursor-pointer ${
                errors.password ? 'text-red-500' : 'text-purple-500'
              } absolute top-1/2 right-5 transform -translate-y-1/2`}
              onClick={handleInspectPassword}
            />
          )}
          <input
            {...register('password')}
            name="password"
            placeholder="Password"
            type={isHidden ? 'password' : 'text'}
            id="password"
            className={`placeholder:select-none neon ${
              errors.password && 'error'
            } text-lg align-middle placeholder:text-sm placeholder:uppercase w-60 h-12 bg-transparent rounded-lg focus: outline-0  pl-10 pr-12 border-purple-500`}
            autoComplete="off"
            spellCheck="false"
          />
          <IoKeyOutline
            color="white"
            className={`absolute top-1/2 transform -translate-y-1/2 ml-3 ${
              errors.password ? 'text-red-500' : 'text-purple-500'
            }`}
            size={20}
          />
        </div>
      </FormGroup>
      <FormGroup className="flex flex-row justify-self-start self-start mt-5">
        <FormControlLabel
          control={<Checkbox defaultChecked className="text-purple-500" />}
          label={
            <Typography variant="inherit" color="white">
              Remember password
            </Typography>
          }
          className="text-white text-xs"
        />
      </FormGroup>
      <FormGroup className="mt-5 h-fit justify-self-start self-start ">
        <div className="buttonIcon relative hover:bg-purple-500 rounded-lg ">
          <input
            type="submit"
            className="w-16 h-16 border-purple-500 rounded-lg btnNeon text-transparent hover:bg-purple-500 cursor-pointer "
          />
          <IoArrowForwardOutline
            color="white"
            size={20}
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
          />
        </div>
      </FormGroup>
      <FormGroup className="flex flex-row text-xs mt-3 self-start">
        <span className="mr-2 text-white">Don&apos;t have account ?</span>
        <Link to="/auth/register" className="text-red-500 uppercase">
          Register now
        </Link>
      </FormGroup>
    </form>
  );
};

export default Login;
