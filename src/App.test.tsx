import React from 'react';
import { act, render, fireEvent, within } from '@testing-library/react';
import App from './App';
import { Queries } from './api';
import { MockedProvider } from '@apollo/client/testing'
import { Apollo as ApolloTestUtils } from './test-utils'
import { MODAL_PORTAL_ID } from 'components/modal-portal'

describe('App', () => {

  it('renders a portal element for modals', () => {
    const component = render(
      <MockedProvider>
        <App />
      </MockedProvider>
    )
    const modalPortal = component.getByRole("dialog")
    expect(modalPortal).toBeInTheDocument()
    expect(modalPortal.id).toEqual(MODAL_PORTAL_ID)
  })

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
        },
        {
          request: {
            query: Queries.GET_PIPE_CARDS,
            variables: {
              pipeId: ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes[0].id,
              pageSize: 5
            }
          },
          result: {
            data: ApolloTestUtils.mocks.getPipeCardsSuccess
          }
        }
      ]
  
      it('shows a list of the organization pipes sorted by name', async () => {
        const { getAllByRole } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <App />
          </MockedProvider>
        )
  
        const pipes = ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes     
        
        await act(async () => {
          await ApolloTestUtils.waitForApolloQueryToResolve()
        })

        const pipeTiles = getAllByRole('gridcell')
        const sortedPipes = pipes.slice().sort((a, b) => a.name > b.name && 1 || -1) 

        pipeTiles.forEach((pipeTile, index) => {
          expect(pipeTile.textContent).toContain(sortedPipes[index].name)
        })
      })

      describe('when a pipe is clicked', () => {
        it('loads the cards for that pipe and shows it in a modal', async () => {
          const { getByText } = render(
            <MockedProvider mocks={QUERY_MOCKS}>
              <App />
            </MockedProvider>
          )
              
          await act(async () => {
            await ApolloTestUtils.waitForApolloQueryToResolve()
          })

          const pipes = ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes     
          const pipeTile = getByText(pipes[0].name)

          fireEvent.click(pipeTile)

          await act(async () => {
            await ApolloTestUtils.waitForApolloQueryToResolve()
          })

          const cards = ApolloTestUtils.mocks.getPipeCardsSuccess.cards.edges.map(edge => edge.node)

          cards.forEach(card => {
            expect(getByText(card.title)).toBeInTheDocument()
          })
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

      it('shows a error message', async () => {
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
