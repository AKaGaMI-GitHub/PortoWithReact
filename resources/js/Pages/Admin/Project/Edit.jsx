import DropdownList from "@/Components/DropdownList";
import InputLabel from "@/Components/InputLabel";
import UploadPhoto from "@/Components/UploadPhoto";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function CategoryCreate(props){

    const [title, setTitle] = useState(props.project.title)
    const [description, setDescription] = useState(props.project.description)
    const [category_id, setCategory] = useState(props.project.category_id)
    const [link_production, setLinkProduction] = useState(props.project.link_production)
    const [link_github, setLinkGithub] = useState(props.project.link_github)
    const [link_behance, setLinkBehance] = useState(props.project.behance)
    const [link_dribbble, setLinkDribbble] = useState(props.project.dribbble)
    const [img, setImg] = useState(props.project.img)

    
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
            .post(`/admin/project/${props.project.id}`, {
                _method: 'put',
                title: data.title,
                description: data.description,
                category_id: data.category_id,
                link_production: data.link_production,
                link_github: data.link_github,
                link_behance: data.link_behance,
                link_dribbble: data.link_dribbble,
                img: data.img,
            }, {
                'X-Inertia': true,
            })

    }

    return (
        <AdminLayout>
            <Head title="Edit Project"></Head>
            <div className="py-6">
                <div className="max-w-screen-xl mx-auto">
                    <InputLabel htmlFor="title" value="Title" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Title" onChange={(title) => setTitle(title.target.value)} defaultValue={props.project.title}/>
                    </div>
                    <InputLabel htmlFor="description" value="Description" className="text-xl"/>
                    <div className="py-4">
                        <textarea className="block w-[500px] h-[150px] mb-2 text-sm font-medium text-gray-700" placeholder="Description" onChange={(description) => setDescription(description.target.value)} defaultValue={props.project.description}/>
                    </div>
                    <InputLabel htmlFor="category" value="Category" className="text-xl"/>
                    <div className="py-4">
                        <select className="block w-[500px] mb-2 text-sm font-medium text-gray-700" onChange={(category_id) => setCategory(category_id.target.value)}>
                            <option value={props.project.category_id}>{props.project.category.name_category}</option>
                            <DropdownList category={props.category}/> 
                        </select>
                    </div>
                     <InputLabel htmlFor="link_website" value="Website (On Production)" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Website example: https://example.com" onChange={(link_production) => setLinkProduction(link_production.target.value)} defaultValue={props.project.link_production}/>
                    </div>
                    <InputLabel htmlFor="link_github" value="Github" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Github" onChange={(link_github) => setLinkGithub(link_github.target.value)} defaultValue={props.project.link_github}/>
                    </div>
                    <InputLabel htmlFor="link_behance" value="Behance" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Behance" onChange={(link_behance) => setLinkBehance(link_behance.target.value)} defaultValue={props.project.behance}/>
                    </div>
                    <InputLabel htmlFor="link_dribbble" value="Dribbble" className="text-xl"/>
                    <div className="py-4">
                        <input className="block w-[500px] mb-2 text-sm font-medium text-gray-700" placeholder="Link Dribbble" onChange={(link_dribbble) => setLinkDribbble(link_dribbble.target.value)} defaultValue={props.project.dribbble}/>
                    </div>
                    <InputLabel htmlFor="img" value="Image" className="text-xl"/>
                    <UploadPhoto className="w-[500px]" onChange={(img) => setImg(img.target.files[0])}/>
                    <InputLabel htmlFor="img" value="Previous Image" className="text-xl"/>
                    <div className="py-4">
                        {props.project.img ? (<img src={`/storage/${props.project.img.substring(7)}`} width="50%" alt="Project Image" />) : (<p className="font-semibold">No Image Yet!</p>)}
                    </div>
                    <button onClick={() => handleSubmit()} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                        Edit Data
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}