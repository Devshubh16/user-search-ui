import React, { useState } from "react";
import styled from "styled-components";
import { fetchUsers, fetchUserById } from "../services/userService";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();

  // Fetch users when debouncedQuery changes
  React.useEffect(() => {
    const fetchData = async () => {
      if (debouncedQuery.length >= 3) {
        const results = await fetchUsers(debouncedQuery);
        setUsers(results);
      } else {
        setUsers([]);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  // Navigate to user details page on selection
  const handleSelectUser = (userId) => {
    navigate(`/user/${userId}`);
    setQuery(""); // Clear search
    setUsers([]); // Hide dropdown
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {users.length > 0 && (
        <Dropdown>
          {users.map((user) => (
            <DropdownItem
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
            >
              {user.firstName} {user.lastName} ({user.ssn})
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

// Styled Components
const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 250px;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure it stays above other elements */
  border-radius: 4px;
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;
