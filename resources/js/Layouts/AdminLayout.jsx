import LogoutButton from "@/Components/LogoutButton"
import { Link } from "@inertiajs/react"

export default function AdminLayout({children, ...props}){
    return (
        <div className="min-h-screen">
            <nav className="bg-white border-2 border-b-gray-200">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                    <Link
                        href={route('dashboard')}
                        className="flex items-center"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Danger Zone</span>
                    </Link>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                        <Link
                            href={route('dashboard')}
                            className="block p-0 rounded"
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link
                            href={route('category.index')}
                            className="block p-0 rounded"
                        >
                            Category
                        </Link>
                        </li>
                        <li>
                        <Link
                            href={route('project.index')}
                            className="block p-0 rounded"
                        >
                            Project
                        </Link>
                        </li>
                        <li>
                            <LogoutButton method="post" href={route('logout')} as="button">
                                Log Out
                            </LogoutButton>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div>{children}</div>
        </div>
    )
}