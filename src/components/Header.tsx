import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <h1 className="text-2xl font-bold text-blue-600">Flow</h1>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/service"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                Service
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
