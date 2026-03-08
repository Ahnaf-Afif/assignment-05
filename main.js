// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//   window.location.href = "index.html";
// }

const loadProblems = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayAllProblems(data.data));
};

const displayAllProblems = (data) => {
  const problemsBox = document.getElementById("problems-box");
  problemsBox.innerHTML = "";

  for (const problem of data) {
    console.log(data);
    const div = document.createElement("div");
    div.className = "cursor-pointer";
    div.onclick = () => {
      openModal(problem);
    };
    div.innerHTML = `<div
                                    class="max-w-sm bg-white border border-gray-100 ${problem.status === "open" ? "border-t-emerald-500" : "border-t-purple-500"} border-t-4 rounded-xl shadow-sm"
                                >
                                    

                                    <div class="p-5">
                                    <div class="flex justify-between items-start mb-4">
                                        <div>
                                        <img src="/assets/Open-Status.png" alt="" />
                                        </div>

                                        <span
                                        class="px-4 py-1 rounded-full  ${problem.priority === "high" ? "bg-red-50" : problem.priority === "medium" ? "bg-yellow-50" : "bg-green-50"} ${problem.priority === "high" ? "text-red-500" : problem.priority === "medium" ? "text-yellow-500" : "text-green-500"} text-xs font-bold tracking-wider uppercase"
                                        >
                                        ${problem.priority}
                                        </span>
                                    </div>

                                    <h3 class="text-gray-800 font-bold text-lg leading-tight mb-2">
                                        ${problem.title}
                                    </h3>
                                    <p class="text-gray-500 text-sm leading-relaxed mb-5">
                                        ${problem.description}
                                    </p>

                                    <div class="flex gap-2 mb-6">
                                        <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                            <span
                                            class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-500 text-xs font-semibold"
                                            >
                                            <span class="text-sm"><i class="fa-solid fa-bug"></i></span> BUG
                                            </span>
                                        </div>
                                        <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                            <span
                                            class="flex items-center gap-1 px-3 py-1 rounded-full border border-amber-100 bg-amber-50 text-amber-500 text-xs font-semibold"
                                            >
                                            <span class="text-sm"
                                                ><img class="max-w-3" src="./assets/Aperture.png" alt=""
                                            /></span>
                                            HELP WANTED
                                            </span>
                                            </div>
                                            <div  class = "${problem.priority === "high" ? "hidden" : problem.priority === "medium" ? "hidden" : "block"}">
                                            <span
                                            class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-green-50 text-green-400 text-xs font-semibold"
                                            >
                                            <span class="text-sm"><i class="fa-solid fa-star"></i>${problem.label}
                                            </span>
                                        </div>

                                    </div>

                                    <div class="pt-4 border-t border-gray-100">
                                        <p class="text-gray-500 text-sm font-medium">${problem.author}</p>
                                        <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                    </div>
                                    </div>
                                </div>`;
    problemsBox.appendChild(div);
  }
  count();
};

const loadOpenProblems = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayOpenProblems(data.data));
};

const displayOpenProblems = (data) => {
  const problemsBox = document.getElementById("problems-box");
  problemsBox.innerHTML = "";

  for (const problem of data) {
    console.log(data);
    if (problem.status === "open") {
      const div = document.createElement("div");
      div.innerHTML = `<div
                                        class="max-w-sm bg-white border border-gray-100 ${problem.status === "open" ? "border-t-emerald-500" : "border-t-purple-500"} border-t-4 rounded-xl shadow-sm"
                                    >
                                        

                                        <div class="p-5">
                                        <div class="flex justify-between items-start mb-4">
                                            <div>
                                            <img src="/assets/Open-Status.png" alt="" />
                                            </div>

                                            <span
                                            class="px-4 py-1 rounded-full  ${problem.priority === "high" ? "bg-red-50" : problem.priority === "medium" ? "bg-yellow-50" : "bg-green-50"} ${problem.priority === "high" ? "text-red-500" : problem.priority === "medium" ? "text-yellow-500" : "text-green-500"} text-xs font-bold tracking-wider uppercase"
                                            >
                                            ${problem.priority}
                                            </span>
                                        </div>

                                        <h3 class="text-gray-800 font-bold text-lg leading-tight mb-2">
                                            ${problem.title}
                                        </h3>
                                        <p class="text-gray-500 text-sm leading-relaxed mb-5">
                                            ${problem.description}
                                        </p>

                                        <div class="flex gap-2 mb-6">
                                            <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-500 text-xs font-semibold"
                                                >
                                                <span class="text-sm"><i class="fa-solid fa-bug"></i></span> BUG
                                                </span>
                                            </div>
                                            <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-amber-100 bg-amber-50 text-amber-500 text-xs font-semibold"
                                                >
                                                <span class="text-sm"
                                                    ><img class="max-w-3" src="./assets/Aperture.png" alt=""
                                                /></span>
                                                HELP WANTED
                                                </span>
                                                </div>
                                                <div  class = "${problem.priority === "high" ? "hidden" : problem.priority === "medium" ? "hidden" : "block"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-green-50 text-green-400 text-xs font-semibold"
                                                >
                                                <span class="text-sm"><i class="fa-solid fa-star"></i>ENHANCEMENT
                                                </span>
                                            </div>

                                        </div>

                                        <div class="pt-4 border-t border-gray-100">
                                            <p class="text-gray-500 text-sm font-medium">${problem.author}</p>
                                            <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        </div>
                                    </div>`;
      problemsBox.appendChild(div);
    }
  }
  count();
};

const loadClosedProblems = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayClosedProblems(data.data));
};

