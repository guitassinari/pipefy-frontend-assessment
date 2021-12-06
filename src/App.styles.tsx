import styled from 'styled-components'
import Breakpoints from 'utils/breakpoints'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const MainContent = styled.main`
  padding: 0 30px;
  max-width: ${Breakpoints.EXTRA_LARGE}px;

  @media(min-width: ${Breakpoints.EXTRA_LARGE}px) {
    padding: 0
  }
`