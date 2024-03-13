import styled from "styled-components";
import {theme} from "../styles/Theme.styled";

export const MainTitle = styled.h1`
  max-width: 600px;
  font-size: 60px;
  font-weight: 700;
  line-height: 136%;
  margin-bottom: 19px;

  span {
    color: ${theme.colors.secondary};
  }

  @media (max-width: 425px) {
    font-size: 34px;
  }
`
