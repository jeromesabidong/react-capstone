const Footer = () => {
    return <section className="w-full bg-primary-green text-secondary-grey p-3">
        <footer className="lg:flex items-top justify-center w-full gap-10">
            <img className="h-20 pb-5 rounded" src='/chef-b.jpg' height={200} alt='chef'></img>

            <div className="pb-5">
                <h2 className="font-bold">Little Lemon</h2>
                <ul>
                    <li key="home">Home</li>
                    <li key="about">About</li>
                </ul>
            </div>

            <div className="pb-5">
                <h3 className="font-bold">Food</h3>
                <ul>
                    <li key="menu">Menu</li>
                    <li key="reservation">Reservations</li>
                    <li key="order-online">Order Online</li>
                </ul>
            </div>

            <div className="pb-5">
                <h3 className="font-bold">Socials</h3>
                <ul>
                    <li key="facebook">Facebook</li>
                    <li key="instagram">Instagram</li>
                    <li key="email">Email</li>
                </ul>
            </div>

        </footer>
    </section>
}

export default Footer;