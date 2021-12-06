import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client'
import { Queries } from './graphql'
import { Pipe } from './graphql/types';

function App() {
  const { loading, error, data } = useQuery(Queries.GET_ORGANIZATION, {
    variables: {
      id: 300562393
    }
  })  

  return (
    <div className="App">
      <main>
        {!loading && data.organization.pipes.map((pipe: Pipe, index: number) => (<div key={index}>{pipe.name}</div>))}
      </main>
    </div>
  );
}

export default App;
