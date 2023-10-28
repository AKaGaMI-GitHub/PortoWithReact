import DropdownList from "@/Components/DropdownList";
import InputLabel from "@/Components/InputLabel";
import UploadPhoto from "@/Components/UploadPhoto";
import AdminLayout from "@/Layouts/AdminLayout";

import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function CategoryCreate(props){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category_id, setCategory] = useState('')
    const [link_production, setLinkProduction] = useState('')
    const [link_github, setLinkGithub] = useState('')
    const [link_behance, setLinkBehance] = useState('')
    const [link_dribbble, setLinkDribbble] = useState('')
    const [img, setImg] = useState('')
    
    const handleSubmit = () => {
        const data = {
            title,
            description,
            category_id,
            link_production,
            link_github,
            link_behance,
            link_dribbble,
            img,
        }
        router
            .post(`/admin/project`, data, {
                'X-Inertia': true,
            })

    }

    return (
        <AdminLayout>
            <Head title="Create Project"></Head>
            <div className="py-6">
                <div className="max-w-screen-xl mx-auto">
                    <InputLabel htmlFor="title" value="Title" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Title" onChange={(title) => setTitle(title.target.value)}/>
                    </div>
                    <InputLabel htmlFor="description" value="Description" className="text-xl"/>
                    <div className="py-4">
                        <textarea className="block w-[500px] h-[150px] mb-2 text-sm font-medium text-gray-700" placeholder="Description" onChange={(description) => setDescription(description.target.value)}/>
                    </div>
                    <InputLabel htmlFor="category" value="Category" className="text-xl"/>
                    <div className="py-4">
                        <select className="block w-[500px] mb-2 text-sm font-medium text-gray-700" onChange={(category_id) => setCategory(category_id.target.value)}>
                            <option value="">Select Category</option>
                            <DropdownList category={props.category}/> 
                        </select>
                    </div>
                    <InputLabel htmlFor="link_website" value="Website (On Production)" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Website example: https://example.com" onChange={(link_production) => setLinkProduction(link_production.target.value)}/>
                    </div>
                    <InputLabel htmlFor="link_github" value="Github" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Github" onChange={(link_github) => setLinkGithub(link_github.target.value)}/>
                    </div>
                    <InputLabel htmlFor="link_behance" value="Behance" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Behance" onChange={(link_behance) => setLinkBehance(link_behance.target.value)}/>
                    </div>
                    <InputLabel htmlFor="link_dribbble" value="Dribbble" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Dribbble" onChange={(link_dribbble) => setLinkDribbble(link_dribbble.target.value)}/>
                    </div>
                    <InputLabel htmlFor="img" value="Image" className="text-xl"/>
                    <UploadPhoto className="w-[500px]" onChange={(img) => setImg(img.target.files[0])}/>
                    <button onClick={() => handleSubmit()} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                        Create Data
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}