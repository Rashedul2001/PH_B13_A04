console.log("Job Tracker App Loaded Successfully!");


const allList = document.getElementById("all-list");
const interviewList = document.getElementById("interview-list");
const rejectedList = document.getElementById("rejected-list");
const allBtn = document.getElementById("btn-all");
const interviewBtn = document.getElementById("btn-interview");
const rejectedBtn = document.getElementById("btn-rejected");

function showJobList(list) {

    allList.classList.add("hidden");
    interviewList.classList.add("hidden");
    rejectedList.classList.add("hidden");
    allBtn.classList.remove("bg-[#3B82F6]");
    interviewBtn.classList.remove("bg-[#3B82F6]");
    rejectedBtn.classList.remove("bg-[#3B82F6]");

    if (list === "all") {
        allList.classList.remove("hidden");
        allBtn.classList.add("bg-[#3B82F6]")

    }
    if (list === "interview") {
        interviewList.classList.remove("hidden");
        interviewBtn.classList.add("bg-[#3B82F6]")
    }
    if (list === "rejected") {
        rejectedList.classList.remove("hidden");
        rejectedBtn.classList.add("bg-[#3B82F6]")
    }
}

