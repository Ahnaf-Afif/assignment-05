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
                                            ${problem.status === "open" ? `<img src="/assets/Open-Status.png" alt="" />` : `<img src="/assets/Closed- Status .png" alt="" />`}
                                        
                                        
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
                                        
                                        
                                            
                                            <span class="text-sm">${problem.labels
                                              .map(
                                                (label) => `
                                                        <span class="badge badge-info badge-outline text-xs font-bold">
                                                            ${label}
                                                        </span>
                                                    `,
                                              )
                                              .join("")}
                                            </span>
                                        </div>

                                    </div>

                                    <div class="flex justify-between pt-4 pl-2 pr-2 pb-5 border-t border-gray-100">
                                        <div>
                                              <p class="text-gray-500 text-sm font-medium">#${problem.id} by ${problem.author}</p>
                                        <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        <div>
                                                 <p class="text-gray-500 text-sm font-medium">Assignee: ${problem.assignee === "" ? "Unassigned" : problem.assignee}</p>
                                        <p class="text-gray-400 text-xs mt-1">Updated: ${problem.updatedAt}</p>  
                                        </div>
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
                                        ${problem.status === "open" ? `<img src="/assets/Open-Status.png" alt="" />` : `<img src="/assets/Closed- Status .png" alt="" />`}
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
                                        
                                        
                                            
                                            <span class="text-sm">${problem.labels
                                              .map(
                                                (label) => `
                                                        <span class="badge badge-info badge-outline text-xs font-bold">
                                                            ${label}
                                                        </span>
                                                    `,
                                              )
                                              .join("")}
                                            </span>
                                        </div>

                                    </div>

                                    <div class="flex justify-between pt-4 pl-2 pr-2 pb-5 border-t border-gray-100">
                                        <div>
                                              <p class="text-gray-500 text-sm font-medium">#${problem.id} by ${problem.author}</p>
                                        <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        <div>
                                                 <p class="text-gray-500 text-sm font-medium">Assignee: ${problem.assignee === "" ? "Unassigned" : problem.assignee}</p>
                                        <p class="text-gray-400 text-xs mt-1">Updated: ${problem.updatedAt}</p>  
                                        </div>
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
                                        ${problem.status === "open" ? `<img src="/assets/Open-Status.png" alt="" />` : `<img src="/assets/Closed- Status .png" alt="" />`}
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
                                        
                                        
                                            
                                            <span class="text-sm">${problem.labels
                                              .map(
                                                (label) => `
                                                        <span class="badge badge-info badge-outline text-xs font-bold">
                                                            ${label}
                                                        </span>
                                                    `,
                                              )
                                              .join("")}
                                            </span>
                                        </div>

                                    </div>

                                    <div class="flex justify-between pt-4 pl-2 pr-2 pb-5 border-t border-gray-100">
                                        <div>
                                              <p class="text-gray-500 text-sm font-medium">#${problem.id} by ${problem.author}</p>
                                        <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        <div>
                                                 <p class="text-gray-500 text-sm font-medium">Assignee: ${problem.assignee === "" ? "Unassigned" : problem.assignee}</p>
                                        <p class="text-gray-400 text-xs mt-1">Updated: ${problem.updatedAt}</p>  
                                        </div>
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

          <div class="flex gap-2 mb-6">
                                        
                                        
                                            
                                            <span class="text-sm">${problem.labels
                                              .map(
                                                (label) => `
                                                        <span class="badge badge-info badge-outline text-xs font-bold">
                                                            ${label}
                                                        </span>
                                                    `,
                                              )
                                              .join("")}
                                            </span>
                                        </div>

          <p class="text-gray-600 text-lg leading-relaxed mb-10">
            ${problem.description}
          </p>

          <div
            class="bg-gray-50 border border-gray-100 rounded-xl p-8 flex justify-between items-start mb-8"
          >
            <div>
              <span class="text-gray-500 font-medium text-lg block mb-1.5"
                >Assignee:</span
              >
              <span class="text-gray-900 font-bold text-xl">${problem.assignee === "" ? "Unassigned" : problem.assignee}</span>
            </div>
            <div>
              <span class="text-gray-500 font-medium text-lg block mb-1.5"
                >Priority:</span
              >
              <span
                                        class="px-4 py-1 rounded-full  ${problem.priority === "high" ? "bg-red-50" : problem.priority === "medium" ? "bg-yellow-50" : "bg-green-50"} ${problem.priority === "high" ? "text-red-500" : problem.priority === "medium" ? "text-yellow-500" : "text-green-500"} text-xs font-bold tracking-wider uppercase"
                                        >
                                        ${problem.priority}
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

const loadSearchProblems = () => {
  const searchField = document.getElementById("search-issue");
  const searchText = searchField.value;
  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
  )
    .then((res) => res.json())
    .then((data) => searchIssue(data.data));
};

const searchIssue = (data) => {
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
                                            ${problem.status === "open" ? `<img src="/assets/Open-Status.png" alt="" />` : `<img src="/assets/Closed- Status .png" alt="" />`}
                                        
                                        
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
                                        
                                        
                                            
                                            <span class="text-sm">${problem.labels
                                              .map(
                                                (label) => `
                                                        <span class="badge badge-info badge-outline text-xs font-bold">
                                                            ${label}
                                                        </span>
                                                    `,
                                              )
                                              .join("")}
                                            </span>
                                        </div>

                                    </div>

                                    <div class="flex justify-between pt-4 pl-2 pr-2 pb-5 border-t border-gray-100">
                                        <div>
                                              <p class="text-gray-500 text-sm font-medium">#${problem.id} by ${problem.author}</p>
                                        <p class="text-gray-400 text-xs mt-1">${problem.createdAt}</p>
                                        </div>
                                        <div>
                                                 <p class="text-gray-500 text-sm font-medium">Assignee: ${problem.assignee === "" ? "Unassigned" : problem.assignee}</p>
                                        <p class="text-gray-400 text-xs mt-1">Updated: ${problem.updatedAt}</p>  
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
    problemsBox.appendChild(div);
  }
  count();
};

loadProblems();
