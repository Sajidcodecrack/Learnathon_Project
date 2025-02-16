import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";
import { toggleVariants } from "./toggle-variants";

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
};

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };