const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    //more data to add
];

function displayEmployees(){
    const totalEmployees = employees
        .map(employee => `<p>${employee.id} - ${employee.name} - ${employee.department} - $${employee.salary} </p>`)
        .join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total, employee) =>
    total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
};

function displayHREmployees(){
    const HREmployee = employees.filter((e) => e.department === "HR");
    const hrEmployeesDisplay = HREmployee.map((employee) => 
        `<p> ${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('')

    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay
};

function findEmployeeById(id){
    const findEmployee = employees.find((e) => e.id === id)
    const displayFoundEmployee = document.getElementById('employeesDetails').innerHTML = `<p> ${findEmployee.id}: ${findEmployee.name}: ${findEmployee.name} - ${findEmployee.department} - $${findEmployee.salary}</p>`;
    if (findEmployee)
        displayFoundEmployee;
    else{
         document.getElementById('employeesDetails').innerHTML =  'No Employee with this ID has been found';
    }
};

function findEmployeeBySpecialization(specialization){
    const findEmployeeSpecial = employees.filter((e) => e.specialization === specialization);
    const findEmployeeSpecialss = findEmployeeSpecial.map((employee) => 
    `<p> ${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} </p>`).join('')
    
    if(findEmployeeSpecial.length > 0){
        document.getElementById('employeesDetails').innerHTML = findEmployeeSpecialss;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee with this specialization has been found';
    }
};
    
