import React from 'react';
import { useQuery } from '@apollo/client'
import { Queries } from './api'
import PipeList from 'components/pipe-list';
import { AppContainer, MainContent } from './App.styles'

function App() {
  const { loading, error, data } = useQuery(Queries.GET_ORGANIZATION, {
    variables: {
      id: 300562393
    }
  })

  if(loading) {
    return <div>Please wait. We're loading your pipes.</div>
  }

  if(error) {
    return <div>Oops. Something went wrong!</div>
  }

  return (
    <AppContainer>
      <MainContent>
        <PipeList pipes={data.organization.pipes} />
      </MainContent>
    </AppContainer>
  );
}

export default App;
