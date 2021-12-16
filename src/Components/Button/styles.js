import styled from "styled-components";

export const BtnContainer = styled.button`
  width: ${({ width }) => width || "100%"};
  margin: 0 auto;
  background-color: ${({ bgColor }) => bgColor || "#2994FF"};
  color: ${({ color }) => color || "#ffff"};
  border-radius: 5px;
  padding: ${({ padding }) => padding || "20px 5px"};
  outline: none;
  border: ${({ border }) => border || "none"};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
