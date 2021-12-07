import React, { HTMLAttributes } from 'react'
import ReactDOM from 'react-dom'
import {default as DesignSystemModal} from 'components/lib/modal'
import { MODAL_PORTAL_ID } from 'components/modal-portal'
import { Backdrop } from './Modal.styles'

interface ModalProps {
  primaryAction?: () => any
  customPrimaryActionText?: string
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  const container = document.getElementById(MODAL_PORTAL_ID)

  if(!container) {
    return null
  }

  const content = (
    <Backdrop>
      <DesignSystemModal {...rest}>
        {children}
      </DesignSystemModal>
    </Backdrop>
  )
  
  return ReactDOM.createPortal(content, container as any)
}
export default Modal