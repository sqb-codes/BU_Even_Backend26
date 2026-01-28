export const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task App</h1>
                <nav className="flex gap-6">
                    <a href="/" className="hover:text-blue-200 transition">Home</a>
                    <a href="/tasks" className="hover:text-blue-200 transition">Tasks</a>
                    <a href="/about" className="hover:text-blue-200 transition">About</a>
                </nav>
            </div>
        </header>
    )
}