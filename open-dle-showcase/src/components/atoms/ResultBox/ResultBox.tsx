import React from 'react';
import { useStyles } from './styles';

export interface ResultBoxProps {
    backgroundColor?: string;
    children: React.ReactNode;
}

const ResultBox: React.FC<ResultBoxProps> = ({ 
    children, 
    backgroundColor,
    ...props
}) => {
    const classes = useStyles({
        backgroundColor
    });

    return (
        <div className={classes.resultBox} {...props}>
            {children}
        </div>
    );
};

export default ResultBox;