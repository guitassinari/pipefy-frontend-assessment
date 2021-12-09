import { gql } from '@apollo/client'

const GET_ORGANIZATION = gql`
  query GetOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      pipes {
        id
        name
        color
        cards_count
      }
    }
  }
`

const GET_PIPE_CARDS = gql`
  query GetPipeCards($pipeId: ID!, $pageSize: Int, $startAtCursor: String) {
    cards(pipe_id: $pipeId, first: $pageSize, after: $startAtCursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
`

export default {
  GET_ORGANIZATION,
  GET_PIPE_CARDS
}