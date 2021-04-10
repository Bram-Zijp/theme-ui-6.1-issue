import React from "react";
import { ThemeProvider, Box } from "theme-ui";
import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonX: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      <Box
        sx={(theme: any) => {
          console.log(theme);
          return {};
        }}
      ></Box>
      {label}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ThemeProvider
      theme={{
        fontSizes: [1, 2, 3],
        space: [1, 2, 3],
      }}
    >
      <ButtonX {...props} />
    </ThemeProvider>
  );
};
