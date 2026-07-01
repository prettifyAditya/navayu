"use client"
import Link from "next/link";

const Button = ({
  href,
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "btn-primary",
  target = "_self",
  rel = "noopener noreferrer",
}) => {
  const classes = `btn ${variant} ${className}`.trim();

  return href ? (
    <Link href={href} className={classes} target={target} rel={rel}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
