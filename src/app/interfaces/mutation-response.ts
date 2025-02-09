export default interface MutationResponse {
    success: boolean;
    status: 200 | 400 | 500;
    title: string;
    message: string;
}