"use client";

import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Link from "next/link";
import { ShortenerType } from "../types/ShortenerTypes";
import LoadingText from "./LoadingText";

const ShortenerList = () => {
    const { isError, isFetching, data, error } = useQuery({
        queryKey: ["shorteners"],
        queryFn: async () => {
            const data = await fetch("/api/url-shorteners", {
                method: "GET",
            });
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

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>Short Link</th>
                        <th>Original Link</th>
                        <th>Clicks</th>
                        <th>Status</th>
                        <th className="!text-center">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.length > 0 ? (
                        data.data.map((item: ShortenerType, i: number) => (
                            <tr key={i}>
                                <td>
                                    {item?.code ? (
                                        <Link
                                            href={item.code}
                                            className="hover:text-primary"
                                        >{`${window.origin}/${item.code}`}</Link>
                                    ) : (
                                        "N/A"
                                    )}
                                </td>
                                <td>{item?.url ?? "N/A"}</td>
                                <td>{item?.clickCount ?? 0}</td>
                                <td className="capitalize">
                                    {item?.status ?? "N/A"}
                                </td>
                                <td className="text-center">
                                    {moment(item?.createdAt).format(
                                        "DD-MMM-YYYY"
                                    ) ?? "N/A"}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>Sorry, no linkly url found...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ShortenerList;
