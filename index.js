const getAllData = () => {
  fetch("http://localhost:3000/data")
    .then((response) => response.json())
    .then((students) => {
      console.log(students);
      let ddl = document.getElementById("students_ddl");
      students.forEach((student) => {
        let option = document.createElement("option");
        option.innerHTML = student?.name;
        ddl.appendChild(option);
      });
    });
};

getAllData();
