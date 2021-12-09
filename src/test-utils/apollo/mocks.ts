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
    pageInfo: {
      hasNextPage: true,
      endCursor: 'a-cursor'
    },
    edges: [{
      cursor: 'a-cursor',
      node: {
        title: 'Card 1'
      }
    }]
  }
}

export const getPipeCardsSuccessPage2 = {
  cards: {
    pageInfo: {
      hasNextPage: false,
      endCursor: 'a-cursor-2'
    },
    edges: [{
      cursor: 'a-cursor-2',
      node: {
        title: 'Card 2'
      }
    }]
  }
}