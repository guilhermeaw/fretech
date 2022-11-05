import { forwardRef, LegacyRef } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

export type FormInputProps = {
  label: string;
  helpMessage?: string;
  errorMessage?: string;
  wrapperProps?: FormControlProps;
} & TextareaProps;

export const FormTextarea = forwardRef(
  (
    {
      label,
      helpMessage,
      errorMessage,
      wrapperProps,
      ...props
    }: FormInputProps,
    ref: LegacyRef<HTMLTextAreaElement>,
  ) => {
    return (
      <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
        <FormLabel>{label}</FormLabel>
        <Textarea ref={ref} {...props} />
        {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
        {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  },
);
