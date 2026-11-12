import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BaseFieldProps {
  label: string;
  name: string;
  error?: string;
}

type InputFieldProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

type FormFieldProps = InputFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, name, error, as = "input", className, ...rest } = props;
  const errorId = `${name}-error`;

  const sharedClasses = cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600/40",
    error ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-blue-600",
    className
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={cn(sharedClasses, "min-h-32 resize-none")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={sharedClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error ? (
        <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
