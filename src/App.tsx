import React from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from './api'
import PipeList from 'components/pipe-list';
import { AppContainer, MainContent } from './App.styles'
import ModalPortal from 'components/modal-portal';
import Modal from 'components/modal'
import { Pipe } from 'api/types';
import { sortByName } from 'utils/pipes';

function App() {
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
        <PipeList pipes={pipesSortedByName} />
      </MainContent>
    )
  }

  return (
    <AppContainer>
      {content}
      <ModalPortal />
    </AppContainer>
  );
}

export default App;
