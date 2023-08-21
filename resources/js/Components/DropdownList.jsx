const DropdownList = ({ category }) => {
    return CategoryList(category)
}

const CategoryList = (category) => {
    return category.map((data,i)=> { 
        return (
            <option value={data.id}>{data.name_category}</option>
        )
    })
}

export default DropdownList