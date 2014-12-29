

var contact = {
    "mobile" : "419-you-wish",
    "email" : "osumathias@yahoo",
    "github" : "https://github.com/mttchrry/",
    "twitter" : "Twitless",
    "location" : "Cleveland, OH"
};

var bio = {
	"name" : "Matthew Cherry",
	"role" : "Software Engineer",
	"contacts" : [contact],
	"welcomeMessage" : "Why, Hello there.",
	"skills" : ["Mad skillz yo", 
		"Yep, the maddest", 
		"Object Oriented Programming",
		"C++, JavaScript, C#, Java, Python",
		"Visual Studio, Sublime Text 2, NetBeans"],
	"biopic" : "https://media.licdn.com/media/p/2/000/0ac/1b3/03c6983.jpg"
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", this.name),
	  formattedRole = HTMLheaderRole.replace("%data%", this.role),
	  formEmail = HTMLemail.replace("%data%", this.contacts[0].email),
	  formPic = HTMLbioPic.replace("%data%", this.biopic),
	  formWelcome = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage),
	  formGithub = HTMLgithub.replace("%data%", this.contacts[0].github),
	  formMobile = HTMLmobile.replace("%data%", this.contacts[0].mobile),
	  formLocation = HTMLlocation.replace("%data%", this.contacts[0].location),
	  formTwitter = HTMLtwitter.replace("%data%", this.contacts[0].twitter),
	  i = 0;
	$("#header").append(formWelcome);
	$("#header").append(formPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	if(this.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i; i< this.skills.length; i=i+1) {
			$("#skills").append(HTMLskills.replace("%data%", this.skills[i]));
		};
	};
	$("#topContacts").append(formMobile);
	$("#topContacts").append(formEmail);
	$("#topContacts").append(formGithub);
	$("#topContacts").append(formTwitter);
	$("#topContacts").append(formLocation);
	$("#footerContacts").append(formMobile);
	$("#footerContacts").append(formEmail);
	$("#footerContacts").append(formGithub);
	$("#footerContacts").append(formTwitter);
	$("#footerContacts").append(formLocation);
};

bio.display();

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

projects.display = function() {
	"use strict";
	var proj, currentProj, image;
	for (proj in this.projects) {
		currentProj = this.projects[proj];
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", currentProj.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", currentProj.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", currentProj.description));
		for(image in currentProj.images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", currentProj.images[image]));		
		}
	}
};

projects.display();

var job = {
	"employer" : "Rockwell Automation"
};
job.title = bio.role;
job.dates = "Jan 2010 - Present";
job.location = "Mayfield Heights, OH";
job.description = "Development of Enterprise Software features delivering customer valued content in new releases of Rockwell Automation's LogixDesigner software suite.";


var work = {
	 "jobs": [job,	
			 {
				"employer" : "Rockwell Automation",
				"title" : "Software Co-op",
				"dates" : "Jan 2008 - Aug 2009",
				"location" : "Mayfield Heights, OH",
				"description" : "Software Co-op for the RsLogix5000 development team working on low hanging fruit projects in C++ and C#, as well as learning object oriented desing principles and applying them."		
			}
		]
};

work.display = function(){
	var job, currentJob, formEmployer, formTitle, formEmployerTitle, formDates, formDesc;
	for (job in this.jobs) {
		currentJob = this.jobs[job];
		$("#workExperience").append(HTMLworkStart);
		formEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
		formTitle = HTMLworkTitle.replace("%data%", currentJob.title);
		formEmployerTitle = formEmployer + formTitle;
		$(".work-entry:last").append(formEmployerTitle);
		formDates = HTMLworkDates.replace("%data%", currentJob.dates);
		$(".work-entry:last").append(formDates);
		formDesc = HTMLworkDescription.replace("%data%", currentJob.description);
		$(".work-entry:last").append(formDesc);
	}
};

work.display();

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


var school = {};
school["name"] = '<div class="education-entry">"The Ohio State University"</div>';
school["dates"] = 2009;
school["location"] = "Columbus, OH"; 
school["degree"] = "Bachelors of Science";
school["majors"] = ["Computer Science and Engineering"];
school["url"] = "http://www.osu.edu";


var education ={
	"schools" : [
		school
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"major" : "Front End Wed Development",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/nd001"
		}
	]
};

$("#education").append(education.schools[0].name);

function inName(name) {
	var names = bio.name.trim().split(" ");
	var firstname = names[0].slice(0,1)
	names[0] = firstname.toUpperCase()
	 + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	return names.join(" ");
};

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

