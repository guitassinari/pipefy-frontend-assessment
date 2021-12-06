import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client'
import { Queries, Types } from './api'

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
        {data.organization.pipes.map((pipe: Types.Pipe, index: number) => (
          <div key={index}>{pipe.name}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
