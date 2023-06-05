export interface IRequestCreateClient {
    name: string;
    type: 'INTERNO' | 'EXTERNO' | ''
}

interface Content {
createdAt: string
id: number
name: string
type: string
}
export interface IResposeGetClient {
    content: Content[]
}