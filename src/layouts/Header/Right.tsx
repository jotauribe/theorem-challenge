import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
  & > img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }
`;

const Logout = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  margin-top: 3px;
  padding: 0;
  text-decoration: none;
`;

export function Right() {
  return (
    <Container>
      <img src="https://i.pravatar.cc/100?img=69" alt="Avatar of Noel Boyd" />
      <div>
        <div>Noel Boyd</div>
        <Logout>Logout</Logout>
      </div>
    </Container>
  );
}
