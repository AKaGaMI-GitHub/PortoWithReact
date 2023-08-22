import InputLabel from "@/Components/InputLabel";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function CategoryEdit(props){
    const [name_category, setCategory] = useState(props.category.name_category)
    
    const handleSubmit = () => {
        const data = {
            id: props.category.id, name_category
        }
        router.put(`/admin/category/${props.category.id}`, data, {
            'X-Inertia': true,
        })
    }
    return (
        <AdminLayout>
            <Head title="Edit Category"></Head>
            <div className="py-6">
                <div className="max-w-screen-xl mx-auto">
                    <InputLabel htmlFor="category" value="Category" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Category" onChange={(name_category) => setCategory(name_category.target.value)} defaultValue={props.category.name_category} />
                    </div>
                    <button onClick={() => handleSubmit()} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                        Edit Data
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}