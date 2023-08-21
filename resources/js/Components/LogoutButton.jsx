import { Link } from "@inertiajs/react"

export default function LogoutButton({ className = '', children, ...props }){
    return (
        <Link 
            {...props} 
            className={'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-black md:p-0' + 
            className}>
            {children}
        </Link>
    )
}