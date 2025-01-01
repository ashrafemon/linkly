import ShortenerRepository from "../repositories/ShortenerRepository";
import { ShortenerBody, ShortenerQueries } from "../types/ShortenerTypes";

export default class ShortenerController {
    constructor(private readonly repository = new ShortenerRepository()) {}

    async index(queries: ShortenerQueries) {
        return await this.repository.index(queries);
    }

    async store(body: ShortenerBody) {
        return await this.repository.store(body);
    }

    async show(id: string, queries: ShortenerQueries) {
        return await this.repository.show(id, queries);
    }
}
