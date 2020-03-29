export interface IProps {
  checked: boolean;
  onChange: Function;
  label?: string;
  type?: string;
  touched?: boolean;
  error?: string;
  name: string;
}