export interface IResponseGetComponents {
    content: Content
  }
  
export interface Content {
    meta: Meta
    data: dataResponseGetComponents[]
  }
  
export interface Meta {
    total?: number
    per_page?: number
    current_page?: number
    last_page?: number
    first_page?: number
  }
  
export interface dataResponseGetComponents {
    id: number
    part_number: number
    name: string
    description: string
    model: string
    maker: string
    price: string
    size: string
    type_draft: string
    lpp: string
    number_padronization: string
    image_document: string
    createdAt: string
  }
