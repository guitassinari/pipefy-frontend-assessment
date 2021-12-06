import React from 'react';
import { render } from '@testing-library/react'
import Tile from '.';

describe('PipeTile', () => {
  it('matches the snapshot', () => {
    const component = render(<Tile>Teste</Tile>)

    expect(component.asFragment()).toMatchSnapshot()
  })

  it('shows the received children', () => {
    const component = render(<Tile>Teste</Tile>)

    expect(component.getByText('Teste')).toBeInTheDocument()
  })

  it('allows custom styling', () => {
    const component = render(<Tile className="className">Teste</Tile>)

    expect(component.asFragment()).toMatchSnapshot()
  })

  it('allows setting the background color', () => {
    const component = render(<Tile bgColor="blue">Teste</Tile>)

    expect(component.asFragment()).toMatchSnapshot()
  })
})
