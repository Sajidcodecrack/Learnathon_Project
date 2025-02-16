import * as React from "react";
import PropTypes from "prop-types";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider } from "react-hook-form";
import { cn } from "../../lib/utils"; // Utility for class name concatenation
import { Label } from "./label"; // Label component
import { useFormField } from "../../hooks/use-form-field"; // Custom hook for form field
import { FormFieldContext, FormItemContext } from "./form-context"; // Context providers

// Form Component (re-exporting FormProvider)
const Form = FormProvider;
Form.displayName = "Form";

// FormField Component
const FormField = ({ name, control, defaultValue, rules, render, ...props }) => {
  // Memoize the context value to prevent unnecessary re-renders
  const formFieldContextValue = React.useMemo(() => ({ name }), [name]);

  return (
    <FormFieldContext.Provider value={formFieldContextValue}>
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
  name: PropTypes.string.isRequired, // Field name is required
  control: PropTypes.object, // Control object from react-hook-form
  defaultValue: PropTypes.any, // Default value for the field
  rules: PropTypes.object, // Validation rules
  render: PropTypes.func.isRequired, // Render function is required
};

// FormItem Component
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  // Memoize the context value to prevent unnecessary re-renders
  const formItemContextValue = React.useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={formItemContextValue}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.propTypes = {
  className: PropTypes.string, // Optional className
};
FormItem.displayName = "FormItem";

// FormLabel Component
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
  className: PropTypes.string, // Optional className
};
FormLabel.displayName = "FormLabel";

// FormControl Component
const FormControl = React.forwardRef((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

// FormDescription Component
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
  className: PropTypes.string, // Optional className
};
FormDescription.displayName = "FormDescription";

// FormMessage Component
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  // Don't render if there's no message
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
  className: PropTypes.string, // Optional className
  children: PropTypes.node, // Optional children
};
FormMessage.displayName = "FormMessage";

// Export all components
export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};