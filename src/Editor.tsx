import { Component } from 'solid-js';
import { Toolbar } from './Toolbar';
import { Sidebar } from './Sidebar';

export const Editor: Component = () => {
  return (
    <div class="bg-gray-300 grow">
      <Toolbar />
      <div class="flex grow">
        <div class="flex grow h-[2000px] bg-neutral-200">
          <div class="mx-auto mt-20 w-full max-w-5xl grow bg-white p-20 text-black shadow">
            Content
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
