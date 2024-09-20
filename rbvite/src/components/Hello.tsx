import { ReactNode, useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => {
  return (
    <h1>
      {text} {name}
    </h1>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  console.log('ddd');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

type Props = {
  name: string;
  age: number;
  count: number;
  minusCount: () => void;
  plusCount: () => void;
};

export default function Hello({
  name,
  age,
  count,
  minusCount,
  plusCount,
}: Props) {
  const [myState, setMyState] = useState(() => new Date().getTime());
  let v = 1;
  return (
    <>
      <Title text='Hi~' name={name} />
      <Body>
        This is Hello Body Component.{v} - {myState} - {age}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          plusCount();
          console.log('v/myState=', v, myState);
        }}
      >
        Click Here!
      </button>
      {count}
      <button onClick={() => minusCount()}>Minus</button>
    </>
  );
}
