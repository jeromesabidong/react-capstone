import Header from "../sections/Header";
import Nav from "../sections/Nav";

const HomePage = () => {
    return <>
        <Header>
            <div className="max-w-80 justify-self-end pt-2">
                <h1 className="text-primary-yellow font-bold font-sans text-3xl">Little Lemon</h1>
                <h2 className="text-secondary-grey font-semibold font-sans text-xl mb-6">Chicago</h2>
                <p className="text-secondary-grey font-medium font-serif lg:text-2xl">We ara a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="max-w-80 justify-self-start pt-2">
                <img src="/restaurantfood.jpg" alt="restaurant food" className="block h-60 rounded-md" />
            </div>
        </Header>
    </>
}

export default HomePage;