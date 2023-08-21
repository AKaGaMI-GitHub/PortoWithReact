import CategoryList from "@/Components/CategoryList";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function CategoryIndex(props){
    const [isNotif, setIsNotif] = useState(false)
    
    const Notif = () => {
        setIsNotif(true)
    }
    return (
        <AdminLayout>
            <Head title="Category"></Head>
            <div className="py-6">
                <div className="relative flex justify-center w-full overflow-x-auto">
                    <div className="max-w-screen-xl mx-auto">
                        <div>{Notif && props.flash.message}</div>
                        <div className="flex justify-end p-2 font-medium text-white">
                            <Link href={route('category.create')} className="p-2 bg-green-700 rounded-md">
                                Create Data
                            </Link>
                        </div>
                        <div className="border-2 drop-shadow-md">
                            <table className="text-left text-gray-500 text-md">
                                <thead className="font-medium text-gray-700 bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <CategoryList category={props.category.data}></CategoryList>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )

}