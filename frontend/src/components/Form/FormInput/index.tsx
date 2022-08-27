import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';

export type FormInputProps = {
  label: string;
  helpMessage?: string;
  wrapperProps?: FormControlProps;
} & InputProps;

export const FormInput = ({
  label,
  helpMessage,
  wrapperProps,
  ...props
}: FormInputProps) => {
  return (
    <FormControl {...wrapperProps}>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
      {helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
    </FormControl>
  );
};
