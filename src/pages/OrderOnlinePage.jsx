const OrderOnlinePage = () => {
    const specials = [
        {
            name: "Greek Salad",
            image: "/greek-salad.jpg",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with garlic.",
        },
        {
            name: "Lemon Dessert",
            image: "/lemon-dessert.jpg",
            price: 6.99,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced.",
        },
        {
            name: "Greek Salad 2",
            image: "/greek-salad.jpg",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with garlic.",
        }
    ];
    return <main className="grid grid-cols-2 justify-items-centers">
        <h1 className="font-serif text-3xl font-bold mb-10">This week's specials!</h1>
        <button className="font-sans text-sm rounded-xl px-4 py-1 bg-primary-yellow hover:bg-secondary-coral mb-10">Online Menu</button>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mb-10 lg:col-span-2 sm:w-full justify-center">
            { specials.map((special) => {
                return <div key={special.name} className="flex flex-col bg-secondary-grey lg:max-w-[250px]">
                    <img src={special.image} alt={special.name} className="h-[200px] rounded-tl-md rounded-tr-md object-cover" />
                    <h3 className="flex lg:flex-row flex-col gap-9 p-2">
                        <span className="font-bold">{special.name}</span>
                        <span className="font-bold text-secondary-coral self-stretch">$ {special.price}</span>
                    </h3>
                    <p className="p-2">{special.description}</p>
                    <div className="p-2 font-semibold">Order a delivery. <img src="/basket.svg" alt="basket icon" className="h-[20px] inline pl-4" /></div>
                </div>
            }) }
        </div>
    </main>
}

export default OrderOnlinePage;