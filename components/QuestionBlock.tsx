import { useState } from "react";
import scriptItems from "../script/script";
import classNames from "classnames";

export default function QuestionBlock({id, reset}: {id: string, reset?: () => any}) {
    const question = scriptItems.find(d => d.id === id);
    // console.log(question);
    const [childId, setChildId] = useState<string>("");
    const resetFunc = (id === "start") ? () => setChildId("") : reset;
    
    return question ? (
        <>
            <div className="p-3 sm:p-4 border shadow rounded bg-white mt-16 mb-3 sm:mb-4 prose sm:prose-xl max-w-none">
                {question.content}
            </div>
            <div className="flex text-white gap-3 sm:gap-4 flex-wrap">
                {question.options.map(d => (
                    <button className={classNames("px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition-scale", (childId && childId !== d.toId) && "opacity-25")} onClick={() => {
                        setChildId(d.toId);
                    }} key={d.toId}>{d.label}</button>
                ))}
                {!question.options.length && (
                    <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition-scale" onClick={resetFunc}>
                        Reset (go back to beginning of script)
                    </button>
                )}
            </div>
            {childId && (
                <QuestionBlock id={childId} key={childId} reset={resetFunc}/>
            )}
        </>
    ) : (
        <p>Question with id "{id}" not found</p>
    )
}