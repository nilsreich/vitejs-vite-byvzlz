import { Component } from 'solid-js';

export const Sidebar: Component = () => {
  return (
    <div class="sticky top-0 flex h-screen flex-col border-l bg-white">
      <div class="flex text-xs tracking-wide">
        <div class="border-r py-1 pl-2 pr-6 font-semibold text-black">
          Bibliohek
        </div>
        <div class="border-r border-b py-1 pl-2 pr-6">Assistent</div>
        <div class="border-b py-1 pl-2 pr-6">Einstellungen</div>
      </div>
    </div>
  );
};
