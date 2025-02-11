import React from 'react';
import { useStyles } from './styles';

export interface ButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  backgroundColor,
  size,
  ...props
}) => {
  const classes = useStyles({
    backgroundColor,
    size
  });

  return (
    <button className={classes.button} {...props}>
      {props.label || children}
    </button>
  );
};

export default Button;