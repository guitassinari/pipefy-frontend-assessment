export type Pipe = {
  name: string
  color: string
  cards_count: number
  id: number
}

export type Card = {
  title: string
}

export type CardConnetionEdge = {
  node: Card
  cursor: string
}