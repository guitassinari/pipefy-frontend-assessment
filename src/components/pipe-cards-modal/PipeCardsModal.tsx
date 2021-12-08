import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from 'api'
import Modal from 'components/modal'
import { Pipe } from 'api/types';
import CardTile from 'components/card-tile';

interface PipeCardsModalProps {
  pipe: Pipe
}

const PipeCardsModal: React.FC<PipeCardsModalProps> = ({ pipe }) => {
  const { loading, error, data } = useQuery(Queries.GET_PIPE_CARDS, {
    variables: {
      pipeId: pipe.id
    }
  })

  let content

  if(loading) {
    content = <div>Please wait. We're loading your cards.</div>
  }

  if(error) {
    content = <div>Oops. Something went wrong!</div>
  }

  if(!error && !loading) {
    const cards = data.cards.edges.map((edge: any) => edge.node)
    content = cards.map((card: any, index: number) => (
      <CardTile card={card} key={index} role="gridcell" />
    ))
  }

  return (
    <Modal>
      {content}
    </Modal>
  )
}

export default PipeCardsModal