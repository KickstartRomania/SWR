import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

interface DoodleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href" | "onClick"> {
  variant?: "nav" | "cta";
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  target?: string;
  rel?: string;
}

export function DoodleButton({
  variant = "cta",
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  ...props
}: DoodleButtonProps) {
  const baseClasses =
    "doodle-border doodle-shadow doodle-shadow-hover doodle-shadow-active bg-sw-blue text-white font-heading rounded-full cursor-pointer";

  const variantClasses = {
    nav: "hidden md:block font-semibold px-6 py-2",
    cta: "font-bold text-xl px-10 py-5 inline-flex items-center gap-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
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
