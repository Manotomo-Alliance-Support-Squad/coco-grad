import {Message} from "../models/message";
import {ApiResponse} from "../models/response";

export default class ManoAloeService {
    private readonly apiURL: string;

    constructor() {
        this.apiURL = process.env.REACT_APP_API ? process.env.REACT_APP_API : 'localhost:69420';
    }

    public getMessage(messageID: number): Promise<Message|null> {
        return fetch(this.apiURL + 'messages/' + messageID)
            .then((res: { json: () => any; }) => {
                return res.json();
            })
            .then((apiResponse: ApiResponse) => {
                return apiResponse.messages[0];
            })
            .catch((error: Error) => {
                throw error;
            });
    }

    public getAllMessages(): Promise<Message[]> {
       return fetch(this.apiURL + 'messages')
            .then((res: { json: () => any; }) => {
                return res.json();
            })
            .then((apiResponse: ApiResponse) => {
                return apiResponse.messages;
            })
            .catch((error: Error) => {
                throw error;
            })
    }

    public getMessages(from: number, to: number): Promise<Message[]> {
        return fetch(this.apiURL + 'messages/range/' + from + '/' + to)
            .then((res: { json: () => any; }) => {
                return res.json();
            })
            .then((apiResponse: ApiResponse) => {
                return apiResponse.messages;
            })
            .catch((error: Error) => {
                throw error;
            })
    }
}
