import { HTMLAttributes, ReactNode } from 'react';

type FormContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLFormElement>;

export const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <form
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '1rem',
        margin: '1rem 0',
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
