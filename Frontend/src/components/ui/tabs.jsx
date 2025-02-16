import * as React from "react";
import PropTypes from "prop-types"; // For prop type-checking
import * as TabsPrimitive from "@radix-ui/react-tabs"; // Radix UI Tabs primitives
import { cn } from "../../lib/utils"; // Utility function for class names

// Re-exporting Radix UI Tabs Root for easier access
const Tabs = TabsPrimitive.Root;

// TabsList Component
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.propTypes = {
  className: PropTypes.string, // className is optional and should be a string
};
TabsList.displayName = TabsPrimitive.List.displayName;

// TabsTrigger Component
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.propTypes = {
  className: PropTypes.string, // className is optional and should be a string
};
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// TabsContent Component
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.propTypes = {
  className: PropTypes.string, // className is optional and should be a string
};
TabsContent.displayName = TabsPrimitive.Content.displayName;

// Exporting all Tabs-related components
export { Tabs, TabsList, TabsTrigger, TabsContent };