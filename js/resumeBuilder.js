var email = "mttchrry@gmail.com";

console.log(email);

var name = "Matt Cherry";
name
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
	"skills" : ["Mad skillz yo", "Yep, the maddest"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formCont = HTMLemail.replace("%data%", bio.contactInfo);
var formPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

var work = {
	"employer" : "Rockwell Automation"
};
work.position = bio.role;
work.years = "Jan 2010 - Present";
work.city = "Cleveland, OH";
work.description = "Development of Enterprise Software features delivering customer valued content in new releases of Rockwell Automation's LogixDesigner software suite.";

var work

var jobs = [work,
	{
		"employer" : "Rockwell Automation",
		"position" : "Software Co-op",
		"years" : "Jan 2008 - Aug 2009",
		"city" : "Cleveland, OH",
		"description" : "Software Co-op for the RsLogix5000 development team working on low hanging fruit projects in C++ and C#, as well as learning object oriented desing principles and applying them."
	}
	];

var projects = {
		"projects" : [
			{
				"title" : "Program Paramters",
				"dates" : "Jan 2010 - Mar 2014",
				"description" : "Release defining feature to enhance encapsulation and object oriented approaches to factory programming",
				"images" : ["https://raw.githubusercontent.com/mttchrry/frontend-nanodegree-resume/master/images/ProgParam.PNG"]
			}
		]
	};

var schools = {};
schools["school"] = '<div class="education-entry">"The Ohio State University"</div>';
schools["years"] = [2004, 2005, 2006,2007, 2008, 2009];
schools["city"] = "Columbus, OH"; 
schools["degree"] = "Bachelors of Science";
schools["major"] = "Computer Science and Engineering";
schools["url"] = "www.osu.edu";


var education ={
	"schools" : [
		schools
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"major" : "Front End Wed Development",
			"gradDate" : 2015,
			"url" : "https://www.udacity.com/course/nd001"
		}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i = 0; i< bio.skills.length; i++) {
		var formSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formSkills);
	};
};
$("#header").prepend();
$("#header").prepend(formWelcome);
$("#header").prepend(formPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").prepend(formCont);
$("#education").append(education.school);


for (job in jobs) {
	var formStart = HTMLworkStart.replace("%data%", jobs[job].years[0]);
	$("#workExperience").append(HTMLworkStart);
	var formEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
	var formTitle = HTMLworkTitle.replace("%data%", jobs[job].position);
	var formEmployerTitle = formEmployer + formTitle;
	$(".work-entry:last").append(formEmployerTitle);

	var formDates = HTMLworkDates.replace("%data%", jobs[job].years);
	$(".work-entry:last").append(formDates);

	var formDesc = HTMLworkDescription.replace("%data%", jobs[job].description);
	$(".work-entry:last").append(formDesc);
}

