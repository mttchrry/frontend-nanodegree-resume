var email = "mttchrry@gmail.com";

console.log(email);

var name = "Matt Cherry";

var contact = {
	"mobile" : "419-you-wish",
	"email" : "osumathias@yahoo",
	"github" : "mttchrry",
	"location" : "Cleveland, OH"
}

var bio = {
	"name" : name,
	"role" : "Software Engineer",
	"contactInfo" : "osumathias@yahoo",
	"pictureUrl" : "https://media.licdn.com/media/p/2/000/0ac/1b3/03c6983.jpg",
	"welcomeMsg" : "Why, Hello there.",
	"skills" : ["Mad skillz yo"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formCont = HTMLemail.replace("%data%", bio.contactInfo);
var formPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formSkills = HTMLskills.replace("%data%", bio.skills);

var work = {
	"employer" : "Rockwell Automation"
};
work.position = '<div class="work-entry">'+ bio.role +"</div>";
work.years = [2010, 2011, 2012, 2013, 2014];
work.city = "Cleveland, OH";
work.description = "Development of Enterprise Software features delivering customer valued content in new releases of Rockwell Automation's LogixDesigner software suite.";

var projects = {
		"projects" : [
			"title" : "Program Paramters",
			"dates" : [2010, 2011, 2012, 2013],
			"description" : "Release defining feature to enhance encapsulation and object oriented approaches to factory programming",
			"images" : []
		]
	};

var schools = {};
schools["school"] = '<div class="education-entry">"The Ohio State University"</div>';
schools["years"] = [2004, 2005, 2006,2007, 2008, 2009];
schools["city"] = "Columbus, OH";
schools["major"] = "Computer Science and Engineering";
schools["url"] = "www.osu.edu";


var education ={
	"schools" : [
		{schools};
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"major" : "Front End Wed Development",
			"gradDate" : 2015
			"url" : "http://www.udacity.com"
		}
	]
}

$("#header").prepend(formSkills);
$("#header").prepend(formWelcome);
$("#header").prepend(formPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formCont);
$("#workExperience").append(work.position);
$("#education").append(education.school);

