import { Control, Controller } from 'react-hook-form';
import Select, { Props, GroupBase } from 'react-select';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

export type FormSelectOption = {
  value: string;
  label: string;
};

export type FormSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group> & {
  label: string;
  name: string;
  control: Control<any>;
  helpMessage?: string;
  errorMessage?: string;
  wrapperProps?: FormControlProps;
};

export const FormSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  label,
  helpMessage,
  errorMessage,
  wrapperProps,
  control,
  name,
  ...props
}: FormSelectProps<Option, IsMulti, Group>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate: value => !!value }}
      render={({ field }) => (
        <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
          <FormLabel>{label}</FormLabel>
          <Select noOptionsMessage={() => 'Sem opções'} {...field} {...props} />

          {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
          {!!errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};
