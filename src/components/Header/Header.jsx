import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex items-center justify-between max-w-[1280px] mx-auto md:pt-12 pt-6 pb-6">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;