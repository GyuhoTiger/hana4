import { FormEvent } from 'react';

export default function Login({ login }: { login: () => void }) {
  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };
  return (
    <form onSubmit={signIn}>
      ID:{' '}
      <input
        id='id'
        type='text'
        placeholder='Name...'
        onChange={(e) => (id = e.currentTarget.value)}
      />
      Name:
      <input
        id='name'
        type='password'
        autoComplete='off'
        placeholder='Password...'
      />
      <button>Sign In</button>
    </form>
  );
}
