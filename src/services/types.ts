export interface IResponseDefault<ITResponse> {
    statusCode: number,
    message: string,
    content: ITResponse
}