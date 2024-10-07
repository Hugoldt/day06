document.addEventListener("DOMContentLoaded", function () { 
    function displayAgentInfo (info) {
    let age= info.age
    let code = info.code 
    let firstName= info.firstName
    let lastName= info.lastName

    let total = My name is ${lastName}, ${firstName}. I'm the agent ${code} and I'm ${age} years old.;
    let test = document.querySelector('#container p')
    test.textContent =total
}

let info = {
    age:57,
    code:"007",
    firstName:"James Bond",
    lastName:"Bond"
}
displayAgentInfo(info);
});
﻿
