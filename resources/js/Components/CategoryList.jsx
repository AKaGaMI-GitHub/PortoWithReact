import { Link } from "@inertiajs/react"

const CategoryList = ({ category }) => {
    return isCategory(category)
}

const isCategory = (category) => {
    return category.map((data, i) => {
        return (
            <tbody>
                <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4">
                        {data.id}
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {data.name_category}
                    </td>
                    <td className="px-6 py-4">
                        <Link href={route('category.edit', data.id)} className="p-2 font-medium text-blue-600 hover:underline">Edit</Link>
                        <Link href={route('category.destroy', data.id)} method="DELETE" className="p-2 font-medium text-red-600 hover:underline">Delete</Link>
                    </td>
                </tr>
            </tbody>            
        )
    })
}


export default CategoryList