import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h1`
    color: ${props => props.theme.colors.text};
`