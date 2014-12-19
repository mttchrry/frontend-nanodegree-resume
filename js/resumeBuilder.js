var email = "mttchrry@gmail.com";

console.log(email);

var formattedName = HTMLheaderName.replace("%data%", "Matthew Cherry");

var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
