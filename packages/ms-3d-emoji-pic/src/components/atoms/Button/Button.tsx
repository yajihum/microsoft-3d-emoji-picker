import clsx from "clsx";
import React, { forwardRef } from "react";

type Props = { className: string } & React.ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>(function ButtonBase(
  { className, children, ...props },
  ref
) {
  return children ? (
    <button {...props} ref={ref} className={clsx(className, "p-1")}>
      {children}
    </button>
  ) : (
    <button {...props} ref={ref} className={clsx(className, "p-1")} />
  );
});
