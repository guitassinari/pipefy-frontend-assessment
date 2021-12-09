import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import PipeCardsModal from '.';
import { Queries } from 'api';
import { MockedProvider } from '@apollo/client/testing'
import { Modal as ModalTestUtils, Apollo as ApolloTestUtils } from 'test-utils'

describe('PipeCardsModal', () => {
  beforeEach(() => ModalTestUtils.addModalPortalToDocument()) 
  afterEach(() => ModalTestUtils.removeModalPortalFromDocument())
  
  describe('When the pipe cards query is', () => {
    const pipe = ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes[0]
    describe('resolved and successfull', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_PIPE_CARDS,
            variables: {
              pipeId: pipe.id,
              pageSize: 5
            }
          },
          result: {
            data: ApolloTestUtils.mocks.getPipeCardsSuccess
          }
        },
        {
          request: {
            query: Queries.GET_PIPE_CARDS,
            variables: {
              pipeId: pipe.id,
              pageSize: 5,
              startAtCursor: ApolloTestUtils.mocks.getPipeCardsSuccess.cards.pageInfo.endCursor
            }
          },
          result: {
            data: ApolloTestUtils.mocks.getPipeCardsSuccessPage2
          }
        }
      ]

      it('loads the first 5 cards for that pipe and shows it in a modal', async () => {
        const { getAllByRole, getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <PipeCardsModal pipe={pipe} />
          </MockedProvider>
        )
            
        await act(async () => {
          await ApolloTestUtils.waitForApolloQueryToResolve()
        })

        const cardsComponents = getAllByRole('gridcell')

        const cards = ApolloTestUtils.mocks.getPipeCardsSuccess.cards.edges.map(edge => edge.node)
        expect(cardsComponents.length).toEqual(cards.length)

        cards.forEach(card => {
          expect(getByText(card.title)).toBeInTheDocument()
        })
      })

      describe('when the "Show more" button is clicked', () => {
        it.only('fetches the next page of cards and display them along with the preivous ones', async () => {
          const { getAllByRole, getByRole, getByText } = render(
            <MockedProvider mocks={QUERY_MOCKS}>
              <PipeCardsModal pipe={pipe} />
            </MockedProvider>
          )
              
          await act(async () => {
            await ApolloTestUtils.waitForApolloQueryToResolve()
          })

          const showMoreButton = getByRole('button', { name: 'Show more' })
          fireEvent.click(showMoreButton)

          await act(async () => {
            await ApolloTestUtils.waitForApolloQueryToResolve()
          })

          await act(async () => {
            await ApolloTestUtils.waitForApolloQueryToResolve()
          })

          const cardsComponents = getAllByRole('gridcell')

          const allCardsFromBothPages = [
            ...ApolloTestUtils.mocks.getPipeCardsSuccess.cards.edges.map(edge => edge.node),
            ...ApolloTestUtils.mocks.getPipeCardsSuccessPage2.cards.edges.map(edge => edge.node)
          ]

          expect(cardsComponents.length).toEqual(allCardsFromBothPages.length)

          allCardsFromBothPages.forEach(card => {
            expect(getByText(card.title)).toBeInTheDocument()
          })
        })
      })
    })

    describe('loading', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_PIPE_CARDS,
            variables: {
              pipeId: ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes[0].id
            }
          },
          result: {
            data: ApolloTestUtils.mocks.getPipeCardsSuccess
          }
        }
      ]

      it('shows a loading message', async () => {
        const { getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <PipeCardsModal pipe={pipe} />
          </MockedProvider>
        )
  
        expect(getByText(`Please wait. We're loading your cards.`)).toBeInTheDocument()
      })
    })

    describe('resolved with an error', () => {
      const QUERY_MOCKS = [
        {
          request: {
            query: Queries.GET_PIPE_CARDS,
            variables: {
              pipeId: ApolloTestUtils.mocks.getOrganizationSuccess.organization.pipes[0].id
            }
          },
          error: new Error('something went wrong')
        }
      ]

      it('shows a error message', async () => {
        const { getByText } = render(
          <MockedProvider mocks={QUERY_MOCKS}>
            <PipeCardsModal pipe={pipe} />
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
