import { Component, createSignal } from 'solid-js';
import { Rail } from './Rail';

export const App: Component = () => {
  const [view, setView] = createSignal('');

  const handleClick = (value: string) => {
    setView(value);
  };

  return (
    <>
      <div class="flex">
        <Rail parentCallback={handleClick} />
        {view()}
      </div>
    </>
  );
};
