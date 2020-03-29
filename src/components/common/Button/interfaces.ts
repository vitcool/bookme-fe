import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IProps {
  children: Array<boolean | JSX.Element> | JSX.Element | String;
  onClick?: Function;
  disabled?: boolean;
  pending?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
