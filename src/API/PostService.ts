import axios from "axios";
import {IFeedItem, IItem} from "../types/types";

export default class PostService {
    static async getAllFromPage(page: number) {
        return await axios.get<IFeedItem[]>(`https://api.hnpwa.com/v0/newest/${page}.json`);
    }

    static async getById(id: number) {
        return await axios.get<IItem>(`https://api.hnpwa.com/v0/item/${id}.json`);
    }
}
