const Hero = ({ heading, gradientHeading, subHeading, greenText }) => {

    return (
        <div className="center flex-col space-y-10 bg-gradient py-12">
            <p className="heading text-center leading-14">
                {heading}{" "}
                <span className="bg-gradient-to-r from-[#005CD9] to-[#FF55F8] bg-clip-text text-transparent">{gradientHeading}</span>
            </p>
            <p className="text-secondary-text-color font-medium text-center text-lg max-w-2xl">
                {subHeading}{" "}
                <span className="text-green-500">
                    {greenText}
                </span>
            </p>
            <div className="w-full max-w-2xl gap-6 space-between">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="bg-[#00d084] w-fit px-1 rounded">
                            <i class="fa-solid fa-star text-sm text-white"></i>
                        </div>
                    ))}
                </div>
                <div className="h-8 w-[1px] bg-gray-300" />
                <div className="bg-[#00d084]/10 space-between gap-1 px-4 py-5 rounded-2xl text-sm flex-1">
                    <div className="align-center gap-2">
                        <div className="relative">
                            <div className="bg-[#00d084] w-2.5 h-2.5 animate-ping rounded-full absolute" />
                            <div className="bg-[#00d084] w-2.5 h-2.5 rounded-full z-10" />
                        </div>
                        <p className="text-[#065f46]">
                            <span className="font-medium">100 followers</span> delivered
                        </p>
                    </div>
                    <div className="align-center gap-2">
                        <div className="bg-white center w-6 h-6 rounded-full">
                            <i class="fa-solid fa-check text-[#00d084]"></i>
                        </div>
                        <p className="text-[#065f46]">43 minutes ago</p>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-gray-300" />
                <div className="text-primary-text-color border border-gray-300 w-fit px-3 py-1.5 center gap-1 rounded-lg text-xl">
                    <i class="fa-brands fa-apple"></i>
                    <p>Pay</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
