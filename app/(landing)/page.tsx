import ShortenerForm from "../components/ShortenerForm";
import ShortenerList from "../components/ShortenerList";

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

                    <ShortenerForm />
                </div>

                <ShortenerList />
            </div>
        </div>
    );
};

export default page;
