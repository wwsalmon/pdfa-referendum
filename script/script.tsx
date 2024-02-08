const startOptions = [
    {label: "No", toId: "explain"},
    {label: "Yes (super excited/down/enthusiastic)", toId: "enthYes"},
    {label: "Yes (unenthusiastic/no further comments)", toId: "enthYes"},
    {label: "Yes (explicitly anti-divestment/zionist)", toId: "hangup"},
    {label: "If person says that now is not a good time", toId: "askTime"},
];

const scriptItems = [
    {
        id: "start",
        content: <p><i>Start here. Do you know the person you’re calling?</i></p>,
        options: [
            {label: "No (cold call)", toId: "startCold"},
            {label: "Yes", toId: "startWarm"},
        ]
    },
    {
        id: "startCold",
        content: <p>Hi! My name is —--- and I am a —---- College student calling because I wanted to talk to you about the upcoming ASPC referendum on divestment. <b>Have you heard about it?</b></p>,
        options: startOptions,
    },
    {
        id: "askTime",
        content: <p>When’s a good time I can call you back later today?</p>,
        options: [],
    },
    {
        id: "startWarm",
        content: <p>Hi! Have you heard about the upcoming ASPC referendum on divestment?</p>,
        options: startOptions,
    },
    {
        id: "unethYes",
        content: <p>What are your thoughts?</p>,
        options: [
            {label: "Support divestment", toId: "enthYes"},
            {label: "Uncertain/don't know much", toId: "motivation"},
            {label: "Negative/hostile", toId: "hangup"},
        ]
    },
    {
        id: "enthYes",
        content: <>
            <p>That’s great to hear! There are going to be 5 questions about divestment and disclosure on the form, and it’s super important that as many people vote YES on all five questions so that Pomona administration sees that divestment is what the student body supports.</p>
            <p>These are the questions you will be asked:</p>
            <ol>
                <li>Should the Investments Committee on the Board of Trustees disclose Pomona College’s investments in weapons manufacturers?</li>
                <li>Should Pomona College divest completely from all weapons manufacturers?</li>
                <li>Given the definitions above, should Pomona College cease all academic support, as outlined by USACBI, for the apartheid system within the State of Israel?</li>
                <li>Should the Investments Committee on the Board of Trustees disclose Pomona College’s investments in all companies aiding the ongoing apartheid system within the State of Israel?</li>
                <li>Should Pomona College divest from all companies aiding the ongoing apartheid system within the State of Israel?</li>
            </ol>
            <p><b>Do these all make sense?</b></p>
        </>,
        options: [
            {label: "No (have questions)", toId: "questions"},
            {label: "Yes", toId: "commit"},
        ]
    },
    {
        id: "questions",
        content: <p>What questions or concerns do you have about the questions on the referendum? <i>(Answer their questions)</i></p>,
        option: [
            {label: "(Done)", toId: "commit"},
        ],
    },
    {
        id: "commit",
        content: <p><b>Can you commit to voting yes on all 5 questions supporting divestment and disclosure?</b></p>,
        options: [
            {label: "No", toId: "questions"},
            {label: "Yes", toId: "success"},
        ]
    },
    {
        id: "success",
        content: <p>Thank you so much for your time and commitment to vote yes for divestment. Your vote makes a big difference in this campaign. Voting opens on February 19th, and I’ll be following up with reminders. <i>(Remember to record this call in the spreadsheet.)</i></p>,
        options: [],
    },
    {
        id: "explain",
        content: <p>On February 19th Pomona students will have the opportunity to vote on a referendum that asks whether they support the College disclosing their investments, divesting from weapons manufacturing companies, and divesting from israel and israeli affiliated companies that are complicit in the genocide and ongoing apartheid. <b>What are your thoughts on this?</b></p>,
        options: [
            {label: "Aligned with divestment", toId: "enthYes"},
            {label: "Unsure", toId: "motivation"},
            {label: "Negative", toId: "hangup"},
        ],
    },
    {
        id: "hangup",
        content: <p>Okay thanks for your time. <i>(hang up)</i></p>,
        options: [],
    },
    {
        id: "motivation",
        content: <>
            <p><i>(Share your own investment in the referendum and the issue of divestment from the israeli state)</i></p>
            <p>General but less strong point: This referendum is so important because it represents the student body’s opinions and stance toward the ongoing genocide in Gaza. This referendum can and will be strong if we can get the majority of students to participate in voting. Pomona College’s administration has refused to act in solidarity with Palestinians and has in fact helped to fund the ongoing genocide through their investments. The referendum is an opportunity for Pomona students to act in solidarity with Palestinians and make it loud and clear to Pomona that their complicity in genocide is unacceptable to the student body and community.</p>
            <p><b>Can I walk through the 5 questions that will be on the referendum with you?</b></p>
        </>,
        options: [
            {label: "Yes", toId: "enthYes"},
            {label: "No", toId: "followup"},
        ]
    },
    {
        id: "followup",
        content: <p>It’ll only take a minute and is really important that the questions are clear and make sense to you.</p>,
        options: [
            {label: "Okay", toId: "enthYes"},
            {label: "Hesitant (Keep trying to convince)", toId: "motivation"},
            {label: "Hostile (give up)", toId: "hangup"},
        ]
    },
];

export default scriptItems;