import React from 'react'
import { TileBackground } from './Tile.style'

interface TileProps {
  bgColor?: string
}

const Tile: React.FC<TileProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => (
  <TileBackground {...rest}>
    <div>
      {children}
    </div>
  </TileBackground>
)

export default Tile