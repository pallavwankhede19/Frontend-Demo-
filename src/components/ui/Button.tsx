import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "white" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  /** Show the trailing arrow icon. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = BaseProps & { href: string; external?: boolean };
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLink(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

/** Flat, 4px-radius button. Renders a Next.js Link when `href` is set. */
export function Button(props: ButtonProps) {
  const { variant = "primary", arrow = false, className, children } = props;
  const classes = cn("x-btn", `x-btn--${variant}`, className);
  const content = (
    <>
      {children}
      {arrow ? <Icon name="arrow" /> : null}
    </>
  );

  if (isLink(props)) {
    const { href, external } = props;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      const newTab = href.startsWith("http");
      return (
        <a
          className={classes}
          href={href}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  const {
    variant: _variant,
    arrow: _arrow,
    className: _className,
    children: _children,
    type = "button",
    ...rest
  } = props;
  void _variant;
  void _arrow;
  void _className;
  void _children;
  return (
    <button className={classes} type={type} {...rest}>
      {content}
    </button>
  );
}

interface ButtonGroupProps {
  className?: string;
  children: ReactNode;
}

export function ButtonGroup({ className, children }: ButtonGroupProps) {
  return <div className={cn("x-btns", className)}>{children}</div>;
}

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Accent text link with a trailing arrow, e.g. "Know more →". */
export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link className={cn("x-link", className)} href={href}>
      {children}&nbsp;
      <span className="x-arr" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
