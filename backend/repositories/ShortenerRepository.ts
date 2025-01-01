import randomstring from "randomstring";
import HelperService from "../lib/HelperService";
import Shortener from "../models/Shortener";
import { ShortenerBody, ShortenerQueries } from "../types/ShortenerTypes";

export default class ShortenerRepository {
    private helper;

    constructor() {
        this.helper = new HelperService();
    }

    async index(queries: ShortenerQueries) {
        try {
            const condition: { [key: string]: string } = {};
            if (queries.status) {
                condition["status"] = queries.status;
            }

            const docs = await Shortener.findAll({ where: condition });
            return this.helper.entityResponse({ data: docs });
        } catch (err) {
            return this.helper.errorResponse({
                statusCode: 500,
                data: err,
                message: (err as Error).message,
            });
        }
    }

    async store(body: ShortenerBody) {
        try {
            const code = randomstring.generate(10);
            const shortener = await Shortener.create({
                ...body,
                code: code,
            });
            return this.helper.entityResponse({
                statusCode: 201,
                data: shortener,
                message: "Linkly url added successfully...",
            });
        } catch (err) {
            return this.helper.errorResponse({
                statusCode: 500,
                data: err,
                message: (err as Error).message,
            });
        }
    }

    async show(id: string, queries: ShortenerQueries) {
        try {
            const searchKey = queries.searchKey ?? "id";
            const doc = await Shortener.findOne({ where: { [searchKey]: id } });
            if (!doc) {
                return this.helper.errorResponse({
                    message: "Linkly url not found...",
                });
            }
            return this.helper.entityResponse({ data: doc });
        } catch (err) {
            return this.helper.errorResponse({
                statusCode: 500,
                data: err,
                message: (err as Error).message,
            });
        }
    }
}
