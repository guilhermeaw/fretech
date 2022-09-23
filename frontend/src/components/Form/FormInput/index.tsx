import { forwardRef, LegacyRef } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';

export type FormInputProps = {
  label: string;
  helpMessage?: string;
  errorMessage?: string;
  wrapperProps?: FormControlProps;
  mask?: string | Array<string | RegExp>;
} & InputProps;

export const FormInput = forwardRef(
  (
    {
      label,
      helpMessage,
      errorMessage,
      wrapperProps,
      ...props
    }: FormInputProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    return (
      <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
        <FormLabel>{label}</FormLabel>
        <Input ref={ref} {...props} />
        {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
        {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  },
);
