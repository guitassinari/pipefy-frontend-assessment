import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from 'api'
import Modal from 'components/modal'
import { Pipe, CardConnetionEdge, Card } from 'api/types';
import CardList from 'components/card-list';
import { ModalProps } from 'components/modal/Modal';

interface PipeCardsModalProps extends ModalProps {
  pipe: Pipe
}

const PipeCardsModal: React.FC<PipeCardsModalProps> = ({ pipe, ...rest }) => {
  const [cards, setCards] = useState<Card[]>([])
  const { loading, error, data, fetchMore } = useQuery(Queries.GET_PIPE_CARDS, {
    variables: {
      pipeId: pipe.id,
      pageSize: 5
    }
  })

  useEffect(() => {
    if(loading || error) {
      return
    }

    const newCards = data.cards.edges.map((edge: CardConnetionEdge)=> edge.node)

    setCards([...cards, ...newCards])
  }, [data])

  if(loading) {
    return <Modal {...rest}>
      <div>Please wait. We're loading your cards.</div>
    </Modal>
  }

  if(error) {
    return <Modal {...rest}>
      <div>Oops. Something went wrong!</div>
    </Modal>
  }

  return (
    <Modal {...rest} primaryAction={() => {
        if(!data.cards.pageInfo.hasNextPage) {
          return
        }
        fetchMore({
          updateQuery: (_, { fetchMoreResult }) => fetchMoreResult,
          variables: {
            startAtCursor: data.cards.pageInfo.endCursor
          }
        })
      }
    } customPrimaryActionText="Show more">
      <CardList cards={cards} />
    </Modal>
  )
}

export default PipeCardsModal