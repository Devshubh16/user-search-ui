import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import UserDetails from "./pages/UserDetails";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Container>
        <Header>
          <h2>User Search</h2>
          <SearchBar />
        </Header>
        <Routes>
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`;
