import React from 'react';
import { render } from '@testing-library/react'
import { Types } from 'api'
import PipeTile from '.';

describe('PipeTile', () => {
  describe('when receives a valid pipe', () => {
    const pipe: Types.Pipe = {
      name: 'A pipe'
    }

    it('matches the snapshot', () => {
      const component = render(<PipeTile pipe={pipe} />)
  
      expect(component.asFragment()).toMatchSnapshot()
    })

    it('shows the pipe name', () => {
      const component = render(<PipeTile pipe={pipe} />)
  
      expect(component.getByText(pipe.name)).toBeInTheDocument()
    })
  })
})
