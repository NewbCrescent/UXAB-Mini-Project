
type InputLabelProps = {
    title: string;
    children: React.ReactNode;
}

export default function InputLabel({title, children}:InputLabelProps) {
    return (
        <div className={"w-fit flex flex-col gap-2"}>
            <label>{title}</label>
            {children}
        </div>
    )
}