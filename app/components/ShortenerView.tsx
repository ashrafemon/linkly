"use client";

import { useQuery } from "@tanstack/react-query";
import { redirect, useParams } from "next/navigation";
import LoadingText from "./LoadingText";

const ShortenerView = () => {
    const { code } = useParams();

    const { isError, isFetching, isSuccess, data, error } = useQuery({
        queryKey: ["shortener", code],
        queryFn: async () => {
            const data = await fetch(
                `/api/url-shorteners/${code}?searchKey=code`,
                {
                    method: "GET",
                }
            );
            return await data.json();
        },
    });

    if (isFetching || isError) {
        return (
            <LoadingText
                isLoading={isFetching}
                isError={isError}
                error={error}
            />
        );
    }

    if (isSuccess && data.data) {
        return redirect(data.data.url);
    }

    return <div>Redirecting...</div>;
};

export default ShortenerView;
