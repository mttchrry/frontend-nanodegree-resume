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
	"contacts" : contact,
	"pictureUrl" : "https://media.licdn.com/media/p/2/000/0ac/1b3/03c6983.jpg",
	"welcomeMsg" : "Why, Hello there.",
	"skills" : ["Mad skillz yo", "Yep, the maddest"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formCont = HTMLemail.replace("%data%", bio.contacts.email);
var formPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

var work = {
	"employer" : "Rockwell Automation"
};
work.position = bio.role;
work.years = "Jan 2010 - Present";
work.location = "Mayfield Heights, OH";
work.description = "Development of Enterprise Software features delivering customer valued content in new releases of Rockwell Automation's LogixDesigner software suite.";

var work

var jobs = [
	 work,	
	 {
		"employer" : "Rockwell Automation",
		"position" : "Software Co-op",
		"years" : "Jan 2008 - Aug 2009",
		"location" : "Mayfield Heights, OH",
		"description" : "Software Co-op for the RsLogix5000 development team working on low hanging fruit projects in C++ and C#, as well as learning object oriented desing principles and applying them."		
	}
]

var projects = {
	"projects" : [
		{
			"title" : "Program Parameters",
			"dates" : "Jan 2010 - Mar 2014",
			"description" : "Release defining feature to enhance encapsulation and object oriented approaches to factory programming",
			"images" : ["https://raw.githubusercontent.com/mttchrry/frontend-nanodegree-resume/master/images/ProgParam.PNG"]
		},
		{
			"title" : "Security Team",
			"dates" : "July 2014 - Dec 2014",
			"description" : "Develop enhancements to securely protect customer IP in our software.",
			"images" : ["http://www.rockwellautomation.com/resources/images/rockwellautomation/carousel/vertical-scroll/security_code_global--photograph_430w288h.jpg"]
		}
	]
};

var trips = {
	"trip" : [
		{
			"location" : "Cancun, Mexico",
			"date" : "Nov, 2014"
		},
		{
			"location" : "Jamaica",
			"date" : "Nov, 2013"
		},
		{
			"location" : "Grand Turk",
			"date" : "Nov, 2013"
		},
		{
			"location" : "Nassau, Bahamas",
			"date" : "Nov, 2013"
		},
		{
			"location" : "Las Vegas, Nevada",
			"date" : "Mar, 2012"
		},
		{
			"location" : "Milwaukee, WI",
			"date" : "July, 2013"
		},
		{
			"location" : "Munich, Germany",
			"date" : "Sept, 2014"
		},
		{
			"location" : "Rome, Italy",
			"date" : "Oct, 2014"
		},
		{
			"location" : "Venice, Italy",
			"date" : "Sept, 2014"
		},
		{
			"location" : "San Diego, CA",
			"date" : "Many"
		},
		{
			"location" : "Seattle, WA",
			"date" : "Apr, 2014"
		},
		{
			"location" : "Indianapolis, IN",
			"date" : "Dec, 2014"
		},
		{
			"location" : "Miami, Fl",
			"date" : "Nov, 2013"
		},
		{
			"location" : "Toledo, OH",
			"date" : "Aug, 1986"
		}
	]
};

projects.display = function() {
	for (var proj in projects.projects) {
		var currentProj = projects.projects[proj];
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
		if(currentProj.images.length > 0) {
			for(image in currentProj.images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", currentProj.images[image]));		
			}		
		}
	}
}

var schools = {};
schools["school"] = '<div class="education-entry">"The Ohio State University"</div>';
schools["years"] = [2004, 2005, 2006,2007, 2008, 2009];
schools["location"] = "Columbus, OH"; 
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

var header= {}

header.display = function(){
	$("#header").append(formWelcome);
	$("#header").append(formPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i< bio.skills.length; i++) {
			var formSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formSkills);
		};
	};
	$("#topContacts").append(formCont);
	$("#topContacts").append(HTMLgithub.replace("%data%", "https://github.com/mttchrry/"));
	$("#topContacts").append(HTMLmobile.replace("%data%", "508-9397"));
	$("#topContacts").append(HTMLlocation.replace("%data%", "Cleveland, OH"));
};

$("#education").append(education.schools.school);

function displayJobs(){
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
};

function inName(name) {
	var names = name.trim().split(" ");
	var firstname = names[0].slice(0,1)
	names[0] = firstname.toUpperCase()
	 + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	return names.join(" ");
};

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

header.display();
displayJobs();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

