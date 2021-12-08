import React, { FC, HTMLAttributes } from 'react'
import { Types } from 'api'
import Tile from 'components/lib/tile'

interface CardTileProps {
  card: Types.Card,
}

const CardTile: FC<CardTileProps & HTMLAttributes<HTMLDivElement>> = ({ card, ...rest }) => (
  <Tile {...rest}>
    <div>{card.title}</div>
  </Tile>
)

export default CardTile