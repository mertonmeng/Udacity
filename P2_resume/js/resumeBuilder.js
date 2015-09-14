/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = [	"Languages: C/C++ and MATLAB (4 years), C#, Python, Java, Assembly language, SQL, HTML, CSS, Shell",
				"Frameworks: MFC, OPENCV, KINECT SDK (3 years), Socket, GIT, SVN, Linux, Agile",
				"Hardware: low-level programming on: INTEL MCU, TI DSP, and ARM CORTEX series; Small scale circuit simulation",
				"Others: Image Processing/Computer Vision, Computer/Mobile/Wireless Networks, Audio/Video synchronization"];

var bio = {
	"name": "Shang Meng",
	"role": "Programmer",
	"contacts" : {
		"email": "mertonmeng@gmail.com",
		"location": "San Jose, CA"
	},
	"picURL": ".//images//myprofile.jpg",
	"welcomeMsg": "Hi, this is Shang Meng's resume.",
	"skills": skills
};

var work = {
	"jobs":[
		{
			"title": "Vision Solution Engineer",
			"employer" : "Cognex",
			"years": "2015/09 - Present",
			"location": "Cupertino, CA",
			"description": "Fresh Engineer helping the manufacturing industry"
		},
		{
			"title": "Software Developer",
			"employer" : "University at Buffalo, SUNY",
			"years": "2014/06 - 2015/06",
			"location": "Buffalo, NY",
			"description": "Independently designed, developed and tested a software system for Physical Therapy"
		},
		{
			"title": "Research Assistant",
			"employer" : "Chongqing Signal and Information Processing Key Laboratory",
			"years": "2011/09 - 2013/06",
			"location": "Chongqing, China",
			"description": "Published and Co-authored research papers, and participated in development of commercial software"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University at Buffalo, SUNY",
			"location": "Buffalo, NY",
			"degree": "M.Sc",
			"major": "Electrical Engineering",
			"dates": "2015",
		}, 
		{
			"name": "Chongqing University of Posts and Telecommunications",
			"location": "Chongqing, China",
			"degree": "B.Sc",
			"major": "Telecommunication Engineering",
			"dates": "2013",
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var project = {
	"projects":[
		{
			"title": "Physical Therapy Software System (C#)",
			"dates": "Summer 2014",
			"description": [
				"Worked as full stack engineer, independently completed the whole life cycle of this software",
				"Design, developed and tested physical therapy software to evaluate  the patients and athletes for research"
			],
			"image": ".//images//project2.jpg"
		},
		{
			"title": "Object Recognition System based on Kinect and Embedded System (C and C++)",
			"dates": "Spring 2013 to Fall 2013",
			"description": [
				"Delivered independent project and won the Top Graduation Project Award, 10 out of 800 projects",
				"Applied Pattern Recognition and Machine learning algorithm based on Depth image and skeleton data ",
				"Improved the efficiency of the system  by applying Multi-core and Multi-thread (Parallel) Programming",
				"Comprehensive low-level programming (Embedded and Socket (TCP/IP) programming on ARM-Cortex) "
			],
			"image": ".//images//project1.jpg"
		},
		{
			"title": "Gesture Recognition System Based on Kinect (C and C++)",
			"dates": "Fall 2012",
			"description": [
				"Solely designed, developed and completed project funded by Chinese National Natural Science Foundation",
				"Adapted Contour-based recognition, and developed 9 gestures can be recognized in an average accuracy of 96%; published a journal paper on this algorithm",
				"Implemented in commercial software purchased by China Mobile."
			],
			"image": ".//images//project3.png"
		}
	]
};

function displayheader(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedBelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	if(!skills.empty){
		for(skill in bio.skills){
			var formatedSkills = HTMLskills.replace("%data%", bio.skills[bio.skills.length - 1 - skill]);
			$("#header").prepend(formatedSkills);
		}
		$("#header").prepend(HTMLskillsStart);
	}

	$("#header").prepend(formattedBelcomeMsg);
	$("#header").prepend(formattedBioPic);
	$("#header").prepend(formattedLocation);
	$("#header").prepend(formattedEmail);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
}

education.display = function(){
	for(school in education.schools){
		var formatedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formatedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formatedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formatedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formatedschoolName + formatedschoolDegree);
		$(".education-entry:last").append(formatedschoolDates);
		$(".education-entry:last").append(formatedschoolMajor);
		$(".education-entry:last").append(formatedschoolLocation);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for(course in education.onlineCourses){
		var formatedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formatedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formatedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formatedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formatedonlineTitle + formatedonlineSchool);
		$(".education-entry:last").append(formatedonlineDates);
		$(".education-entry:last").append(formatedonlineURL);
	}
}

work.display = function(){
	for(job in work.jobs){
		var formatedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		var formatedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formatedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formatedworkEmployer + formatedworkTitle);
		$(".work-entry:last").append(formatedworkLocation);
		$(".work-entry:last").append(formatedworkDates);
		$(".work-entry:last").append(formatedworkDescription);
	}
}

project.display = function(){
	for(projId in project.projects){
		var formatedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[projId].title);
		var formatedprojectDates = HTMLprojectDates.replace("%data%", project.projects[projId].dates);	
		var formatedprojectImage = HTMLprojectImage.replace("%data%", project.projects[projId].image);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formatedprojectImage);
		$(".project-entry:last").append(formatedprojectTitle);
		$(".project-entry:last").append(formatedprojectDates);

		for(descriptionId in project.projects[projId].description){
			formatedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[projId].description[descriptionId]);
			$(".project-entry:last").append(formatedprojectDescription);
		}
		$(".project-entry:last").append("<br>");
	}
}

displayheader();
project.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);