import React, {
  FunctionComponent,
  MouseEvent,
} from 'react';

import { IProps } from './interfaces';

const Button: FunctionComponent<IProps> = (props: IProps) => {
  const { onClick, children } = props;

  const handleClick = (event: MouseEvent) => {
    onClick();
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
