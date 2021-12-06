import React, { FC } from 'react';
import {  Types } from 'api'
import PipeTile from 'components/pipe-tile';
import { PipeListContainer } from './PipeList.styles'

interface PipeListProps {
  pipes: Types.Pipe[]
}

const PipeList: FC<PipeListProps> = ({ pipes }) => (
  <PipeListContainer>
    {pipes.map((pipe: Types.Pipe, index: number) => (
      <PipeTile key={index} pipe={pipe} />
    ))}
  </PipeListContainer>
)


export default PipeList
