import { useState, createContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  return (
    <MenuContext.Provider
      value={{ cartLength, setCartLength, menuOpen, setMenuOpen }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export const getCartLength = async optionChoice => {
  const res = await fetch('http://10.58.52.200:3000/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('login-token'),
    },
    body: JSON.stringify({
      productOptionId: optionChoice,
      quantity: 1,
    }),
  });

  const data = await res.json();
  return data;
};
