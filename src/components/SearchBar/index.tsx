import React, { useState, useEffect, useRef, useCallback } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from '../../assets/search-icon.svg';
// Types
type Props = {
  setSearchQuery: any;
  setPage: any;
  setIncludedPages: any;
}

const SearchBar: React.FC<Props> = ({ setSearchQuery, setPage, setIncludedPages }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return (...args: any) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

const handleSearch = (val: any) => {
      setSearchQuery(val);
      if (val) {
      setPage(1);
      setIncludedPages({})
      }
}

    const s = debounce(handleSearch, 1500);

    const handleChange = (event: any) => {
    const { value } = event.target;
    setState(value);
    s(value);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search "
            onChange={handleChange}
            value={state}
          />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default SearchBar;
