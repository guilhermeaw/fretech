import { forwardRef, LegacyRef, ReactNode } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from '@chakra-ui/react';

export type FormInputProps = {
  label: string;
  rightAddon?: ReactNode;
  helpMessage?: string;
  errorMessage?: string;
  wrapperProps?: FormControlProps;
} & InputProps;

export const FormInput = forwardRef(
  (
    {
      label,
      helpMessage,
      errorMessage,
      wrapperProps,
      rightAddon,
      ...props
    }: FormInputProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => {
    return (
      <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <Input ref={ref} {...props} />
          {!!rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
        </InputGroup>

        {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
        {!!errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    );
  },
);
