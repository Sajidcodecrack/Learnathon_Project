import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import PropTypes from "prop-types"; // For prop type validation
import { cn } from "../../lib/utils"; // Utility for class name concatenation
import { toggleVariants } from "./toggle-variants"; // Custom toggle variants

// Toggle Component
const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))} // Apply dynamic styles
    {...props}
  />
));

// Prop type validation for Toggle
Toggle.propTypes = {
  className: PropTypes.string, // Optional className
  variant: PropTypes.oneOf(["default", "outline"]), // Variant options
  size: PropTypes.oneOf(["default", "sm", "lg"]), // Size options
};

// Display name for debugging
Toggle.displayName = TogglePrimitive.Root.displayName;

// Export the Toggle component
export { Toggle };