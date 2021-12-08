import React, { FC } from 'react';
import {  Types } from 'api'
import CardTile from 'components/card-tile';
import { CardListContainer } from './CardList.styles'

interface CardListProps {
  cards: Types.Card[]
}

const CardList: FC<CardListProps> = ({ cards }) => (
  <CardListContainer role="grid">
    {cards.map((card: Types.Card, index: number) => (
      <CardTile role="gridcell" key={index} card={card} />
    ))}
  </CardListContainer>
)


export default CardList
