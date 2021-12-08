import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { Types } from 'api'
import PipeTile from '.';

describe('PipeTile', () => {
  describe('when receives a valid pipe', () => {
    const pipe: Types.Pipe = {
      name: 'A pipe',
      color: 'blue',
      cards_count: 10,
      id: 1
    }

    it('matches the snapshot', () => {
      const component = render(<PipeTile pipe={pipe} />)
  
      expect(component.asFragment()).toMatchSnapshot()
    })

    it('shows the pipe name', () => {
      const component = render(<PipeTile pipe={pipe} />)
  
      expect(component.getByText(pipe.name)).toBeInTheDocument()
    })

    it('shows the number of cards in the pipe', () => {
      const component = render(<PipeTile pipe={pipe} />)
  
      expect(component.getByText(`${pipe.cards_count} cards`)).toBeInTheDocument()
    })

    
    describe('when receives onClick prop', () => {
      describe('and it is clicked', () => {
        it('calls the onClick callback with its pipe', () => {
          const onClickCallback = jest.fn()
          const component = render(<PipeTile data-testid="tile" onClick={onClickCallback} pipe={pipe} />)


          fireEvent.click(component.getByTestId('tile'))

          expect(onClickCallback).toHaveBeenCalledWith(pipe)
        })
      })
    })
  })
})
