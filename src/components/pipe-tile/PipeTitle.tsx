import React, { FC } from 'react'
import { Types } from 'api'

interface PipeTileProps {
  pipe: Types.Pipe
}

const PipeTile: FC<PipeTileProps> = ({ pipe }) => (
  <div>{pipe.name}</div>
)

export default PipeTile