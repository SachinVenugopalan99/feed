import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import { CiSearch } from "react-icons/ci";
// Types
type Props = {
  setSearchQuery: any;
  setPage: any;
}

const SearchBar: React.FC<Props> = ({ setSearchQuery, setPage }) => {
  const [state, setState] = useState("");
  const handleChange = (e:any) => {
    setState(e.currentTarget.value);
  };

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchQuery(state);
      setPage(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setSearchQuery, state, setPage]);

  return (
    <React.Fragment>
      <Wrapper>
        <Content>
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
