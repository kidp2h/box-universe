import React, { ReactNode } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type Props<T> = {
  label: Path<T>;
  icon: ReactNode;
  option: any;
  type: string;
  min?: number;
  max?: number;
  required?: boolean;
  register: UseFormRegister<T>;
};

const InputIcon = ({
  label,
  icon,
  option,
  type,
  min,
  max,
  required,
  register,
  ...rest
}: Props<T>) => {
  const x = 5;
  return (
    <div className="inputIcon relative">
      <input {...rest} {...register(label, { required })} />

      {icon}
    </div>
  );
};

export default React.memo(InputIcon);
