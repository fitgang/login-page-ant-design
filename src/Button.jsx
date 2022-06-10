import { Button } from "antd";

export function PrimaryButton(props) {
  const {text, ...otherProps} = props;

  const priColor = "#023047";

  return (
    <Button
      type="primary"
      size="large"
      {...otherProps}
      style={{
        backgroundColor: priColor,
        borderColor: priColor
      }}
    >
      {props.text}
    </Button>
  );
}

export function SecondaryButton(props) {
  const {text, ...otherProps} = props;

  const secColor = "#fb8500";

  return (
    <Button
      type="primary"
      size="large"
      {...otherProps}
      style={{
        backgroundColor: secColor,
        borderColor: secColor
      }}
    >
      {props.text}
    </Button>
  );
}
