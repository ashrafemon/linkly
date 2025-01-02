"use client";

import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { queryClient } from "../providers/ReactQueryProvider";
import { ShortenerFormType } from "../types/ShortenerTypes";

const ShortenerForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
    } = useForm({
        defaultValues: {
            url: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: ShortenerFormType) => {
            const req = await fetch("/api/url-shorteners", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return await req.json();
        },
        onSuccess: (data) => {
            Swal.fire({
                title: data.message,
                icon: data.status !== "success" ? "error" : "success",
                timer: 3000,
            });

            if (data.status === "validateError") {
                Object.keys(data.data).forEach((fieldName) => {
                    setError(fieldName as keyof ShortenerFormType, {
                        type: "manual",
                        message: data.data[fieldName],
                    });
                });
            } else if (data.status === "success") {
                queryClient.invalidateQueries({ queryKey: ["shorteners"] });
                reset();
            }
        },
    });

    const onSubmit = (data: ShortenerFormType) => {
        mutation.mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="url"
                rules={{ required: "The url field is required" }}
                render={({ field: { onChange, value, onBlur } }) => (
                    <div>
                        <div className="relative">
                            <input
                                className="block bg-[#181E29] p-6 rounded-full border-4 border-[#353C4A] focus:outline-none w-full"
                                placeholder="Enter the link here"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            <button
                                type="submit"
                                className="p-5 bg-primary text-white rounded-full absolute top-2 right-2 font-semibold"
                                disabled={mutation.isPending}
                            >
                                Shorten Now!
                            </button>
                        </div>

                        {errors.url && (
                            <p className="text-danger text-sm font-semibold text-left pt-2">
                                {errors.url?.message}
                            </p>
                        )}
                    </div>
                )}
            />
        </form>
    );
};

export default ShortenerForm;
