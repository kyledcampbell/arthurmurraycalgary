mobiscroll.setOptions({locale:mobiscroll.localeEn,theme:"socal-blue",themeVariant:"light",clickToCreate:!1,dragToCreate:!1,dragToMove:!1,dragToResize:!1});var firstDay,lastDay,googleCalendarSync=mobiscroll.googleCalendarSync,calendars=[{id:"ab1244573dfa772b3bb4394cce6cd18f972d37e61feadb57186b312fc5cfa462@group.calendar.google.com",name:"Beginner Groups",color:"#ffb600"},{id:"42eb02bb15e2cde62bfdc1be671bf7134c0da13a3678092ccbdf07cf37740019@group.calendar.google.com",name:"Intermediate/Advanced Groups",color:"#061d37"},{id:"408bfdb0044539f9fb88206a497891060c6d56f3ea639e2f4090a22ad798710a@group.calendar.google.com",name:"Events/Holidays/Closures",color:"#93a5d1"}],cont=document.getElementById("google-calendar"),view="month",calendarIds=calendars.map((function(e){return e.id}));function loadEvents(){loadingEvents(!0),googleCalendarSync.getEvents(calendarIds,firstDay,lastDay).then((function(e){e.forEach((function(e){e.resource=e.googleCalendarId})),calInst.setEvents(e)})).catch(onError)}function loadingEvents(e){e?cont.classList.add("md-loading-events"):cont.classList.remove("md-loading-events")}function onError(e){mobiscroll.toast({message:e.error?e.error:e.result.error.message})}googleCalendarSync.init({apiKey:"AIzaSyAps54bmbMLNUggyw6s2ztosHqIU6babxQ",onInit:loadEvents});var calInst=mobiscroll.eventcalendar("#google-calendar",{view:{calendar:{labels:!0}},exclusiveEndDates:!0,resources:calendars,data:[],onPageLoading:function(e){var a=e.month?e.month:e.firstDay,o=a.getFullYear(),n=a.getMonth();firstDay=new Date(o,n-1,-7),lastDay=new Date(o,n+2,14),loadEvents(firstDay,lastDay)},responsive:{xsmall:{view:{calendar:{type:"month"},agenda:{type:"day"}}},custom:{breakpoint:950,view:{calendar:{labels:"all",popover:!0},onEventClick:function(e,a){mobiscroll.toast({message:e.event.title})}}}},colors:[{background:"#EBEBEB",recurring:{repeat:"weekly",weekDays:"SA,SU",interval:1}}]});