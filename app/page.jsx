import SearchForm from "../components/SearchForm";

export default function Page(){
    return (
        <div className="max-w-6xl mx-auto px-8 md:px-4 lg:px-0">
            <section className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-semibold font-roboto my-6">Discover the <br /> World’s Top Designers</h1>
                <p className="md:text-lg text-gray-900">Explore work from the most talented and accomplished <br /> designers ready to take on your next project.</p>
                <SearchForm />
            </section>
        </div>
    )
}