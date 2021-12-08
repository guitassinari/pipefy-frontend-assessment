import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from 'api'
import Modal from 'components/modal'
import { Pipe } from 'api/types';

interface PipeCardsModalProps {
  pipe: Pipe
}

const PipeCardsModal: React.FC<PipeCardsModalProps> = ({ pipe }) => {
  const { loading, error, data } = useQuery(Queries.GET_PIPE_CARDS, {
    variables: {
      pipeId: pipe.id
    }
  })

  if(loading) {
    return <div>Please wait. We're loading your cards.</div>
  }

  if(error) {
    return <div>Oops. Something went wrong!</div>
  }

  const cards = data.cards.edges.map((edge: any) => edge.node)

  return (
    <Modal>
      <Fragment>
        {cards.map((card: any, index: number) => (
          <div key={index} role="gridcell">
            {card.title}
          </div>
        ))}
      </Fragment>
    </Modal>
  )
}

export default PipeCardsModal