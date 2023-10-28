import { Link } from "@inertiajs/react"

const CategoryList = ({ category }) => {
    return isCategory(category)
}

const isCategory = (category) => {
    let number = 1;
    return category.map((data) => {
        return (
            <tbody>
                <tr className="bg-white border-b" key={data.id}>
                    <th scope="row" className="px-6 py-4">
                        {number++}
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