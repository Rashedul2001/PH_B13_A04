
const allList = document.getElementById("all-list");
const interviewList = document.getElementById("interview-list");
const rejectedList = document.getElementById("rejected-list");
const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

let totalCount = 8;


// list toggle functionality
function showJobList(list) {

    allList.classList.add("hidden");
    interviewList.classList.add("hidden");
    rejectedList.classList.add("hidden");
    allTab.classList.remove("bg-[#3B82F6]");
    interviewTab.classList.remove("bg-[#3B82F6]");
    rejectedTab.classList.remove("bg-[#3B82F6]");

    if (list === "all") {
        allList.classList.remove("hidden");
        allTab.classList.add("bg-[#3B82F6]")

    }
    if (list === "interview") {
        interviewList.classList.remove("hidden");
        interviewTab.classList.add("bg-[#3B82F6]")
    }
    if (list === "rejected") {
        rejectedList.classList.remove("hidden");
        rejectedTab.classList.add("bg-[#3B82F6]")
    }
}

function maintainNoJob() {
    if (interviewList.childElementCount == 1) {
        interviewList.querySelector(".no-job").classList.remove("hidden");

    } else {
        interviewList.querySelector(".no-job").classList.add("hidden");
    }

    if (rejectedList.childElementCount == 1) {
        rejectedList.querySelector(".no-job").classList.remove("hidden");
    } else {
        rejectedList.querySelector(".no-job").classList.add("hidden");
    }
}

function handleCardClick(target) {
    const card = target.closest(".card");
    const copyCard = card.cloneNode(true);
    const id = card.getAttribute("data-card-id");

    //delete functionality 
    if (target.classList.contains("fa-trash-can")) {
        document.querySelectorAll(`div[data-card-id="${id}"]`).forEach(el => el.remove());
        totalCount--;
        document.querySelectorAll(".total-count").forEach(el => {
            el.innerText = totalCount;
        });
        maintainNoJob();
    }

    if (target.classList.contains("interview-btn")) {

        if (!interviewList.querySelector(`div [data-card-id = "${id}"]`))
            interviewList.appendChild(copyCard);
        if (rejectedList.querySelector(`div [data-card-id = "${id}"]`))
            rejectedList.querySelector(`div [data-card-id = "${id}"]`).remove();
        maintainNoJob();

    }

    if (target.classList.contains("rejected-btn")) {
        if (!rejectedList.querySelector(`div [data-card-id = "${id}"]`))
            rejectedList.appendChild(copyCard);
        if (interviewList.querySelector(`div [data-card-id = "${id}"]`))
            interviewList.querySelector(`div [data-card-id = "${id}"]`).remove();

        maintainNoJob();
    }




}

allList.addEventListener("click", (event) => {
    handleCardClick(event.target);
});
interviewList.addEventListener("click", (event) => {
    handleCardClick(event.target);
});
rejectedList.addEventListener("click", (event) => {
    handleCardClick(event.target);
});


