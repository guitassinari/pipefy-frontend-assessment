import { HTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import { ModalCard, ModalContent, ModalActionsFooter } from './Modal.styles'

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
        <button onClick={() => primaryAction()} role="button">
          {customPrimaryActionText || 'Close'}
        </button>
      )}
    </ModalActionsFooter>
  </ModalCard>
)

export default Modal