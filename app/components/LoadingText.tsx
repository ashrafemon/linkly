import React from "react";

const LoadingText: React.FC<{
    isLoading: boolean;
    isError?: boolean;
    error?: Error | null;
}> = ({ isLoading = true, isError = false, error }) => {
    console.log(error);

    if (isLoading) {
        return (
            <p className="text-7xl font-semibold text-transparent bg-gradient-to-r from-grad bg-clip-text py-2">
                Loading...
            </p>
        );
    }

    if (isError && error) {
        return (
            <p className="text-2xl font-semibold text-danger py-2">
                {error?.message}
            </p>
        );
    }
};

export default LoadingText;
