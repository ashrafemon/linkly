import React from "react";

const page = () => {
    return (
        <div className="container">
            <div className="flex flex-col justify-center items-center py-20 gap-10">
                <div className="text-center">
                    <h2 className="bg-gradient-to-r from-grad text-transparent bg-clip-text font-bold inline-block text-5xl py-1">
                        Shorten Your Loooong Links :)
                    </h2>
                </div>

                <div className="max-w-[600px] mx-auto flex flex-col gap-10 text-center">
                    <p className="text-white text-base">
                        Linkly is an efficient and easy-to-use URL shortening
                        service that streamlines your online experience.
                    </p>

                    <div className="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block bg-[#181E29] p-6 rounded-full border-4 border-[#353C4A] focus:outline-none w-full"
                            placeholder="Enter the link here"
                            required
                        />
                        <button
                            type="submit"
                            className="p-5 bg-primary text-white rounded-full absolute top-2 right-2 font-semibold"
                        >
                            Shorten Now!
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Short Link</th>
                                <th>Original Link</th>
                                <th>QR Code</th>
                                <th>Clicks</th>
                                <th>Status</th>
                                <th className="!text-center">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(10)
                                .fill(0)
                                .map((_, i) => (
                                    <tr key={i}>
                                        <td>https://linkly.com/Bn41aCOlnxj</td>
                                        <td>
                                            https://www.twitter.com/tweets/8erelCoihu/
                                        </td>
                                        <td>
                                            <img
                                                src="https://w7.pngwing.com/pngs/144/829/png-transparent-qr-code-information-qr-code-android-qrcode-text-rectangle-monochrome-thumbnail.png"
                                                alt="QrCode"
                                                className="w-16 h-16"
                                            />
                                        </td>
                                        <td>1313</td>
                                        <td>Active</td>
                                        <td className="text-center">
                                            Oct-10-2023
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;
