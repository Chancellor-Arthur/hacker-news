import axios from "axios";
import {IPostInList, IPostOnPage} from "../types/types";

export default class PostService {
    static async getAllFromPages(pages: number) {
        if (pages === 0) {
            return;
        }
        const array: IPostInList[][] = [];
        for (let page = 1; page <= pages; page++) {
            array.push(
                (await (
                    axios.get<IPostInList[]>(
                        `https://api.hnpwa.com/v0/newest/${page}.json`
                    )
                )).data
            );
        }
        // @ts-ignore
        return [].concat(...array);
    }

    static async getById(id: number) {
        return await axios.get<IPostOnPage>(
            `https://api.hnpwa.com/v0/item/${id}.json`
        );
    }
}
