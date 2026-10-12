import "./Button.scss";

const Button = ({
  variant = "primary",
  href,
  type = "button",
  className = "",
  children,
  ...props
}) => {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
