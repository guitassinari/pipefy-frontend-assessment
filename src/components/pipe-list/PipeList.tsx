import React, { FC } from 'react';
import { Types } from 'api'
import PipeTile from 'components/pipe-tile';
import { PipeListContainer } from './PipeList.styles'

interface PipeListProps {
  pipes: Types.Pipe[],
  onClick?: (pipe: Types.Pipe) => any
}

const PipeList: FC<PipeListProps> = ({ pipes, onClick }) => (
  <PipeListContainer role="grid">
    {pipes.map((pipe: Types.Pipe, index: number) => (
      <PipeTile onClick={() => onClick && onClick(pipe)} role="gridcell" key={index} pipe={pipe} />
    ))}
  </PipeListContainer>
)


export default PipeList
