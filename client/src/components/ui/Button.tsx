import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",

        secondary:
          "bg-violet-600 text-white hover:bg-violet-700 shadow-sm hover:shadow-md",

        outline:
          "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",

        ghost:
          "text-slate-700 hover:bg-slate-100",

        danger:
          "bg-rose-600 text-white hover:bg-rose-700",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "size">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.25"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>

            Loading...
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;