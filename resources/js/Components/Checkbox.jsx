export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-blue-600 text-blue-600 shadow-sm focus:ring-blue-600 ' +
                className
            }
        />
    );
}
