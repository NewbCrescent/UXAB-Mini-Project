import {memo, useState} from "react"
import * as icons from "lucide-react"

export type CardProps = {
    ID: number;
    DueDate: string;
    Description: string;
    Title: string;
    Difficulty: number;
    setArray: React.Dispatch<React.SetStateAction<CardProps[]>>;
    index: number;
}

const Card = memo(({ID, DueDate, Description, Title, Difficulty, setArray}:CardProps) => {
    const [show, setShow] = useState(true);

    if (!show) {
        setArray(prev => prev.filter((el) => el.ID !== ID));
    }

    return (
        <>
            {show && (
                <div className={`flex flex-1 min-w-full gap-2 items-center bg-white rounded-md px-2 my-4`}>
                    <icons.XCircleIcon className={"cursor-pointer hover:text-red-600 text-black"}
                                       onClick={() => {setShow(false)}}
                    />
                    <p className={"text-2xl text-black"}>{Title}</p>
                    <p className={"text-2xl text-black"}>|</p>
                    <p className={"text-2xl text-black"}>{Description}</p>
                    <p className={"text-2xl text-black"}>|</p>
                    <p className={"text-2xl text-black"}>{DueDate}</p>
                    <p className={"text-2xl text-black"}>|</p>
                    {Array.from({length: Difficulty}, (_, index) => index).map(() => (
                        <icons.Star className={"text-black"}></icons.Star>
                    ))}
                </div>
            )}
        </>
    );
});

export default Card;