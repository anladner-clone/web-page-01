import { useState } from 'react';
import style from './MenuButton.module.css'

export const MenuButton = () => {
  const [active, setActive] = useState(false);

  const activeNav = (state) => {
    const nav = document.getElementById('navMenu')
    nav.classList.toggle('nav--active')
    setActive(state)
  }

  return (
    <button id='btn-menu' className={style['btn-menu']} onClick={() => activeNav(!active)}>
      {active ? (
        <svg aria-hidden="true"
          width="30" height="30" fill="currentColor"
          viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
            clip-rule="evenodd" />
        </svg>

      ) : (
        <svg aria-hidden="true"
          width="30" height="30" fill="currentColor"
          viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
            clip-rule="evenodd" />
        </svg>

      )}
    </button>
  );
}