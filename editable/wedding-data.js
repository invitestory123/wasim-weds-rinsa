/**
 * wedding-data.js — Customer-facing editable data layer for marigold-bhavan
 * Edit this file to update couple names, wedding dates, event details, venue, and images.
 */

(function () {
  const URLSearchParamsClass = typeof URLSearchParams !== "undefined" ? URLSearchParams : (typeof window !== "undefined" ? window.URLSearchParams : null);
  const urlParams = (URLSearchParamsClass && typeof window !== "undefined" && window.location) ? new URLSearchParamsClass(window.location.search) : null;
  const isCompliments = Boolean(
    (urlParams && (urlParams.has("compliments") || urlParams.get("v") === "compliments" || urlParams.has("c") || urlParams.get("with") === "compliments")) ||
    (typeof window !== "undefined" && window.location && window.location.pathname.toLowerCase().includes("compliments")) ||
    (typeof window !== "undefined" && window.__FORCE_COMPLIMENTS__ === true)
  );

  const standardNote = "Together with their parents,\nC.P. Kunhimohamed & Shameera T.K.\nand Ismail & Raihanath.\n\nWasim Mohamed & Rinsa T.C.\nrequest the honour of your presence\nas they celebrate their Wedding & Nikkah Ceremony- an auspicious day of love, blessings, and togetherness.";

  const complimentsNote = standardNote + "\n\nWith best compliments\nFidha, iza and Chloe";

  window.WEDDING_DATA = {
    couple: {
      groom: "Wasim",
      bride: "Rinsa",
      groomFull: "Wasim Mohamed",
      brideFull: "Rinsa T.C.",
      groomParents: "C.P. Kunhimohamed & Shameera T.K.",
      brideParents: "Ismail & Raihanath",
    },

    wedding: {
      eventTitle: "Wedding & Nikkah of Wasim & Rinsa",
      subheading: "Join us to celebrate the wedding of",
      dateLabel: "27.12.26",
      dayLine: "Sunday, 27th December 2026",
      timeLine: "Nikkah at 11:00 AM · Lunch to follow",
      // start and end are ISO local time strings (drives countdown and calendar invites)
      start: "2026-12-27T11:00:00",
      end: "2026-12-27T15:00:00",
      timeZoneOffset: "+05:30",
    },

    invitation: {
      note: isCompliments ? complimentsNote : standardNote,
      standardNote: standardNote,
      complimentsNote: complimentsNote,
      closing: isCompliments ? "With best compliments\nFidha, iza and Chloe" : "With love & prayers",
    },

    venue: {
      name: "Conventional Hall, The Raviz Kadavu",
      address: "NH 66, Bypass Road, Azhinjillam, Calicut, Kerala 673632",
      city: "Calicut",
      query: "The Raviz Kadavu, Calicut",
      lat: 11.2043,
      lng: 75.8666,
      // Custom map links
      mapSearchUrl: "https://share.google/XN7RIfr7mxUlWdUVS",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Raviz+Kadavu+Calicut",
    },

    music: {
      track: "./editable/assets/bg-music.mp3",
      startTime: 8.0,
    },

    images: {
      couple: "./editable/assets/couple.png",
      groom: "./editable/assets/groom.png",
      bride: "./editable/assets/bride.png",
      footerBg: "./editable/assets/footer-bg.jpg",
      map: "./editable/assets/map.jpg",
    },
  };
})();
