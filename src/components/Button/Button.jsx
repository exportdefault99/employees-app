import classNames from 'classnames';

import './Button.scss';

const Button = ({ isActive, children, ...props }) => {

  const btnClasses = classNames('btn', { 'active': isActive });

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;