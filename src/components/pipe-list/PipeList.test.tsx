import React from 'react';
import { render } from '@testing-library/react';
import PipeList from '.'
import { Types } from 'api';

describe('PipeList', () => {
  describe('When receives a valid list of pipes', () => {
    const pipes: Types.Pipe[] = [{
      name: 'A pipe',
      color: 'blue',
      cards_count: 10
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
  })
})
