import { forwardRef } from "react";

const Input = forwardRef(function ({ label, textarea, ...props }, ref) {
    const classes = "w-full p-1 border-b-2 rounded border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-blue-600";

    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? (
            <textarea ref={ref} className={classes} {...props} />
        ) : (
            <input ref={ref} className={classes} {...props} />)
        }
    </p>
});

export default Input;