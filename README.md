# TABAO

**App Description**

A food delivery web application that leverages on crowd sourcing to bring affordable food options to peoples’ homes. The traditional food delivery in place now is mainly for small cafes and restaurants and has minimum order amount of approximately $20. For busy individuals who just want a simple meal spending $20 is quite expensive.

With our web application we aim to achieve lowered cost via crowdsourcing. The ideal scenario would be an individual travelling from A to B would conveniently pick up food from around A and deliver it to B, where the requestor would be waiting, for a small fee.

**Platform:** MeteorJS

**Core Features**

1. In-House User Login & Rating System
2. Marketplace for Delivery Requests
3. Messaging System for Requestor-Deliverer Communication
4. Google Maps Integration

**Technical Elements**

- Mobile-Friendly Responsive Web Template
- Custom Notifications/Alerts
- Login/Signup
	- Server-side Error Handling (Error Reason Displayed as Alerts to User)
	- Client-Side Authentication for Repeat Passwords for Signup
- Dynamic Front Page Content for Logged In Users
- User Authentication for Profile, Request and Deliver Pages
- Profile
	- Renders Profile of Username from URL
	- Renders Placeholder if Not Found
	- Displays User Rating, Request/Delivery Statistics and Current Request/Delivery
- Request
	- Client-Side Authentication with Required Fields and Integer Verification
	- Requests Automatically Displayed at Marketplace
- View Request
	- Different Views/Options for Different Stakeholders
		- |**Delivery State**	|**Requestor**	|**Deliverer**	|
		  |---------------------|:-------------:|:-------------:|
		  |Pending Acceptance	|Delete			|-				|
		  |Pending Delivery 	|Mark Completed	|Directions		|
		  |Completed			|Give Rating	|-				|
	- Real-Time Messaging System for Communication between Requestors and Deliverers
	- Pre-Generated Google Maps Link for Deliverers
	- Post-Delivery Rating Provided to Deliverer
- Deliver (AKA Marketplace)
	- Custom View for Users with Existing Requests/Deliveries
	- Individual Links to Respective Request Details Page
- Admin Console
	- Overview of Current Users and Statistics
	- Admin Override for Request Deletion
- Database
	- User Database with Ratings
	- Requests Database with Details and State
	- All 107 Hawkers Pulled from Data.gov
- Front-End Code
	- Modular Templates (Selective Rendering, Minimises Rewritten Code)
- Back-End Code
	- Clearly Seperated Code for Client & Server
	- Prevent Client from Accessing Sensitive Data

**Project Log**

|**Activity**									|**Hours**	|**Date**	|
|-----------------------------------------------|:---------:|:---------:|
|Liftoff Day 1									|9			|8 May 		|
|Liftoff Day 2									|9			|9 May 		|
|Idea Exploration								|3			|9 May 		|
|Meteor Workshop								|5			|13 May 	|
|Meteor Experimenting & Tutorial				|8			|14 May 	|
|Idea Finalisation								|8			|27 May 	|
|Flow Router Research & Implementation			|9			|5 June		|
|Login Interface Research & Implementation		|3			|11 June	|
|Front-End Template Sourcing & Adaptation		|3			|13 June	|
|Food Request Form Implementation				|3			|13 June	|
|MongoDB Research & Implementation				|7			|14 June	|
|DB to Front-End Marketplace Implementation		|8			|14 June	|
|Login Interface Custom UI Implementation		|6			|15 June	|
|Route-Level Authentication Implementation		|6			|15 June	|
|Custom Profile & Grouped Routes Implementation	|11			|16 June	|
|Custom 404 and 403 Routes Implementation		|3			|16 June	|
|Request Details Page Implementation			|4			|18 June	|
|Delete Request Function Implementation			|4			|19 June	|
|Front Page Content Update						|3			|21 June	|
|Request Acceptance Implementation				|6			|21 June	|
|Moment Library Research & Implementation		|3			|3 July		|
|Admin Console Creation & Modificataion			|9			|12 July	|
|Comment/Messaging Functionality Implementation	|18			|22 July	|
|Request Status Implementation					|2			|23 July	|
|Server Wide Changes							|6			|23 July	|
|Profile UI Refresh								|4			|23 July	|
|Hawker Database Population						|5			|23 July	|
|Map Link Implementation						|2			|23 July	|
|Front End Content Update						|4			|23 July	|
|Heroku Deployment Research & Implementation	|6			|26 July	|
|MongoDB Cloning to Deployment Platform			|2			|26 July	|
|Custom Alert Notifications Implementation		|10			|1 August	|
|Login UI Changes and Minor Bug Fixes			|6			|1 August	|
|Login Page Migration							|3			|3 August	|
|Searchable Dropdown Research & Implementation	|14			|6 August	|
|User Rating System Research & Implementation	|18			|12 August	|
|Minor Bug Fixes and Deployment DB Refresh		|2			|12 August	|
|**Total**										|**232**	|			|

**Deployment**

[Tabao on Heroku](http://tabao.herokuapp.com)

**Links**

[Video](http://tiny.cc/tabaovideo2) | [Poster](http://tiny.cc/tabaoposter3)