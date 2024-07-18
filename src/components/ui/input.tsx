import * as React from "react";

import { cn } from "@/lib/utils";

import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, required, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <Label className="mb-1 text-base font-bold">
            {label} {required && <span className="text-destructive">*</span>}
          </Label>
        )}
        <div className={cn("relative h-10 w-full", className)}>
          <input
            type={type}
            className={cn(
              "flex h-full w-full rounded-lg  border border-input bg-input px-3 py-2 text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className,
              error && "bg-destructive/30"
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <div className="cursor-pointer absolute right-0 top-0 flex h-full flex-col items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
