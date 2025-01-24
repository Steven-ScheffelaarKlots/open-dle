import React, { useState } from 'react';
import TextBox from '../../atoms/TextBox/TextBox';
import Button from '../../atoms/Button/Button';
import { useStyles } from './styles';

export interface SubmitBoxProps {
    onSubmit: (value: string) => void;
    buttonText: string;
    placeholder?: string;
    color?: string;
    children?: string;
}

const SubmitBox: React.FC<SubmitBoxProps> = ({ 
    onSubmit, 
    buttonText, 
    placeholder, 
    color 
}) => {
    const [value, setValue] = useState('');
    const classes = useStyles({ color });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(value);
        setValue('');
    };

    return (
        <div className={classes.submitBox}>
            <TextBox 
                color={color} 
                placeholder={placeholder} 
                value={value} 
                onChange={handleChange} 
            />
            <Button backgroundColor={color} onClick={handleSubmit}>
                {buttonText}
            </Button>
        </div>
    );
};

export default SubmitBox;