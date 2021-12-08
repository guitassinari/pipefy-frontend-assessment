import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PipeList from '.'
import { Types } from 'api';

describe('PipeList', () => {
  describe('When receives a valid list of pipes', () => {
    const pipes: Types.Pipe[] = [{
      name: 'A pipe',
      color: 'blue',
      cards_count: 10,
      id: 1
    }]

    it('matches snapshot', () => {
      const component = render(<PipeList pipes={pipes}/>)

      expect(component.asFragment()).toMatchSnapshot()
    })

    it('shows a list of the organization pipes', async () => {
      const { getByText } = render(<PipeList pipes={pipes} />)

      pipes.forEach(pipe => {
        expect(getByText(pipe.name)).toBeInTheDocument()
      })
    })

    describe('when receives onClick prop', () => {
      describe('and a pipe is clicked', () => {
        it('calls the onClick callback with that pipe', () => {
          const onClickCallback = jest.fn()
          const { getByText } = render(<PipeList onClick={onClickCallback} pipes={pipes} />)

          fireEvent.click(getByText(pipes[0].name))

          expect(onClickCallback).toHaveBeenCalledWith(pipes[0])
        })
      })
    })
  })
})
