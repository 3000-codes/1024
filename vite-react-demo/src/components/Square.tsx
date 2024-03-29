type SquareProps = {
  value: string|null;
  onClick: () => void;
}

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}