import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Modal from '.';
import { MODAL_PORTAL_ID } from 'components/modal-portal';
import { within } from '@testing-library/dom'
import { Modal as ModalTestUtils } from 'test-utils'

describe('Modal', () => {
  describe('when the modal portal doesnt exist', () => {
    it('returns null', () => {
      const component = render(<Modal>Teste</Modal>)

      expect(component.queryByText('Test')).not.toBeInTheDocument()
    })
  })

  describe('when the modal portal exists', () => {
    beforeEach(() => ModalTestUtils.addModalPortalToDocument()) 
    afterEach(() => ModalTestUtils.removeModalPortalFromDocument())

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

    describe('when the modal is clicked', () => {
      it('doesnt trigger the onClose callback', () => {
        const onCloseCallback = jest.fn()
        const component = render(
          <Modal onClose={onCloseCallback}>
            Modal test
          </Modal>
        )
  
        fireEvent.click(component.getByText('Modal test'))
  
        expect(onCloseCallback).not.toHaveBeenCalled()
      })
    })

    describe('when the backdrop is clicked', () => {
      it('calls the onClose callback', () => {
        const onCloseCallback = jest.fn()
        const component = render(
          <Modal onClose={onCloseCallback}>
            Modal test
          </Modal>
        )
  
        fireEvent.click(component.getByTestId('backdrop'))
  
        expect(onCloseCallback).toHaveBeenCalled()
      })
    })
  }) 
})
