import styled from 'styled-components'


interface TileProps {
  bgColor?: string
}

export const Tile = styled.div<TileProps>`
  background-color: ${props => (props.bgColor ? props.bgColor : '#c7c7c7')};
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  position: relative;

  &:before {
    content: '';
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`