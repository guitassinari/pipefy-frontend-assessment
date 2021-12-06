import React, { FC } from 'react'
import { Types } from 'api'
import Tile from 'components/lib/tile'

interface PipeTileProps {
  pipe: Types.Pipe
}

const PipeTile: FC<PipeTileProps> = ({ pipe }) => (
  <Tile bgColor={pipe.color}>
    <div>{pipe.name}</div>
    <small>{pipe.cards_count} cards</small>
  </Tile>
)

export default PipeTile