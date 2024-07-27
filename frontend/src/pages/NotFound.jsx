import React, { useEffect } from "react";
import styled from "styled-components";
import { usePageStyle } from "../components/PageContext/PageStyleContext";

const StyledDiv = styled.div`
  color: #00b497;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height for centering */
`;
const StyledH1 = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 8px;
`;

function NotFound() {
  const { setPageStyle } = usePageStyle();

  useEffect(() => {
    document.body.classList.add("auth-body");
    setPageStyle("auth-body");
    return () => {
      document.body.classList.remove("auth-body");
      setPageStyle("");
    };
  }, [setPageStyle]);

  return (
    <StyledDiv>
      <StyledH1>404 Not Found</StyledH1>
      <p>The page you are looking for does not exist!</p>
    </StyledDiv>
  );
}

export default NotFound;
