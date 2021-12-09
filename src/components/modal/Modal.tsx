import React, { HTMLAttributes, useRef } from 'react'
import ReactDOM from 'react-dom'
import {default as DesignSystemModal} from 'components/lib/modal'
import { MODAL_PORTAL_ID } from 'components/modal-portal'
import { Backdrop } from './Modal.styles'

export interface ModalProps {
  primaryAction?: () => any
  customPrimaryActionText?: string
  onClose?: () => any
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({ children, onClose, ...rest }) => {
  const container = document.getElementById(MODAL_PORTAL_ID)
  const backdrop = useRef(null)

  if(!container) {
    return null
  }

  const content = (
    <Backdrop data-testid="backdrop" ref={backdrop} onClick={(e) => {
      if(e.target !== backdrop.current) {
        return
      }
      
      onClose && onClose()
    }}>
      <DesignSystemModal {...rest}>
        {children}
      </DesignSystemModal>
    </Backdrop>
  )
  
  return ReactDOM.createPortal(content, container as any)
}
export default Modal