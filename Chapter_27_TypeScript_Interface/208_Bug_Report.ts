interface BugReport {
    id:number;
    title:string;
    severity:string;
    stepstoreproduce:string[]
};

const bugReport1:BugReport={
    id:1,
    title:"bug 1",
    severity:"High",
    stepstoreproduce:["step1","step2"]
};

const bugReport2:BugReport={
    id:2,
    title:"bug 2",
    severity:"High",
    stepstoreproduce:["step1","step2"]
};