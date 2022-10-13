import { ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RadioGroup, Stack, RadioProps } from '@chakra-ui/react';

type FormRadioGroupProps = {
  control: Control<any>;
  defaultValue: string;
  name: string;
  children: ReactElement<RadioProps>[] | ReactElement<RadioProps>;
};

export const FormRadioGroup = ({
  control,
  defaultValue,
  name,
  children,
}: FormRadioGroupProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
        >
          <Stack direction={['column', 'row']} my="4" spacing={4}>
            {children}
          </Stack>
        </RadioGroup>
      )}
    />
  );
};
