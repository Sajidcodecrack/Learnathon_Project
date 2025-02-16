import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types"; // For prop type validation
import { cn } from "../../lib/utils"; // Utility for class name concatenation

// Root Accordion component
const Accordion = AccordionPrimitive.Root;

// AccordionItem component
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)} // Add border and custom classes
    {...props}
  />
));

// Prop type validation for AccordionItem
AccordionItem.propTypes = {
  className: PropTypes.string, // Optional className
  children: PropTypes.node, // Optional children
};

// Display name for debugging
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger component
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children} {/* Trigger content */}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

// Prop type validation for AccordionTrigger
AccordionTrigger.propTypes = {
  className: PropTypes.string, // Optional className
  children: PropTypes.node.isRequired, // Children is required
};

// Display name for debugging
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent component
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

// Prop type validation for AccordionContent
AccordionContent.propTypes = {
  className: PropTypes.string, // Optional className
  children: PropTypes.node.isRequired, // Children is required
};

// Display name for debugging
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Export all components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };