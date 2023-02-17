import { useState, createContext } from 'react';
export const MenuContext = createContext();
export const MenuProvider = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const token = localStorage.getItem(‘login-token’);
  return (
    <MenuContext.Provider value={[menuOpen, setMenuOpen]}>
      {props.children}
    </MenuContext.Provider>
  );
};
