import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../services/userService";
import styled from "styled-components";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUserById(id);
        if (userData) {
          setUser(userData);
        } else {
          setError("User not found");
        }
      } catch (err) {
        setError("Error fetching user details");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) return <Message>Loading user details...</Message>;
  if (error) return <Message>{error}</Message>;
  if (!user) return <Message>No user details available.</Message>;

  return (
    <Container>
      <Card>
        <ImageContainer>
          <Image
            src={user.image || "/default-user.png"}
            alt={`${user.firstName} ${user.lastName}`}
          />
        </ImageContainer>
        <Info>
          <UserName>
            {user.firstName} {user.lastName}
          </UserName>
          <UserDetail>
            <strong>SSN:</strong> {user.ssn}
          </UserDetail>
          <UserDetail>
            <strong>Email:</strong> {user.email}
          </UserDetail>
        </Info>
      </Card>
    </Container>
  );
};

export default UserDetails;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const UserDetail = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #555;
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
`;
