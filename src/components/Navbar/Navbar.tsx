import React, {FC, useCallback} from 'react'
import { NavWrapper } from './Navbar.style';
import SearchBar from '../SearchBar';
import { useTheme } from '../../hooks/useThemeContext';

interface NavBarProps {
 setSearchQuery: any;
}

const Navbar:FC<NavBarProps> = ({ setSearchQuery}) => {

  const {theme, toggleTheme} = useTheme();

  const toggleMode = useCallback(() => {
    toggleTheme();
  },[toggleTheme]);

  return (
    <NavWrapper>
        <SearchBar setSearchQuery={setSearchQuery}/>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </NavWrapper>
  )
}

export default Navbar
