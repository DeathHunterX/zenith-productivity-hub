import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectHTMLAttributes } from "react";

import {
  ControllerRenderProps,
  FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";

type SelectFieldProps<S extends FieldValues> = {
  nameInSchema: keyof S;
  label: string;
  placeholder?: string;
  className?: string;
  data: { name: string; value: string }[];
} & SelectHTMLAttributes<HTMLInputElement>;

const SelectField = <S extends FieldValues>({
  nameInSchema,
  label,
  placeholder,
  className = "",
  data,
}: SelectFieldProps<S>) => {
  const form = useFormContext<S>();

  return (
    <FormField
      control={form.control}
      name={nameInSchema as Path<S>}
      render={({ field }: { field: ControllerRenderProps<S, Path<S>> }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel
            className="paragraph-small flex items-start"
            htmlFor={nameInSchema as string}
          >
            {label}
          </FormLabel>
          <Select {...field} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger
                id={nameInSchema as Path<S>}
                className={`w-full ${className}`}
              >
                <SelectValue placeholder={placeholder ?? "Choose..."} />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {data.map((item) => (
                <SelectItem
                  key={`${nameInSchema as Path<S>}_${item.value}`}
                  value={item.value}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
          <FormMessage className="text-left" />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
