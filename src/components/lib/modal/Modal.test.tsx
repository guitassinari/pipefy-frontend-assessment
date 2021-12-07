import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Modal from '.';

describe('Modal', () => {
  it('matches snapshot', () => {
    const component = render(<Modal>Modal test</Modal>)

    expect(component.asFragment()).toMatchSnapshot()
  })

  it('renders its received children', () => {
    const component = render(<Modal>Modal test</Modal>)

    expect(component.getByText('Modal test')).toBeInTheDocument()
  })

  describe('when receives a primaryAction', () => {
    it('renders the primary action button with a default text', () => {
      const component = render(<Modal primaryAction={jest.fn()}>Modal test</Modal>)

      expect(component.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    })

    describe('when the primary button is clicked', () => {
      it('executes the primaryAction callback', () => {
        const primaryActionCallback = jest.fn()
        const component = render(<Modal primaryAction={primaryActionCallback}>Modal test</Modal>)

        const primaryButton = component.getByRole('button', { name: 'Close' })
        fireEvent.click(primaryButton)

        expect(primaryActionCallback).toHaveBeenCalled()
      })
    })

    describe('whenr receives a customPrimaryActionText', () => {
      it('displays the button with tue custom text', () => {
        const customText = 'Custom'
        const component = render(
          <Modal primaryAction={jest.fn()} customPrimaryActionText={customText}>
            Modal test
          </Modal>
        )

        expect(component.getByRole('button', { name: customText })).toBeInTheDocument()
      })
    })
  })
})
