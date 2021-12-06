import React from 'react';
import { act, render } from '@testing-library/react';
import App from './App';
import { Queries } from './graphql';
import { MockedProvider } from '@apollo/client/testing'
import { Apollo as ApolloTestUtils } from './test-utils'

describe('App', () => {
  describe('When the organization query is', () => {
    describe('resolved and successfull', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_ORGANIZATION,
            variables: { id: 300562393 }
          },
          result: {
            data: ApolloTestUtils.mocks.getOrganizationSuccess
          }
        }
      ]
  
      it('shows a list of the organization pipes', async () => {
        const { getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <App />
          </MockedProvider>
        )
  
        const pipes = ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes      
  
        await act(async () => {
          await ApolloTestUtils.waitForApolloQueryToResolve()
        })
  
        pipes.forEach(pipe => {
          expect(getByText(pipe.name)).toBeInTheDocument()
        })
      })
    })

    describe('loading', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_ORGANIZATION,
            variables: { id: 300562393 }
          },
          result: {
            data: ApolloTestUtils.mocks.getOrganizationSuccess
          }
        }
      ]

      it('shows a loading message', async () => {
        const { getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <App />
          </MockedProvider>
        )
  
        expect(getByText(`Please wait. We're loading your pipes.`)).toBeInTheDocument()
      })
    })

    describe('resolved with an error', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_ORGANIZATION,
            variables: { id: 300562393 }
          },
          error: new Error("Something went wrong")
        }
      ]

      it('shows a loading message', async () => {
        const { getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <App />
          </MockedProvider>
        )

        await act(async () => {
          await ApolloTestUtils.waitForApolloQueryToResolve()
        })
  
        expect(getByText(`Oops. Something went wrong!`)).toBeInTheDocument()
      })
    })
  })
})
