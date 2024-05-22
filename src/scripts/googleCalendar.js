mobiscroll.setOptions({
  locale: mobiscroll.localeEn,
  theme: "socal-blue",
  themeVariant: "light",
  clickToCreate: false,
  dragToCreate: false,
  dragToMove: false,
  dragToResize: false,
});

var googleCalendarSync = mobiscroll.googleCalendarSync;
var calendars = [
  {
    id: "ab1244573dfa772b3bb4394cce6cd18f972d37e61feadb57186b312fc5cfa462@group.calendar.google.com",
    name: "Beginner Groups",
    color: "#ffb600",
  },
  {
    id: "42eb02bb15e2cde62bfdc1be671bf7134c0da13a3678092ccbdf07cf37740019@group.calendar.google.com",
    name: "Intermediate/Advanced Groups",
    color: "#061d37",
  },
  {
    id: "408bfdb0044539f9fb88206a497891060c6d56f3ea639e2f4090a22ad798710a@group.calendar.google.com",
    name: "Events/Holidays/Closures",
    color: "#93a5d1",
  },
];

// var CALENDAR_ID = ["", ""];
var cont = document.getElementById("google-calendar");
var view = "month";
var calendarIds = calendars.map(function (cal) {
  return cal.id;
});
var firstDay, lastDay;

googleCalendarSync.init({
  apiKey: "AIzaSyAps54bmbMLNUggyw6s2ztosHqIU6babxQ",
  onInit: loadEvents,
});

function loadEvents() {
  loadingEvents(true);
  googleCalendarSync
    .getEvents(calendarIds, firstDay, lastDay)
    .then(function (resp) {
      resp.forEach(function (event) {
        event.resource = event.googleCalendarId;
      });
      calInst.setEvents(resp);
    })
    .catch(onError);
}

function loadingEvents(show) {
  if (show) {
    cont.classList.add("md-loading-events");
  } else {
    cont.classList.remove("md-loading-events");
  }
}

function onError(resp) {
  mobiscroll.toast({
    message: resp.error ? resp.error : resp.result.error.message,
  });
}

var calInst = mobiscroll.eventcalendar("#google-calendar", {
  view: {
    calendar: {
      labels: true,
    },
  },

  exclusiveEndDates: true,
  resources: calendars,
  data: [],
  onPageLoading: function (event) {
    var start = event.month ? event.month : event.firstDay,
      year = start.getFullYear(),
      month = start.getMonth();

    // Calculate dates
    // (pre-load events for previous and next months as well)
    firstDay = new Date(year, month - 1, -7);
    lastDay = new Date(year, month + 2, 14);

    loadEvents(firstDay, lastDay);
  },

  responsive: {
    xsmall: {
      view: {
        calendar: {
          type: "month",
        },
        agenda: {
          type: "day",
        },
      },
    },
    custom: {
      // Custom breakpoint
      breakpoint: 950,
      view: {
        calendar: {
          labels: "all",
          popover: true,
        },
        onEventClick: function (event, inst) {
          mobiscroll.toast({
            message: event.event.title,
          });
        },
      },
    },
  },
  colors: [
    {
      background: "#EBEBEB",
      recurring: {
        repeat: "weekly",
        weekDays: "SA,SU",
        interval: 1,
      },
    },
  ],
});
