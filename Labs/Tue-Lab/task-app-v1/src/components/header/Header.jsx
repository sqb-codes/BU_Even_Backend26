import { Navigation } from './Navigation';

export const Header = ({username}) => {
    return (
        <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-lg p-2">
                            <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.5 1.5H3a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h14a1.5 1.5 0 001.5-1.5V8.5a1.5 1.5 0 00-1.5-1.5h-6l-1.5-1.5z"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold">Task App</h1>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-blue-100">Welcome</p>
                        <p className="text-lg font-semibold">{username}</p>
                    </div>
                </div>
                <Navigation />
            </div>
        </header>
    )
}