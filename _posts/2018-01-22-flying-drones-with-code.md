---
layout: post
title: Flying Drones with Code
---

I have been trying to get my son more interested in coding. He is very
interested in engineering and building (we have more Legos than I can count),
and has expressed interest in learning to code; but each time he actually gets
into coding itself his interest seems to wane. I think it’s just hard to get
excited about something that only happens on the screen for him. He’s 8 years
old and loves to interact with things in the physical world. So, when I saw in
his school newsletter that another Dad had come into the 5th grade science
class and flown a drone through Python, I reached out to see how. What could
make coding more exciting than having your code fly a done?!?!

Sam Pfister (the Dad in question) quickly responded and pointed me to all the
pieces needed to do this. I followed his suggestions and got this working
pretty quickly after a bit of trial and error. Every friend my son has had
over since setting this up has ended up coding some Python to fly the drone.
It’s not a master class in coding — but it is getting them very interested in
how the code works and familiar with programming concepts. I love the idea
that they are learning by doing, instead of having to teach them about
functions, objects, variable, etc. They doing something real — and we pick up
the rest along the way.

In case you would be interested in a similar set up, I wanted to share how I
got this going. It’s pretty straight-forward, though it’s not drop-dead easy.
Here’s what I’m using.

  * **The drone.** The drone is a simple Parrot Mambo. I picked mine up [refurbished on Amazon](https://www.amazon.com/Parrot-Minidrone-Accessories-Certified-Refurbished/dp/B071NRZ5LX/). Sam told me it has “very good lateral and altitude stability”, which make it easier to fly. It also come with a claw that can be used to pick up objects and a gun that shoots small balls. Both programmable.
  * **The controller.** If you get this basic version of the drone, you have to connect to it over Bluetooth. Apparently the Python libraries for Bluetooth are not great on Mac OS. So I’m unable to control the drone directly from my laptop. This has made it a bit tricky, but workable. If you get the Mambo with the FPV camera or the Bebop, you can control it over Wifi which may work directly from the Mac. If you get that working, let me know! Instead, I bought an inexpensive [Raspberry Pi kit](https://www.amazon.com/CanaKit-Raspberry-Complete-Starter-Kit/dp/B01C6Q2GSY/). The basic setup is working just fine for controlling the drone, but it does require using SSH and SFTP in order to send commands to the drone.
  * **The drone library.** The most important thing Sam pointed me to was the code library for controlling the drone: <https://github.com/amymcgovern/pyparrot>. I’ve never met or spoken with Amy McGovern, but thank you Amy for building this library. It’s specifically targeted at K12 students — which means it’s just my speed. My son has been able to follow here examples and execute some basic commands.

With those simple pieces, and following the directions in the code library, I
got the drone set up in an hour or so and flying in the same day. I even found
a nice Extension for Visual Studio Code called -SFTP- that lets me edit files
over FTP, so we can use the Mac as our editor and allow the Raspberry Pi to
run headless. It’s a pretty easy thing to set up — and so far I’m loving it.

At this point, my son has use the drone to pick up several objects, fly them
across the room, drop them into a box and return the drone home. I’m hoping to
add more complex flight patterns to the mix — and since you can directly
control roll, pitch, and yaw; it should be a great chance to talk about the
basics of flight as well!

I take no credit for any of the above working. I was just lucky to be pointed
to some fabulous resources that have been wonderful tools for getting my son
interested in writing some code and I wanted to share them. If you get a
similar set up working — let me know! I’m looking forward to seeing what we
can do with this project over time!

