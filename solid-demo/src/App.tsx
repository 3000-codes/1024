import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
const [first, setFirst] = createSignal("JSON");
const [last, setLast] = createSignal("Bourne");
createEffect(() => console.log(`${first()} ${last()}`));
const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
