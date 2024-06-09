const Header = ({ children }) => {
    return <header className="h-60 w-full lg:mx-80 bg-primary-green grid grid-cols-2 gap-14 justify-items-center mb-10 sm:mx-4">
        { children }
    </header>
    // return <section className="h-60 w-full lg:mx-80 bg-primary-green">
    //     <header className="grid grid-cols-2 justify-items-center h-40 w-full">
    //         <div className=" w-60">
    //             <h1 className="text-primary-yellow font-bold text-3xl">Little Lemon</h1>
    //             <h2 className="text-secondary-grey font-bold mb-3 text-xl">Chicago</h2>
    //             <p className="text-secondary-grey font-serif text-base" >We are a family-owned Mediterranean restaurant, 
    //                 focused on traditional recipes served with a twist.
    //             </p>
    //         </div>
    //         <div className="">
    //             <img src="/restaurantfood.jpg" className="rounded-md h-80 mt-2" alt="restaurant food" />
    //         </div>
    //     </header>
    // </section>
}

export default Header;