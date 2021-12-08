import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardList from '.'
import { Types } from 'api';

describe('PipeList', () => {
  describe('When receives a valid list of pipes', () => {
    const cards: Types.Card[] = [{
      title: 'a card'
    }, {
      title: 'another card'
    },  {
      title: 'YET another card'
    }]

    it('matches snapshot', () => {
      const component = render(<CardList cards={cards}/>)

      expect(component.asFragment()).toMatchSnapshot()
    })

    it('shows a list of the organization pipes', async () => {
      const { getByText } = render(<CardList cards={cards} />)

      cards.forEach(card => {
        expect(getByText(card.title)).toBeInTheDocument()
      })
    })
  })
})
