import * as React from 'react';

interface Props {
  /** this dictates what the button will say  */
  bg: string;
  /** this dictates what the button will do  */
  onClick: Function;
  /**
   * Disables onclick
   *
   * @default 🤷‍♀️
   **/
  children: React.ReactNode;
}

export const Button = ({ bg, children }: Props) => (
  <button style={{ backgroundColor: bg }}> {children}</button>
);