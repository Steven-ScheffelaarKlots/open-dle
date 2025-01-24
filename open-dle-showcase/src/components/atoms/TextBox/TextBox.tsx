import React from 'react';
import { useStyles } from './styles';

export interface TextBoxProps {
  color?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ 
  color, 
  placeholder, 
  value, 
  onChange 
}) => {
  const classes = useStyles({ color });

  return (
    <input 
      className={classes.textBox} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default TextBox;