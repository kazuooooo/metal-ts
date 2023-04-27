export interface IndexInput {
  id?: string
  imageBase64?: string
  imageUrl?: string
  text?: string
  embedding?: number[]
  metadata?: object
}

export interface IndexPayload extends IndexInput {
  index: string
}

export interface Filter {
  field: string
  value: string | number
}

export interface SearchInput {
  imageBase64?: string
  imageUrl?: string
  text?: string
  embedding?: number[]
  filters?: Filter[]
}

export interface SearchPayload extends SearchInput {
  index: string
}

export interface TuningInput {
  idA: string
  idB: string
  label: -1 | 0 | 1
}

export interface TuningPayload extends TuningInput {
  index: string
}
