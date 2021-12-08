export const getOrganizationSuccess = {
  organization: {
    id: 300562393,
    name: 'Test organization',
    pipes: [{
      name: 'Test pipe c',
      color: 'blue',
      cards_count: 10,
      id: 5
    }, {
      name: 'Test pipe d',
      color: 'red',
      cards_count: 10,
      id: 4
    }, {
      name: 'Test pipe a',
      color: 'green',
      cards_count: 10,
      id: 3
    }]
  }
}

export const getPipeCardsSuccess = {
  cards: {
    edges: [{
      node: {
        title: 'Card 1'
      }
    }]
  }
}