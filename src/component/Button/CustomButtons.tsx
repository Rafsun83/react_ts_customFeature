import clsx from 'clsx';
import React, { MouseEvent, PropsWithChildren, ReactElement } from 'react';
interface ButtonProps {
    style?: object;
    size?: string;
    variant?: string;
    className?: string;
    LeadingIcon?: ReactElement;
    TrailingIcon?: ReactElement;
    IconOnly?: ReactElement;
    isLoading?: boolean;
    disabled?: boolean;
    type?: 'reset' | 'button' | 'submit';
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

  }


const CustomButtons = ({ onClick, className, variant, type, disabled, isLoading,children, ...props }: PropsWithChildren<ButtonProps>) => {
    const classNames = clsx('buttonclass', className, `btn  btn-${variant}`)
    return (
        <button type={type} className={classNames} disabled={disabled} {...props}>
            {isLoading ? (
        <></>
        //   <LoadingIcon className="animate-spin" style={{ fill: 'inherit' }} />
        ) : (
          children
        )}
      </button>
    );
};

export default CustomButtons;