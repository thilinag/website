---
title: "F1 Steering Wheel with Arduino"
pubDate: 2019-10-27
description: "A formula 1 steering wheel controller for G27."
author: "Thilina Gunasekara"
tags: ["electronics", "3dprinting", "arduino", "CAD"]
tweets:
  [
    {
      link: "https://twitter.com/thilinag/status/1170641739335364608",
      text:
        "I started making a formula 1 style steering wheel for my G27 couple of weeks ago. It has been progressing slowly whenever I get some free time. Came across some cool software along the way and wanted to share.  Watch this space.  #F1WheelProject
        ",
    },
    {
      link: "https://twitter.com/thilinag/status/1170643789708283905",
      text:
        "First task was to design the rough idea on a cad software. Autodesk fusion 360 has a free hobbyist license and excellent for the task.
        ",
      images:
        [
          { googleDriveId: "1A3LWjLH5Lq1AnOOrMprqJQy6Sqb0Jiv_" },
          { googleDriveId: "1ToSbhyhRJzRRpO2cKqGqvybmoVUM-n-b" },
          { googleDriveId: "1Thv10IKYAAPPWgZRaBT54oE6brM2hW9R" },
        ],
    },
    {
      link: "https://twitter.com/thilinag/status/1170645025895546883",
      text: "Started adding more detail to the design based on Mercedes F1 wheel and laser cut the design in a 3mm MDF for test fit",
      images:
        [
          { googleDriveId: "1_9iPIfUvuq9D4vgz2pIf1BFwheZe3Bdf" },
          { googleDriveId: "1E9iqWUqjxFt9GrdqZhhs8s9GTsQYNvSs" },
        ],
    },
    {
      link: "https://twitter.com/thilinag/status/1170646466378944512",
      text:
        "From fusion 360 you can export sketches as DXF vector format. Used awesome http://deepnest.io to find the optimal nesting to save material and save time when laser cutting #F1WheelProject
        ",
    },
    {
      link: "https://twitter.com/thilinag/status/1170648000508485632",
      text: "As the screen of the wheel I’m using a cheap android phone. The telemetry data from racing games is provided by simhub. https://github.com/SHWotever/SimHub. If you are doing any sim racing related project this is the best thing ever. #F1WheelProject",
    },
    {
      link: "https://twitter.com/thilinag/status/1170649813777448960",
      text:
        "For the rpm and flag status during race I’m using a arduino ATmega328  nano board. Again the data is provided by simhub.
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1170663539553357824",
      text:
        "Next up is buttons. It will have 10 momentary push buttons. 3 rotary buttons (rotary come with a push function) and 2 micro leaver switches for shifters. Need to figure out a way to do a button matrix. Building on ATmega32u4 arduino pro micro using
        https://github.com/MHeironimus/ArduinoJoystickLibrary",
    },
    {
      link: "https://twitter.com/thilinag/status/1170668327997280257",
      text:
        "Laser cutting was done at @MakerspaceAdl awesome place with awesome community if you need any laser cutting or 3D printing done.
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1170894472416129024",
      text: "NeoPixel LEDs are super fun
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1172770792871849989",
      text:
        "Printing one of the parts for the F1 wheel on the awesome @Zortrax_3D  M300 at @MakerspaceAdl today #F1WheelProject
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1188396024470966272",
      text:
        "Project update on f1 steering build. Buttons and lights done. Working on quick release mechanism to connect it to the steering base 🏎
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1188396090741030912",
      text: "MFD menu with rotary encoders
        ",
      video: true,
    },
    {
      link: "https://twitter.com/thilinag/status/1188396151902363649",
      text: "Using neopixels for RPM lights, deltas, sector times, flags etc
        ",
      video: true,
    },
  ]
featured: true
---
