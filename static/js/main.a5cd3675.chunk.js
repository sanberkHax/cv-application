(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),i=n.n(c),s=(n(15),n(5)),r=n(2),o=n(4),l=n(3),j=n(0);var d=function(e){return Object(j.jsx)("input",{type:"submit",value:"Submit",className:"submit-button",onClick:e.submitForm})};var u=function(e){return Object(j.jsx)("button",{className:"delete-button",onClick:e.clicked,children:"Delete"})};var m=function(e){return Object(j.jsx)("button",{className:"edit-button",onClick:e.clicked,children:"Edit"})},b=n(18);var h=function(e){return Object(j.jsxs)("div",{className:"education-cont",children:[Object(j.jsx)("h1",{children:"Education Details"}),Object(j.jsxs)("form",{action:"submit",className:"education-form",children:[Object(j.jsx)("label",{htmlFor:"school-name",className:"school-name",children:"School Name"}),Object(j.jsx)("p",{children:e.schoolName}),Object(j.jsx)("label",{htmlFor:"position-title",className:"study-title",children:"Study Title"}),Object(j.jsx)("p",{children:e.studyTitle}),Object(j.jsx)("h3",{children:"Date of Study"}),Object(j.jsx)("label",{htmlFor:"from",children:"From :"}),Object(j.jsx)("label",{htmlFor:"to",children:"To :"}),Object(j.jsx)("p",{children:e.fromDate}),Object(j.jsx)("p",{children:e.toDate})]}),[Object(j.jsx)(m,{clicked:function(){e.onEdit()}},Object(b.a)()),Object(j.jsx)(u,{clicked:function(){e.onDelete()}},Object(b.a)())]]})},O=Object(a.createContext)({personal:{firstName:"",lastName:"",email:"",phone:""},education:[],experience:[],addPersonalData:function(){},addEducationData:function(){},addExperienceData:function(){}});function x(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)([]),l=Object(r.a)(o,2),d=l[0],u=l[1],m=Object(a.useState)({firstName:"",lastName:"",email:"",phone:""}),b=Object(r.a)(m,2),h=b[0],x=b[1],p={personal:{firstName:h.firstName,lastName:h.lastName,email:h.email,phone:h.phone},education:c,experience:d,addPersonalData:function(e){x(e)},addEducationData:function(e){i((function(t){return[].concat(Object(s.a)(t),[e])}))},addExperienceData:function(e){u((function(t){return[].concat(Object(s.a)(t),[e])}))}};return Object(j.jsx)(O.Provider,{value:p,children:e.children})}var p=O;var f=function(e){var t=Object(a.useContext)(p),n=t.education.filter((function(t){return t.id===e.id})),c=Object(a.useState)(!0),i=Object(r.a)(c,2),s=i[0],m=i[1],O=Object(a.useState)(n[0]||{id:e.id,isEditing:s,schoolName:"",studyTitle:"",fromDate:"",toDate:""}),x=Object(r.a)(O,2),f=x[0],v=x[1];console.log(f);var N=function(e){var t=e.target,n=t.name,a=t.value;v((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},n,a))}))},D=e.id,y=e.onDelete;return f.isEditing?Object(j.jsxs)("div",{className:"education-cont",children:[Object(j.jsx)("h1",{children:"Education Form"}),Object(j.jsxs)("form",{action:"submit",className:"education-form",children:[Object(j.jsx)("label",{htmlFor:"school-name",className:"school-name",children:"School Name"}),Object(j.jsx)("input",{type:"text",name:"schoolName",placeholder:"Enter School Name",className:"school-name-input",value:f.schoolName,onChange:N}),Object(j.jsx)("label",{htmlFor:"position-title",className:"study-title",children:"Study Title"}),Object(j.jsx)("input",{type:"text",name:"studyTitle",placeholder:"Enter Study Title",className:"study-title-input",value:f.studyTitle,onChange:N}),Object(j.jsx)("h3",{children:"Date of Study"}),Object(j.jsx)("label",{htmlFor:"from",children:"From :"}),Object(j.jsx)("label",{htmlFor:"to",children:"To :"}),Object(j.jsx)("input",{name:"fromDate",value:f.fromDate,onChange:N,type:"date"}),Object(j.jsx)("input",{name:"toDate",value:f.toDate,onChange:N,type:"date"})]}),[Object(j.jsx)(d,{submitForm:function(n){if(n.preventDefault(),!function(){if(Object.values(f).some((function(e){return""===e})))return alert("Please fill all inputs"),!0}())if(m((function(e){return!e})),f.isEditing=!1,t.education.some((function(t){return t.id===e.id}))){var a=t.education.findIndex((function(t){return t.id===e.id}));t.education[a]=f}else t.addEducationData(f)}},Object(b.a)()),Object(j.jsx)(u,{clicked:function(){return y("education",D)}},Object(b.a)())]]}):Object(j.jsx)(h,{schoolName:f.schoolName,studyTitle:f.studyTitle,fromDate:f.fromDate,toDate:f.toDate,onEdit:function(){m((function(e){return!e})),f.isEditing=!0},onDelete:function(){return y("education",D)}},Object(b.a)())};var v=function(e){return Object(j.jsxs)("div",{className:"experience-cont",children:[Object(j.jsx)("h1",{children:"Experience Details"}),Object(j.jsxs)("form",{action:"submit",className:"experience-form",children:[Object(j.jsx)("label",{htmlFor:"company-name",className:"company-name",children:"Company Name"}),Object(j.jsx)("p",{children:e.companyName}),Object(j.jsx)("label",{htmlFor:"position-title",className:"position-title",children:"Position Title"}),Object(j.jsx)("p",{children:e.positionTitle}),Object(j.jsx)("label",{htmlFor:"main-tasks",className:"main-tasks",children:"Main Tasks of the Job"}),Object(j.jsx)("p",{className:"main-tasks-input",children:e.mainTasks}),Object(j.jsx)("label",{htmlFor:"from",children:"From :"}),Object(j.jsx)("label",{htmlFor:"to",children:"To :"}),Object(j.jsx)("p",{children:e.fromDate}),Object(j.jsx)("p",{children:e.toDate})]}),[Object(j.jsx)(m,{clicked:function(){e.onEdit()}},Object(b.a)()),Object(j.jsx)(u,{clicked:function(){e.onDelete()}},Object(b.a)())]]})};var N=function(e){var t=Object(a.useContext)(p),n=t.experience.filter((function(t){return t.id===e.id})),c=Object(a.useState)(!0),i=Object(r.a)(c,2),s=i[0],m=i[1],h=Object(a.useState)(n[0]||{id:e.id,isEditing:s,companyName:"",positionTitle:"",mainTasks:"",fromDate:"",toDate:""}),O=Object(r.a)(h,2),x=O[0],f=O[1],N=function(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},n,a))}))},D=e.id,y=e.onDelete;return x.isEditing?Object(j.jsxs)("div",{className:"experience-cont",children:[Object(j.jsx)("h1",{children:"Experience Form"}),Object(j.jsxs)("form",{action:"submit",className:"experience-form",children:[Object(j.jsx)("label",{htmlFor:"company-name",className:"company-name",children:"Company Name"}),Object(j.jsx)("input",{type:"text",name:"companyName",placeholder:"Enter Company Name",className:"company-name-input",value:x.companyName,onChange:N}),Object(j.jsx)("label",{htmlFor:"position-title",className:"position-title",children:"Position Title"}),Object(j.jsx)("input",{type:"text",name:"positionTitle",placeholder:"Enter Position Title",className:"position-title-input",value:x.positionTitle,onChange:N}),Object(j.jsx)("label",{htmlFor:"main-tasks",className:"main-tasks",children:"Main Tasks of the Job"}),Object(j.jsx)("textarea",{type:"text",name:"mainTasks",className:"main-tasks-input",placeholder:"Enter your main tasks of this job",value:x.mainTasks,onChange:N}),Object(j.jsx)("label",{htmlFor:"from",children:"From :"}),Object(j.jsx)("label",{htmlFor:"to",children:"To :"}),Object(j.jsx)("input",{type:"date",name:"fromDate",value:x.fromDate,onChange:N}),Object(j.jsx)("input",{type:"date",name:"toDate",value:x.toDate,onChange:N})]}),[Object(j.jsx)(d,{submitForm:function(n){if(n.preventDefault(),!function(){if(Object.values(x).some((function(e){return""===e})))return alert("Please fill all inputs"),!0}())if(m((function(e){return!e})),x.isEditing=!1,t.experience.some((function(t){return t.id===e.id}))){var a=t.experience.findIndex((function(t){return t.id===e.id}));t.experience[a]=x}else t.addExperienceData(x)}},Object(b.a)()),Object(j.jsx)(u,{clicked:function(){return y("experience",D)}},Object(b.a)())]]}):Object(j.jsx)(v,{companyName:x.companyName,positionTitle:x.positionTitle,mainTasks:x.mainTasks,fromDate:x.fromDate,toDate:x.toDate,onEdit:function(){m((function(e){return!e})),x.isEditing=!0},onDelete:function(){return y("experience",D)}},Object(b.a)())};var D=function(e){return Object(j.jsxs)("div",{className:"personal-details",children:[Object(j.jsx)("h1",{children:"Personal Information"}),Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsx)("h2",{className:"first-name",children:"First Name"}),Object(j.jsx)("p",{children:e.firstName}),Object(j.jsx)("h2",{className:"last-name",children:"Last Name"}),Object(j.jsx)("p",{children:e.lastName}),Object(j.jsx)("h2",{className:"email",children:"E-Mail"}),Object(j.jsx)("p",{children:e.email}),Object(j.jsx)("h2",{className:"phone-number",children:"Phone Number"}),Object(j.jsx)("p",{children:e.phone})]}),Object(j.jsx)(m,{clicked:function(){e.onEdit()}})]})};var y=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(p),s=localStorage.getItem("personalIsEditing");Object(a.useEffect)((function(){"0"===s?c(!1):"1"===s&&c(!0)}),[s]);var u=function(e){var t=e.target,n=t.name,a=t.value;i.addPersonalData((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},n,a))}))},m=i.personal,b=m.firstName,h=m.lastName,O=m.email,x=m.phone;return n?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Personal Information"}),Object(j.jsxs)("form",{action:"submit",className:"personal-form",children:[Object(j.jsx)("input",{type:"text",name:"firstName",placeholder:"First Name",value:i.personal.firstName,onChange:u}),Object(j.jsx)("input",{type:"text",name:"lastName",placeholder:"Last Name",value:i.personal.lastName,onChange:u}),Object(j.jsx)("input",{name:"email",type:"text",placeholder:"E-Mail",value:i.personal.email,onChange:u}),Object(j.jsx)("input",{name:"phone",type:"tel",placeholder:"Phone Number",value:i.personal.phone,onChange:u})]}),Object(j.jsx)(d,{submitForm:function(e){e.preventDefault(),function(){if(Object.values(i.personal).some((function(e){return""===e})))return alert("Please fill all inputs"),!0}()||(c((function(e){return!e})),localStorage.setItem("personalIsEditing","0"))}})]}):Object(j.jsx)(D,{firstName:b,lastName:h,email:O,phone:x,onEdit:function(){c((function(e){return!e})),localStorage.setItem("personalIsEditing","1")}})};var g=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"CV FORM"}),Object(j.jsx)("h2",{children:"Made by Sanberk T\xfcrker"})]})};var E=function(e){return Object(j.jsx)("div",{className:"card",children:e.children})};var k=function(e){return Object(j.jsx)("button",{className:"add-button",onClick:e.addComponent,children:"Add"})};var T=function(e){var t=Object(a.useContext)(p),n=function(n){(0===t.education.length?(alert("Please add education info"),1):0===t.experience.length?(alert("Please add experience info"),1):void 0)||e.onClick(n)};return Object(j.jsx)("div",{onClick:function(e){return n(e)},className:"preview-button",children:Object(j.jsx)("p",{children:">>"})})};var C=function(e){return Object(j.jsxs)("div",{className:"experience-cv-container",children:[Object(j.jsxs)("div",{className:"job-info",children:[Object(j.jsxs)("div",{className:"company-cont",children:[Object(j.jsx)("h2",{children:"Company Name:"}),Object(j.jsx)("h2",{children:e.experienceData.companyName})]}),Object(j.jsxs)("div",{className:"position-cont",children:[Object(j.jsx)("h2",{children:"Position Title:"}),Object(j.jsx)("h2",{children:e.experienceData.positionTitle})]})]}),Object(j.jsxs)("div",{className:"experience-cv-date",children:[Object(j.jsxs)("h2",{children:[" ",e.experienceData.fromDate]}),Object(j.jsx)("h2",{children:"-"}),Object(j.jsx)("h2",{children:e.experienceData.toDate})]}),Object(j.jsxs)("div",{className:"main-task-cv-container",children:[Object(j.jsx)("h2",{className:"main-task-cv",children:"Main Tasks"}),Object(j.jsx)("p",{children:e.experienceData.mainTasks})]}),Object(j.jsx)("div",{className:"test"})]})};var F=function(e){return Object(j.jsxs)("div",{className:"education-cv",children:[Object(j.jsxs)("div",{className:"school-cv",children:[Object(j.jsxs)("h2",{children:["School Name: ",e.educationData.schoolName]}),Object(j.jsxs)("h2",{children:["Study Title: ",e.educationData.studyTitle]})]}),Object(j.jsxs)("h2",{children:[e.educationData.fromDate," --- ",e.educationData.toDate]})]})};var S=function(e){var t=Object(a.useContext)(p),n=e.educationIds.map((function(e){var n=t.education.filter((function(t){return t.id===e}));return Object(j.jsx)(F,{educationData:n[0]},Object(b.a)())})),c=e.experienceIds.map((function(e){var n=t.experience.filter((function(t){return t.id===e}));return Object(j.jsx)(C,{experienceData:n[0]},Object(b.a)())}));return console.log(t.experience),Object(j.jsx)("div",{children:Object(j.jsxs)(E,{className:"cv-container",children:[Object(j.jsxs)("div",{className:"personal-cv",children:[Object(j.jsxs)("h1",{children:[t.personal.firstName," ",t.personal.lastName]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t.personal.email}),Object(j.jsx)("h2",{children:t.personal.phone})]})]}),Object(j.jsx)("h1",{className:"education",children:"Education"}),n,Object(j.jsx)("h1",{className:"experience-cv-title",children:"Experience"}),c]})})};var P=function(){localStorage.removeItem("isEditMode");var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),o=Object(r.a)(i,2),l=o[0],d=o[1],u=function(e){if("education"===e){var t=Object(b.a)();c((function(e){return[].concat(Object(s.a)(e),[t])}))}else{var n=Object(b.a)();d((function(e){return[].concat(Object(s.a)(e),[n])}))}},m=function(e,t){"education"===e?c((function(e){return e.filter((function(e){return e!==t}))})):d((function(e){return e.filter((function(e){return e!==t}))}))},h=n.map((function(e){return Object(j.jsx)(f,{id:e,onDelete:m},e)})),O=l.map((function(e){return Object(j.jsx)(N,{id:e,onDelete:m},e)})),x=Object(a.useState)(!1),p=Object(r.a)(x,2),v=p[0],D=p[1],C=Object(a.useState)("right"),F=Object(r.a)(C,2),P=F[0],I=F[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{}),v?Object(j.jsx)(S,{educationIds:n,experienceIds:l}):Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)(E,{children:Object(j.jsx)(y,{})}),Object(j.jsxs)(E,{children:[Object(j.jsx)("h1",{children:"Education"}),h,Object(j.jsx)(k,{addComponent:function(){return u("education")}})]}),Object(j.jsxs)(E,{children:[Object(j.jsx)("h1",{children:"Experience"}),O,Object(j.jsx)(k,{addComponent:function(){return u("experience")}})]})]}),Object(j.jsx)(T,{onClick:function(e){e.target.classList.contains("preview-button")&&"right"===P?(I("left"),e.target.style.left="0",e.target.style.transform="scale(-1,-1)"):e.target.classList.contains("preview-button")&&"left"===P?(I("right"),e.target.style.left="",e.target.style.transform="scale(1,-1)"):e.target.parentElement.classList.contains("preview-button")&&"right"===P?(I("left"),e.target.parentElement.style.left="0",e.target.parentElement.style.transform="scale(-1,-1)"):e.target.parentElement.classList.contains("preview-button")&&"left"===P&&(I("right"),e.target.parentElement.style.left="",e.target.parentElement.style.transform="scale(1,-1)"),D((function(e){return!e}))}})]})};i.a.render(Object(j.jsx)(x,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a5cd3675.chunk.js.map