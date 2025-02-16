import * as React from "react";
import PropTypes from "prop-types";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Label } from "./label";
import { useFormField } from "../../hooks/use-form-field";
import { FormFieldContext, FormItemContext } from "./form-context";

const Form = FormProvider;
Form.displayName = "Form";

const FormField = ({ name, control, defaultValue, rules, render, ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={render}
        {...props}
      />
    </FormFieldContext.Provider>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.object,
  render: PropTypes.func.isRequired
};

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.propTypes = {
  className: PropTypes.string
};
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});

FormLabel.propTypes = {
  className: PropTypes.string
};
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});

FormDescription.propTypes = {
  className: PropTypes.string
};
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
};