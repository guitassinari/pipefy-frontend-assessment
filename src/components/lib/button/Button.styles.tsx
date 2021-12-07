import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  border: none;
  background: none;
  background-color: green;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.75);
  transition: 200ms;

  &:hover {
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.57);
  }
`