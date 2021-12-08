import { MODAL_PORTAL_ID } from 'components/modal-portal'

export const addModalPortalToDocument = () => {
  document.body.innerHTML = `<div role="dialog" id="${MODAL_PORTAL_ID}" />`
}

export const removeModalPortalFromDocument = () => {
  document.body.innerHTML = ''
}