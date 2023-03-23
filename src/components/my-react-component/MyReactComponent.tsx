import * as React from "react";
import { FunctionComponent } from "react";
import { Button } from '@copart/core-components';
import "./MyReactComponent.scss";

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const MyReactComponent: FunctionComponent<IMyComponentProps> = (
  props: IMyComponentProps
) => {
  const { counter: propsCounter, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`my-graph-component`}>
      <div className={"comp-props"}>
        Counter: {propsCounter}
        <Button primary onClick={handleClick}>{'Click to Increase'}</Button>
      </div>
    </div>
  );
};
