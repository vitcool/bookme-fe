export interface IProps {
  value: string;
  onChange: Function;
  label?: string;
  type?: string;
  touched?: boolean;
  error?: string;
  name: string;
  placeholder?: string;
}
