import axios from 'axios';
import { IPostInList, IPostOnPage } from '../types/types';

export default class PostService {
    static async getAllFromPages(pages: number) {
        if (pages === 0) {
            return;
        }

        return await Promise.all(
            new Array(pages).fill(undefined).map(async (_, page) => {
                return axios.get<IPostInList[]>(`https://api.hnpwa.com/v0/newest/${page + 1}.json`);
            }),
        );
    }

    static async getById(id: number) {
        return await axios.get<IPostOnPage>(`https://api.hnpwa.com/v0/item/${id}.json`);
    }
}
