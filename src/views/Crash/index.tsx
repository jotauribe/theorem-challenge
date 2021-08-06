import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Card } from "src/Card";

// We avoid using MainLayout here for these reasons:
// - Minimize the risk of crashing again if it was the layout causing the error;
// - Make it very clear to the user that the application crashed by removing most UI elements.
const Layout = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 50px;
  height: 100vh;
`;

const Button = styled(NavLink)`
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  display: inline-block;
  margin: 20px 0;
  padding: 5px 10px;
  text-decoration: none;
`;

const H1 = styled.h1`
  font-size: 28px;
  margin: 0 0 40px;
`;

const Message = styled.div`
  font-size: 18px;
  line-height: 1.4;
  padding: 40px 40px 50px;
`;

const P = styled.p`
  margin: 0;
`;

export function Crash() {
  return (
    <Layout>
      <Card>
        <Message>
          <H1>Honesto error</H1>
          <P>Sorry, our application has crashed.</P>
          <P>
            Please try your operation again or contact our customer service.
          </P>
          <Button to="/">Restart</Button>
        </Message>
      </Card>
    </Layout>
  );
}
