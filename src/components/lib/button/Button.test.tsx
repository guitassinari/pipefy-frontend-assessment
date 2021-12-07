import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Button from '.';

describe('Modal', () => {
  it('matches snapshot', () => {
    const component = render(<Button>Modal test</Button>)

    expect(component.asFragment()).toMatchSnapshot()
  })

  it('renders its received children', () => {
    const component = render(<Button>Modal test</Button>)

    expect(component.getByText('Modal test')).toBeInTheDocument()
  })

  describe('when receives a onClick', () => {
      it('executes the onClick callback whenever it is clicked', () => {
        const onClickCallback = jest.fn()
        const component = render(<Button onClick={onClickCallback}>Modal test</Button>)

        fireEvent.click(component.getByRole("button"))

        expect(onClickCallback).toHaveBeenCalled()
      })
  })
})
