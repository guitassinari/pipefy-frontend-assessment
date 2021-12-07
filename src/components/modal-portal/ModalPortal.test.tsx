import React from 'react';
import { render } from '@testing-library/react'
import ModalPortal from '.';

describe('ModalPortal', () => {
  it('renders a div with id "modal-portal"', () => {
    const component = render(<ModalPortal />)

    const modalPortal = component.getByRole('dialog')

    expect(modalPortal).toBeInTheDocument()
    expect(modalPortal.id).toEqual("modal-portal")
  })
})
