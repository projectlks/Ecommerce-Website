declare module '@material-tailwind/react' {
    import React from 'react';

    // Button Props interface
    export interface ButtonProps {
        variant?: 'filled' | 'outlined' | 'text'; // Define button variants
        color?: string; // Optional color prop; you can specify allowed colors if needed
        onClick?: React.MouseEventHandler<HTMLButtonElement>; // Better typing for the onClick event
        children: React.ReactNode; // Content of the button
        className?: string; // Additional classes for styling
        disabled?: boolean; // Disable button option
        // Add any additional props here as needed
    }

    // IconButton Props interface
    export interface IconButtonProps extends ButtonProps {
    
    }

    // Export Button component
    export const Button: React.FC<ButtonProps>;

    // Export IconButton component
    export const IconButton: React.FC<IconButtonProps>;
}
