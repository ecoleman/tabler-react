// @flow

import * as React from "react";
import cn from "classnames";
import Form from "./";

type Props = {|
  +className?: string,
  /**
   * Wrap the checkbox with a label
   */
  +label?: string,
  +value?: string | number | boolean,
  +name?: string,
  +checked?: boolean,
  +disabled?: boolean,
  +readOnly?: boolean,
  +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  +isInline?: boolean,
|};

function FormRadio({
  className,
  label,
  value,
  name,
  checked,
  disabled,
  readOnly,
  onChange,
  isInline,
}: Props): React.Node {
  const classes = cn(
    "custom-control custom-radio",
    { "custom-control-inline": isInline },
    className
  );
  const inputComponent = (
    <Form.Input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
    />
  );

  return label ? (
    <label className={classes}>
      {inputComponent}
      <span className="custom-control-label">{label}</span>
    </label>
  ) : (
    inputComponent
  );
}

FormRadio.displayName = "Form.Radio";

export default FormRadio;
