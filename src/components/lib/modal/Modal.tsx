import React, { HTMLAttributes } from 'react'
import { ModalCard, ModalContent, ModalActionsFooter } from './Modal.styles'
import Button from '../button'

interface ModalProps {
  primaryAction?: () => any
  customPrimaryActionText?: string
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({ children, primaryAction, customPrimaryActionText}) => (
  <ModalCard>
    <ModalContent>
      {children}
    </ModalContent>
    <ModalActionsFooter>
      {primaryAction && (
        <Button onClick={() => primaryAction()} role="button">
          {customPrimaryActionText || 'Close'}
        </Button>
      )}
    </ModalActionsFooter>
  </ModalCard>
)

export default Modal