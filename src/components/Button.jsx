import { useButton } from "react-aria";
import { useRef } from "react";

function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref} className={props.className}>
      {children}
    </button>
  );
}

export default Button;
