/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, memo } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from '../../assets/search-icon.svg';
import { debounce } from "../../utils/util";

// Types
type Props = {
  setSearchQuery: any;
  setPage: any;
  setIncludedPages: any;
}

const SearchBar: React.FC<Props> = ({ setSearchQuery, setPage, setIncludedPages }) => {

const handleResult = (val: any) => {
     console.log(val);
      setSearchQuery(val);
      if (val) {
      setPage(1);
      setIncludedPages({})
      }
}

  const handleSearch = useCallback(debounce((inputVal: any) => handleResult(inputVal), 500), []);


  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search "
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Search"          
            />
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default memo(SearchBar);
