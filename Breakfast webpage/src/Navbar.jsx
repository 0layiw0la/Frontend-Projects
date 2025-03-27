
export default function Navbar(){

    return(
        <>
            <div className="flex justify-between gap-6 text-white ">
                <span className="cursor-pointer hover:text-black font-semibold text-lg">RESTURANT</span>
                <div className="flex gap-6">
                    <span className="cursor-pointer hover:text-black">Home</span>
                    <span className="cursor-pointer hover:text-black">About</span>
                    <span className="cursor-pointer hover:text-black">Products</span>
                    <span className="cursor-pointer hover:text-black">Contacts</span>
                    <span className="cursor-pointer hover:text-black">Login</span>
                </div>
            </div>
        </>
    );

}