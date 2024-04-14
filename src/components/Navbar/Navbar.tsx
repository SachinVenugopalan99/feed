import React, {FC, useCallback} from 'react'
import { NavWrapper } from './Navbar.style';
import SearchBar from '../SearchBar';
import { useTheme } from '../../hooks/useThemeContext';

interface NavBarProps {
 setSearchQuery: any;
 setPage: any;
}

const Navbar:FC<NavBarProps> = ({ setSearchQuery, setPage}) => {

  const {theme, toggleTheme} = useTheme();

  const toggleMode = useCallback(() => {
    toggleTheme();
  },[toggleTheme]);

  return (
    <NavWrapper>
        <SearchBar setSearchQuery={setSearchQuery} setPage={setPage}/>
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
