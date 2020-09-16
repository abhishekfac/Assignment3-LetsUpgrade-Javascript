let team = [
  {
    Name: "Aakash",
    Age: 27,
    City: "Pune",
    Salary: 15000,
  },
  {
    Name: "Samule",
    Age: 31,
    City: "Chennai",
    Salary: 18000,
  },
  {
    Name: "Anna",
    Age: 24,
    City: "Jalandhar",
    Salary: 20000,
  },
  {
    Name: "Sandra",
    Age: 28,
    City: "Pune",
    Salary: 22000,
  },
  {
    Name: "Arman",
    Age: 25,
    City: "Chennai",
    Salary: 24000,
  },
];
function display(superarray) {
  let tabledata = "";
  superarray.forEach(function (a, index) {
    let currentrow = `<tr>
     <td>${index + 1}</td>
      <td>${a.Name}</td>
      <td>${a.Age}</td>
      <td>${a.City}</td>
      <td>${a.Salary}</td>
      <td>
      <button onclick='deletePeople(${index})'>delete</button>
      </td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(team);

function search() {
  let searchValue = document.getElementById("search").value;
  let newdata = team.filter(function (a) {
    return (
      (a.Name && a.City).toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });
  display(newdata);
}
function deletePeople(index) {
  team.splice(index, 1);
  display(team);
}
