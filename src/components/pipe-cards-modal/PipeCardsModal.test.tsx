import React from 'react';
import { act, render } from '@testing-library/react';
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
              pipeId: pipe.id
            }
          },
          result: {
            data: ApolloTestUtils.mocks.getPipeCardsSuccess
          }
        }
      ]

      it('loads the cards for that pipe and shows it in a modal', async () => {
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
