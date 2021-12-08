import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from './api'
import PipeList from 'components/pipe-list';
import { AppContainer, MainContent } from './App.styles'
import ModalPortal from 'components/modal-portal';
import Modal from 'components/modal'
import { Pipe } from 'api/types';
import { sortByName } from 'utils/pipes';

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
    return null
  }

  if(error) {
    return null
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

function App() {
  const [currentlySelectedPipe, setSelectedPipe] = useState<Pipe>()
  const { loading, error, data } = useQuery(Queries.GET_ORGANIZATION, {
    variables: {
      id: 300562393
    }
  })
  
  let content

  if(loading) {
    content = <div>Please wait. We're loading your pipes.</div>
  }

  if(error) {
    content = <div>Oops. Something went wrong!</div>
  }

  if(!error && !loading) {
    const pipes: Pipe[] = data.organization.pipes
    const pipesSortedByName = sortByName(pipes)

    content = (
      <MainContent>
        <PipeList onClick={(pipe) => setSelectedPipe(pipe)} pipes={pipesSortedByName} />
      </MainContent>
    )
  }

  return (
    <AppContainer>
      {content}
      {currentlySelectedPipe && <PipeCardsModal pipe={currentlySelectedPipe} />}
      <ModalPortal />
    </AppContainer>
  );
}

export default App;
