import { HTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'

interface ModalProps {
  primaryAction?: () => any
  customPrimaryActionText?: string
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({ children, primaryAction, customPrimaryActionText}) => (
  <div>
    {children}
    {primaryAction && (
      <button onClick={() => primaryAction()} role="button">
        {customPrimaryActionText || 'Close'}
      </button>
    )}
  </div>
)

export default Modal