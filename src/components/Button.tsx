import styled from "styled-components";

export const Button = styled.button<{ color?: string, fontSize?: string }>`
  padding: 15px 35px;
  border-radius: 20px;
  background: ${props => props.color || "#2157f2"};
  color: white;
  font-size: ${props => props.fontSize};
  text-transform: uppercase;
`
