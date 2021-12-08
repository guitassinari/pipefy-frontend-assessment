import React from 'react';
import { render } from '@testing-library/react'
import { Types } from 'api'
import CardTile from '.';

describe('CardTile', () => {
  describe('when receives a valid pipe', () => {
    const card: Types.Card = {
      title: 'a card'
    }

    it('matches the snapshot', () => {
      const component = render(<CardTile card={card} />)
  
      expect(component.asFragment()).toMatchSnapshot()
    })

    it('shows the card name', () => {
      const component = render(<CardTile card={card} />)
  
      expect(component.getByText(card.title)).toBeInTheDocument()
    })
  })
})
