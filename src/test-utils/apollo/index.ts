import * as mocks from './mocks'

const waitForApolloQueryToResolve = async () => new Promise(resolve => setTimeout(resolve, 0));

const Apollo = {
  waitForApolloQueryToResolve,
  mocks
}

export default Apollo