const displayClosedProblems = (data) => {
  const problemsBox = document.getElementById("problems-box");
  problemsBox.innerHTML = "";

  for (const problem of data) {
    console.log(data);
    if (problem.status === "closed") {
      const div = document.createElement("div");
      div.innerHTML = `<div
                                        class="max-w-sm bg-white border border-gray-100 ${problem.status === "open" ? "border-t-emerald-500" : "border-t-purple-500"} border-t-4 rounded-xl shadow-sm"
                                    >
                                        

                                        <div class="p-5">
                                        <div class="flex justify-between items-start mb-4">
                                            <div>
                                            <img src="/assets/Open-Status.png" alt="" />
                                            </div>

                                            <span
                                            class="px-4 py-1 rounded-full  ${problem.priority === "high" ? "bg-red-50" : problem.priority === "medium" ? "bg-yellow-50" : "bg-green-50"} ${problem.priority === "high" ? "text-red-500" : problem.priority === "medium" ? "text-yellow-500" : "text-green-500"} text-xs font-bold tracking-wider uppercase"
                                            >
                                            ${problem.priority}
                                            </span>
                                        </div>

                                        <h3 class="text-gray-800 font-bold text-lg leading-tight mb-2">
                                            ${problem.title}
                                        </h3>
                                        <p class="text-gray-500 text-sm leading-relaxed mb-5">
                                            ${problem.description}
                                        </p>

                                        <div class="flex gap-2 mb-6">
                                            <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-red-50 text-red-500 text-xs font-semibold"
                                                >
                                                <span class="text-sm"><i class="fa-solid fa-bug"></i></span> BUG
                                                </span>
                                            </div>
                                            <div class = "${problem.priority === "high" ? "block" : problem.priority === "medium" ? "block" : "hidden"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-amber-100 bg-amber-50 text-amber-500 text-xs font-semibold"
                                                >
                                                <span class="text-sm"
                                                    ><img class="max-w-3" src="./assets/Aperture.png" alt=""
                                                /></span>
                                                HELP WANTED
                                                </span>
                                                </div>
                                                <div  class = "${problem.priority === "high" ? "hidden" : problem.priority === "medium" ? "hidden" : "block"}">
                                                <span
                                                class="flex items-center gap-1 px-3 py-1 rounded-full border border-red-100 bg-green-50 text-green-400 text-xs font-semibold"
                                                >
                                                <span class="text-sm"><i class="fa-solid fa-star"></i>ENHANCEMENT
                                                </span>
                                            </div>

                                        </div>

                                        <div class="pt-4 border-t border-gray-100">
                                            <p class="text-gray-500 text-sm font-medium">${problem.author}</p>
                                            <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        </div>
                                    </div>`;
      problemsBox.appendChild(div);
    }
  }
  count();
};

const openModal = (problem) => {
  const modalDiv = document.createElement("div");

  const existingModal = document.getElementById("dynamic_modal");
  if (existingModal) {
    existingModal.remove();
  }

  modalDiv.id = "dynamic_modal";

  modalDiv.innerHTML = ` <dialog id="issue_modal" class="modal">
        <div class="modal-box max-w-4xl p-10 bg-white rounded-2xl">
          <div class="mb-5">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-3">
              ${problem.title}
            </h2>
            <div class="flex items-center text-sm text-gray-600 gap-2">
              <span
                class="badge ${problem.status === "open" ? "bg-emerald-500" : "bg-purple-500"} text-white font-semibold py-3 px-4"
                >${problem.status === "open" ? "Open" : "Closed"}</span
              >
              <span class="text-gray-400">•</span>
              <span>Opened by ${problem.author}</span>
              <span class="text-gray-400">•</span>
              <span>${problem.createdAt}</span>
            </div>
          </div>

          <div class="flex gap-2 mb-8">
            <div
              class="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100 text-xs font-semibold"
            >
              <i class="fa-solid fa-bug text-sm"></i>
              <span>BUG</span>
            </div>
            <div
              class="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1 rounded-full border border-amber-100 text-xs font-semibold"
            >
              <img
                class="w-3.5 h-3.5"
                src="./assets/Aperture.png"
                alt="aperture"
              />
              <span>HELP WANTED</span>
            </div>
          </div>

          <p class="text-gray-600 text-lg leading-relaxed mb-10">
            The navigation menu doesn't collapse properly on mobile devices.
            Need to fix the responsive behavior.
          </p>

          <div
            class="bg-gray-50 border border-gray-100 rounded-xl p-8 flex justify-between items-start mb-8"
          >
            <div>
              <span class="text-gray-500 font-medium text-lg block mb-1.5"
                >Assignee:</span
              >
              <span class="text-gray-900 font-bold text-xl">Fahim Ahmed</span>
            </div>
            <div>
              <span class="text-gray-500 font-medium text-lg block mb-1.5"
                >Priority:</span
              >
              <span
                class="bg-red-500 text-white font-extrabold px-5 py-1 rounded-full text-xs uppercase tracking-wider"
              >
                HIGH
              </span>
            </div>
          </div>

          <div class="modal-action">
            <form method="dialog">
              <button
                class="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none px-8 rounded-xl"
              >
                Close
              </button>
            </form>
          </div>
        </div>

        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> `;

  document.body.appendChild(modalDiv);
  document.getElementById("issue_modal").showModal();
};

const count = () => {
  const problemsBox = document.getElementById("problems-box");
  const count = problemsBox.children.length;
  document.getElementById("issueCount").innerText = `${count} Issues`;
};

loadProblems();
