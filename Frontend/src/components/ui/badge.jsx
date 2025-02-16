import PropTypes from "prop-types";
import { cn } from "../../lib/utils";
import { badgeVariants } from "./badge-variants";

function Badge({ className, variant, children, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "secondary", "destructive", "outline"]),
  children: PropTypes.node.isRequired
};

export { Badge };