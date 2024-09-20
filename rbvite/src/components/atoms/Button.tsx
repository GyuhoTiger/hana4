type Props = {
  text: string;
};

export default function Button({ text, variant }: Props) {
  return <button className={`btn ${variant} ${classNames}`}>{text}</button>;
}
