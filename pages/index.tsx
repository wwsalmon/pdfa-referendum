import { EB_Garamond } from "next/font/google";
import QuestionBlock from "../components/questionBlock";
import { useState } from "react";

export default function Home() {
    return (
        <div className="mx-auto my-16 max-w-2xl sm:text-xl px-4 pb-64">
            <h1 className="text-center mb-8"><b>PDfA referendum script</b></h1>
            <QuestionBlock id="start"/>
        </div>
    );
}