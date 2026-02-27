import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface DoodleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> {
  variant?: "nav" | "cta";
  children: React.ReactNode;
  href?: string;
}

export function DoodleButton({ variant = "cta", children, className = "", href, onClick, ...props }: DoodleButtonProps) {
  const baseClasses =
    "doodle-border doodle-shadow doodle-shadow-hover doodle-shadow-active bg-sw-blue text-white font-heading rounded-full";

  const variantClasses = {
    nav: "hidden md:block font-semibold px-6 py-2",
    cta: "font-bold text-xl px-10 py-5 inline-flex items-center gap-3",
  };

  const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
        {variant === "cta" && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
      {variant === "cta" && <ArrowIcon />}
    </button>
  );
}
