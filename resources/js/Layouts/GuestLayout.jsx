import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex items-center justify-center py-20 bg-white md:min-h-screen md:flex-cols">

            <div className="px-[20px] py-[28px] bg-white drop-shadow-md rounded-xl">
                {children}
            </div>
        </div>
    );
}
