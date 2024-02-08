import { EB_Garamond } from "next/font/google";

export default function Home() {
    return (
        <div className="mx-auto my-16 max-w-2xl sm:text-xl px-4">
            <h1 className="text-center mb-8"><b>PDfA referendum script</b></h1>
            <div className="p-3 sm:p-4 border shadow rounded bg-white mt-16 mb-3 sm:mb-4">
                <p><i>Start here. Do you know the person you’re calling?</i></p>
            </div>
            <div className="flex text-white gap-3 sm:gap-4">
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">Yes</button>
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">No (cold call)</button>
            </div>
            <div className="p-4 border shadow rounded bg-white mt-16 mb-3 sm:mb-4">
                <p>Hi! My name is —--- and I am a —---- College student calling because I wanted to talk to you about the upcoming ASPC referendum on divestment. <b>Have you heard about it?</b></p>
            </div>
            <div className="flex text-white gap-3 sm:gap-4 flex-wrap">
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">Yes (long answer long answer)</button>
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">Yes (long answer long answer)</button>
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">Yes (long answer long answer)</button>
                <button className="px-4 py-2 bg-black rounded hover:shadow-lg hover:scale-105 transition">No (cold call)</button>
            </div>
        </div>
    );
}