import { Control, Controller, ControllerRenderProps } from 'react-hook-form';
import Select, {
  Props,
  GroupBase,
  OnChangeValue,
  PropsValue,
  MultiValue,
} from 'react-select';

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
  Option extends FormSelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  label,
  helpMessage,
  errorMessage,
  wrapperProps,
  control,
  name,
  options,
  ...props
}: FormSelectProps<Option, IsMulti, Group>) => {
  const getValue = (field: ControllerRenderProps<any, string>) => {
    const fieldValue = field.value;

    if (props.isMulti) {
      return options?.filter(option => {
        const { value: optionValue } = option as Option;
        return fieldValue?.includes(optionValue);
      }) as PropsValue<Option> | undefined;
    }

    return options?.find(option => {
      const { value: optionValue } = option as Option;
      return optionValue === fieldValue;
    }) as Option | undefined;
  };

  const onChangeValue = (
    selectedOption: OnChangeValue<FormSelectOption, IsMulti>,
    field: ControllerRenderProps<any, string>,
  ) => {
    if (Array.isArray(selectedOption)) {
      const selectedValues = (
        selectedOption as MultiValue<FormSelectOption>
      ).map((option: FormSelectOption) => option.value);

      field.onChange(selectedValues);
      return;
    }

    field.onChange((selectedOption as FormSelectOption).value);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate: value => !!value }}
      render={({ field }) => (
        <FormControl my="1rem" isInvalid={!!errorMessage} {...wrapperProps}>
          <FormLabel>{label}</FormLabel>
          <Select
            noOptionsMessage={() => 'Sem opções'}
            {...field}
            {...props}
            options={options}
            value={getValue(field)}
            onChange={selectedOption => onChangeValue(selectedOption, field)}
          />

          {!!helpMessage && <FormHelperText>{helpMessage}</FormHelperText>}
          {!!errorMessage && (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};
