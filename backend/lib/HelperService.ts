import { NextResponse } from "next/server";

export default class HelperService {
    entityResponse({
        status = "success",
        statusCode = 200,
        message = null,
        data,
    }: {
        status?: string;
        statusCode?: number;
        message?: string | null;
        data?: any;
    }) {
        return NextResponse.json(
            { status, statusCode, message, data },
            { status: statusCode }
        );
    }

    errorResponse({
        status = "error",
        statusCode = 404,
        message = "Sorry, Item not found...",
        data,
    }: {
        status?: string;
        statusCode?: number;
        message?: string | null;
        data?: any;
    }) {
        return NextResponse.json(
            { status, statusCode, message, data },
            { status: statusCode }
        );
    }

    /**
     * Data Manipulate
     *
     */

    getQueryStrings(value: string) {
        const url = new URL(value);
        const searchQueries = new URLSearchParams(url.searchParams);
        return Object.fromEntries(searchQueries.entries());
    }
}
