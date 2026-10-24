let students = [
    { id: 0, name: "Alice", age: 20, program: "Bachelor of Science in Information Technology" },
    { id: 1, name: "Bob", age: 22, program: "Bachelor of Science in Information Technology" },
    { id: 2, name: "Charlie", age: 19, program: "Bachelor of Science in Information Technology" },
    { id: 3, name: "David", age: 21, program: "Bachelor of Science in Information Technology" },
    { id: 4, name: "Sey", age: 20, program: "Bachelor of Science in Information Technology" },
];

const createStudent = (name, program) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);

    article.classList.add("list-item");

    return article;
};

const studentList = students.map((s) => {
    return createStudent(s.name, s.program);
});

const studentListContainer = document.querySelector("#listContainer");
studentList.forEach((s) => {
    studentListContainer.append(s);
});
