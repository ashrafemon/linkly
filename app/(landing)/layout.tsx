import Image from "next/image";
import Images from "../constants/Images";
import Link from "next/link";

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-full absolute inset-0 z-0">
                <Image src={Images.BgImage} alt="Background Image" fill />
            </div>
            <div className="w-full h-full py-5 relative z-10">
                <div className="container">
                    <Link href="/">
                        <span className="text-3xl font-bold bg-gradient-to-r from-grad text-transparent bg-clip-text">
                            Linkly<sup className="text-white">®</sup>
                        </span>
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
};

export default LandingLayout;
