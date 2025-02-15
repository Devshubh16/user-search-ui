import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

// Lazy load UserDetails
const UserDetails = lazy(() => import("./pages/UserDetails"));

const App = () => {
  return (
    <Router>
      <Container>
        <Header>
          <h2>User Search</h2>
          <SearchBar />
        </Header>
        <Routes>
          <Route
            path="/user/:id"
            element={
              <Suspense fallback={<Message>Loading user details...</Message>}>
                <UserDetails />
              </Suspense>
            }
          />
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

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
`;
