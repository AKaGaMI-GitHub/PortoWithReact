export default function UploadPhoto({ className = '', ...props }){
    return (
        <div className="py-4">
            <input {...props} className={'block text-sm text-gray-900 border border-black cursor-pointer bg-gray-50 focus:outline-none' + className} aria-describedby="file_input_help" id="img" type="file"/>
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">PNG, JPG Only.</p>
        </div>
    )
}