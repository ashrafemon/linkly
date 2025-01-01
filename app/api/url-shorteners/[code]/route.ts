import ShortenerController from "@/backend/controllers/ShortenerController";
import HelperService from "@/backend/lib/HelperService";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: { [key: string]: string } }
) {
    const helper = new HelperService();

    try {
        const { id } = context.params;
        const queries = helper.getQueryStrings(request.url);
        const controller = new ShortenerController();
        return await controller.show(id, queries);
    } catch (err) {
        return helper.errorResponse({
            statusCode: 500,
            message: (err as Error)?.message,
        });
    }
}
