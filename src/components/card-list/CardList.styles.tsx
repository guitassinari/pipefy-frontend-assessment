import styled from 'styled-components'
import Breakpoints from 'utils/breakpoints'

export const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media(min-width: ${Breakpoints.X_SMALL}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: ${Breakpoints.MEDIUM}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`