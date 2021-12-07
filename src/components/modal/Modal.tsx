import { HTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import React from 'react'
import ReactDOM from 'react-dom'
import {default as DesignSystemModal} from 'components/lib/modal'
import { MODAL_PORTAL_ID } from 'components/modal-portal'

interface ModalProps {
  primaryAction?: () => any
  customPrimaryActionText?: string
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  const container = document.getElementById(MODAL_PORTAL_ID)

  const content = (
    <DesignSystemModal {...rest}>
      {children}
    </DesignSystemModal>
  )
  
  return ReactDOM.createPortal(content, container as any)
}
export default Modal