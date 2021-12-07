import React from 'react'

export const MODAL_PORTAL_ID = "modal-portal"

const ModalPortal = () => (
  <div style={{zIndex: 9999}} role="dialog" id={MODAL_PORTAL_ID} />
)

export default ModalPortal