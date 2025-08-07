const Button = ({text, mode}: { text: string; mode?: string }) => {
    return (
        <>
            {mode === "black" ? (
                <button
                    className="w-56 h-14 bg-blackPrimary text-white text-2xl max-sm:w-44 max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:w-40 max-[360px]:h-9">
                    {text}
                </button>
            ) : (
                <button
                    className="w-56 h-14 bg-white text-blackPrimary text-2xl max-sm:w-44 max-sm:h-10 max-sm:text-xl max-[460px]:text-lg max-[360px]:w-40 max-[360px]:h-9">
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
