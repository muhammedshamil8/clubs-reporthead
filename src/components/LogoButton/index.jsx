const LogoButton = ({
    color = '#15216b',
    logo,
    label,
    onClick,
}) => {
    return (
        <div
            className="flex items-center w-full justify-center cursor-pointer p-1 transition-all duration-300 rounded  hover:scale-[1.002] hover:shadow-[0_5px_20px_-5px_rgba(77,77,77)]"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            <img
                className="bg-white rounded-sm w-10 h-10 p-1" 
                src={logo}
                alt="logo"
            />
            <span className="text-center text-xl font-extrabold text-white w-full">{label}</span>
        </div>
    );
};

export default LogoButton;
