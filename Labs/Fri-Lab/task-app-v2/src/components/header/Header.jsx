export const Header = ({username}) => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-blue-700 font-bold text-lg">✓</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">Task Manager</h1>
                    </div>
                    <div className="text-white">
                        <p className="text-sm text-blue-100">Welcome back</p>
                        <p className="text-lg font-semibold">{username}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}