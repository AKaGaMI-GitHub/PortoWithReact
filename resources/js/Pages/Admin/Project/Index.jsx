import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function ProjectIndex(props){
    return (
        <AdminLayout>
            <Head title="Projects"></Head>
            <div className="py-6">
                <div className="relative flex justify-center w-full overflow-x-auto">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex justify-end p-2 font-medium text-white">
                            <Link href={route('project.create')} className="p-2 bg-green-700 rounded-md">
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
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.project.data.map((data) => (
                                        <tr className="bg-white border-b" key={data.id}>
                                            <th scope="row" className="px-6 py-4">
                                                {data.id}
                                            </th>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {data.title}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap">
                                                {data.description.length > 60 ? `${data.description.substring(0,60)}...` : data.description}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {data.category.name_category}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={route('project.edit', data.id)} className="p-2 font-medium text-blue-600 hover:underline">Edit</Link>
                                                <Link href={route('project.destroy', data.id)} method="DELETE" className="p-2 font-medium text-red-600 hover:underline">Delete</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}