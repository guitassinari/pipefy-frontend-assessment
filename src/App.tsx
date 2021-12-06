import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client'
import { Queries } from './api'
import PipeList from 'components/pipe-list';

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
    <div className="App">
      <main>
        <PipeList pipes={data.organization.pipes} />
      </main>
    </div>
  );
}

export default App;
