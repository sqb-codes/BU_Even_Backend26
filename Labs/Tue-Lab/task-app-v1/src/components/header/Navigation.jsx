export const Navigation = () => {
    return (
        <nav className="flex space-x-6 border-t border-blue-600 pt-4">
            <a 
                href="#" 
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
                Dashboard
            </a>
            <a 
                href="#" 
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
                Tasks
            </a>
            <a 
                href="#" 
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
                Projects
            </a>
            <a 
                href="#" 
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
                Settings
            </a>
        </nav>
    )
}
