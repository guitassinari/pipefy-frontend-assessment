import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Modal from '.';
import { MODAL_PORTAL_ID } from 'components/modal-portal';
import { within } from '@testing-library/dom'

describe('Modal', () => {
  describe('when the modal portal doesnt exist', () => {
    it('throws an error', () => {
      // https://stackoverflow.com/questions/66328549/testing-error-thrown-by-a-react-component-using-testing-library-and-jest
      const originalConsole = console.error
      console.error = jest.fn()

      expect(() => render(<Modal />)).toThrow()

      console.error = originalConsole
    })
  })

  describe('when the modal portal exists', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div role="dialog" id="${MODAL_PORTAL_ID}" />`
    }) 

    afterEach(() => {
      document.body.innerHTML = ''
    })

    it('renders the modal inside react modal portal', () => {
      const component = render(<Modal>Test content</Modal>)
  
      const { getByRole } = within(document.body)
      const modalPortal = getByRole('dialog')
  
      const modalContent = component.getByText('Test content')
      expect(modalPortal).toContainElement(modalContent)
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
  
})
