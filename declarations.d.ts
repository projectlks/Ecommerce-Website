// src/declarations.d.ts
declare module '@material-tailwind/react' {
    // You can declare specific components and their props here
    import { FC } from 'react';

    export const Button: FC<{ children: React.ReactNode; className?: string }>;
    export const Input: FC<{ placeholder?: string; className?: string }>;
    // Add other components as needed
}
