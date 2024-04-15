import React, {FC, useCallback, memo} from 'react'
import { NavWrapper } from './Navbar.style';
import SearchBar from '../SearchBar';
import { useTheme } from '../../hooks/useThemeContext';

interface NavBarProps {
 setSearchQuery?: any;
 setPage?: any;
 hideSearch?: boolean;
 setIncludedPages?: any;
}

const Navbar:FC<NavBarProps> = ({ setSearchQuery, setPage, hideSearch= false, setIncludedPages}) => {

  const {theme, toggleTheme} = useTheme();

  const toggleMode = useCallback(() => {
    toggleTheme();
  },[toggleTheme]);

  return (
    <NavWrapper>
      {!hideSearch ? <SearchBar setSearchQuery={setSearchQuery} setIncludedPages={setIncludedPages} setPage={setPage}/> : null}
      <div className="mode-switch">
      <label htmlFor='switch'>
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={theme === "dark"}
            id='switch'
          />
          <span className="slider round"></span>
          <span className='sliderText'>{theme === "dark" ? 'Dark' : 'Light'}</span>
        </label>
      </div>
    </NavWrapper>
  )
}

export default memo(Navbar)
