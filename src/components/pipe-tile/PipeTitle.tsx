import React, { FC, HTMLAttributes } from 'react'
import { Types } from 'api'
import Tile from 'components/lib/tile'

interface PipeTileProps {
  pipe: Types.Pipe
}

const PipeTile: FC<PipeTileProps & HTMLAttributes<HTMLDivElement>> = ({ pipe, ...rest }) => (
  <Tile bgColor={pipe.color} {...rest}>
    <div>{pipe.name}</div>
    <small>{pipe.cards_count} cards</small>
  </Tile>
)

export default PipeTile