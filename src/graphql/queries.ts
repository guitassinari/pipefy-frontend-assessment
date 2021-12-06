import { gql } from '@apollo/client'

const GET_ORGANIZATION = gql`
  query GetOrganization($id: Int!) {
    organization(id: $id) {
      id
      name
      pipes {
        name
      }
    }
  }
`

export default {
  GET_ORGANIZATION
}