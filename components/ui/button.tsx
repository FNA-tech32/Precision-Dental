import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

interface LinkButtonProps extends SharedProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

interface NativeButtonProps
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary:
    "bg-teal-500 text-white shadow-sm shadow-teal-500/20 hover:bg-teal-600 focus-visible:outline-teal-500",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-blue-600 hover:text-blue-700 focus-visible:outline-blue-600",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:outline-blue-600",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]";

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, icon } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (isLinkButton(props)) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        aria-label={props["aria-label"]}
        className={classes}
      >
        {children}
        {icon}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped from nativeProps on purpose
  const { variant: _v, size: _s, icon: _i, href: _h, ...nativeProps } = props;
  return (
    <button {...nativeProps} className={classes}>
      {children}
      {icon}
    </button>
  );
}
