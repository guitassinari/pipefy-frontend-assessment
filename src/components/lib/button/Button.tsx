
import React, { HTMLAttributes } from 'react'
import { StyledButton } from './Button.styles'

const Button: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => (
  <StyledButton role="button" {...rest}>
    {children}
  </StyledButton>
)

export default Button