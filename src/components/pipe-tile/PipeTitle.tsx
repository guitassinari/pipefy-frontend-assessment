import React, { FC, HTMLAttributes } from 'react'
import { Types } from 'api'
import Tile from 'components/lib/tile'

interface PipeTileProps {
  pipe: Types.Pipe,
  onClick?: (pipe: Types.Pipe) => any
}

const PipeTile: FC<PipeTileProps & HTMLAttributes<HTMLDivElement>> = ({ pipe, onClick, ...rest }) => (
  <Tile bgColor={pipe.color} onClick={() => onClick && onClick(pipe)} {...rest}>
    <div>{pipe.name}</div>
    <small>{pipe.cards_count} cards</small>
  </Tile>
)

export default PipeTile