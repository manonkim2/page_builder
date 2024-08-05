import { Flex, Text } from "@manon/react-components-layout";
import { vars } from "@manon/themes";

export type FormFieldWrapperProps = {
  label: string;
  isRequired?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { label, isRequired, children, ...rest } = props;

  return (
    <label {...rest}>
      <Flex padding={2} gap={8} className="w-full">
        <Text fontSize="sm">
          {label}
          {isRequired && (
            <span style={{ color: vars.colors.$static.light.red[500] }}>*</span>
          )}
        </Text>
        {children}
      </Flex>
    </label>
  );
};

export default FormFieldWrapper;
