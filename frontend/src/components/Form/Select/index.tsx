import { Control, Controller } from 'react-hook-form';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
  SelectProps,
} from '@chakra-ui/react';

export type FormSelectProps = {
  label: string;
  name: string;
  control: Control<any>;
  helpMessage?: string;
  errorMessage?: string;
  wrapperProps?: FormControlProps;
  options: { value: string; label: string }[];
} & SelectProps;

export const FormSelect = ({
  label,
  helpMessage,
  errorMessage,
  wrapperProps,
  options,
  control,
  name,
  ...props
}: FormSelectProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate: value => !!value }}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
          <FormLabel>{label}</FormLabel>
          <Select
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>

          {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
          {!!errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};
