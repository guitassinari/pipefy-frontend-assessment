import styled from 'styled-components';
import Breakpoints from 'utils/breakpoints';

export const ModalCard = styled.div`
  display: flex;
  padding: 30px 50px;
  background-color: white;
  border-radius: 30px;

  min-height: 100px;
  min-width: 300px;

  @media(min-width: ${Breakpoints.SMALL}px) {
    font-size: 18px;
    padding: 50px 80px;
    min-height: 200px;
    min-width: 500px;
  }

  @media(min-width: ${Breakpoints.MEDIUM}px) {
    font-size: 24px;
    padding: 60px 100px;
    min-height: 300px;
    min-width: 600px;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-grow: 1;
`

export const ModalActionsFooter = styled.div`
  display: flex;
  align-items: flex-end;
`