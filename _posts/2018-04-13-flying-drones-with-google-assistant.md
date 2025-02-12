---
layout: post
title: Flying Drones with Google Assistant
---

I’m glad so many people enjoyed my post on [Flying Drones with
Code](https://medium.com/@jkeltner/flying-drones-with-code-8267a51fcb7e). A
few people at Upstart enjoyed the post and asked me to come and present the
drone coding experience at one of our lunch ‘n learn sessions in the office.
This turned out to be a lot of fun (you can see a [quick video of our final
result
here](https://www.linkedin.com/feed/update/urn:li:activity:6369645388609179648)…).
However, one of my colleagues said she was bringing her kids in to see the
project — and that they already tried the basics but wanted to “learn from the
pro.”

Uh oh. I’m definitely not a pro — so I decided I needed to add another element
to the original drone flying project so that we could teach the kids
something. And the something we added, was using Google Assistant to kick off
our drone demo. This was easier than I though — and frankly most of the
challenges are in the networking arena — especially making sure we could get a
static IP for my Raspberry Pi at the office. So, if you’ve ever wanted to say
“Hey Google, launch drone demo” and see a drone take off, do some flips, and
land— keep reading to see how we did it…

#### Step 0: Drone Setup

The easiest thing to do here is to [read my original
post](https://medium.com/@jkeltner/flying-drones-with-code-8267a51fcb7e) on
how we set up our Mambo drone to be remotely controlled by a small Raspberry
Pi. It’s not too complicated, but I won’t repeat it all here.

#### **Step 1: Write your fun drone demo**

This is the easy part. I decided that for my “drone demo” I would just have it
do some crazy flips and then land. So, I created a simple -drone-demo.py- file
to execute this. Here’s what I used:

    
    
    from Mambo import Mambo
    
    
    # we got this address by running 'sudo python findMambo.py'  
    mamboAddr = "YOUR MAMBO ADDRESS"
    
    
    # make a mambo object. we need to se use-wifi to false as our Mambo does not have wifi  
    my-mambo = Mambo(mamboAddr, use-wifi=False)
    
    
    # connect to our mambo drone  
    print("trying to connect")  
    success = my-mambo.connect(num-retries=3)  
    if(not success) exit()
    
    
    my-mambo.safe-takeoff(3)  
    my-mambo.fly-direct(roll=0, pitch=100, yaw=0, vertical-movement=0, duration=.5)  
    my-mambo.smart-sleep(2)  
    my-mambo.flip(direction='front')  
    my-mambo.smart-sleep(2)  
    my-mambo.flip(direction='back')  
    my-mambo.smart-sleep(2)  
    my-mambo.turn-degrees(180)  
    my-mambo.smart-sleep(2)  
    my-mambo.fly-direct(roll=0, pitch=100, yaw=0, vertical-movement=0, duration=.5)  
    my-mambo.smart-sleep(2)  
    my-mambo.turn-degrees(180)  
    my-mambo.smart-sleep(2)  
    my-mambo.safe-land(3)
    
    
    # disconnect when we are done  
    my-mambo.disconnect()

#### Step 2: Set up Node-RED

Node RED is a simple web server really intended for IOT projects. However,
it’s perfect for our purposes here as it allows us to accept a simple HTTP
request on our Raspberry Pi and then execute a command. My Raspberry Pi came
with Node-RED already installed, so I just had to run it. That was easy to do
from my main menu bar. Once the server is running, you can open up a browser
(I used Chromium) and head over to <http://127.0.0.1:1880/>.

You should see a screen like this:


Node-RED allows you to build flows with inputs that cause actions. We want to
create a flow that starts with an http request and executes a command. So,
grab the -http- object from the **Input** section and drop it into the flow.
Then grab the -exec- object from the **Advanced** section and add it to the
flow as well. Finally, in order to help with any problems, grab the -debug-
object from the **Output** section. You can then connect the right side of the
-http- object to the left side of the -exec- object. I also connected the
right side of both the -http- and -exec- objects to the left side of the
-debug- object — so I can see any error messages (it ends up being a lot — but
helpful). Once the flow is configured, it should look about like this:


Now we need to configure each object. First, let’s set up the -http- object to
accept a GET request to /drone-demo. Just double click on the object and enter
the right values:


Getting the exec command right is a bit harder. Here we are just trying to
execute the proper command. However, I found that if I tried to use a relative
location for the file it would have an error with the Mambo import. I also
found the need to use the -nohup- command to prevent the exec module from
stopping when I had my first smart sleep command. Here’s the command I used
and an example of the configured screen:

    
    
    nohup python /home/ryan/pyparrot/drone-demo.py


Once this is all set up, you should be able to execute the drone demo by
pinging the appropriate address:
[http://127.0.0.1:1880/drone-demo](http://127.0.0.1:1880/). Check it out!

#### Step 3: Port Forwarding


Now that we have a web server running and accepting requests that can execute
our drone code, we’ve done the most interesting (and easier) part. Now we need
to connect it up to our Google Home. First of all, we need to make our
Raspberry Pi accessible from the public internet so that it can talk to Google
Home. This is generally done through something called Port Forwarding — which
allows us to take our home internet’s single public IP and tell it to route
all requests to a specific port (in this case 1880) to a specific internal
machine (in this case our Raspberry Pi). I configured this in my Eero setup by
going to Network Settings -> Advanced Settings -> Reservations and Port
Forwarding -> Add a reservation.

At this stage, we also need to find the public IP address for you home network
so that we can configure the final step of the process — connecting our setup
to Google Home.

#### Step 4: IFTTT

IFTTT (If This Then Than) is a great tool here because it provides a pre-built
integration into Google Home (this integration is actually why I built this
project using Google Home and not Amazon Alexa. First, you will need to
connect the Google Assistant service to IFTTT. This should ask you to sign in
to your Google Account and grant access. Then switch over and choose “New
Applet”. Your **If** will be Google Assistant. You will need to specify the
words you want to use to launch the demo. I picked “execute drone demo.” It
just sounded cool.


You’re **that** will be a Web Request. You will need to point it to your
public address with the appropriate URL and a basic GET method.

    
    
    [http://YOUR-IP-ADDRESS:1880/drone-demo](http://YOUR-ADDRESS:1880/drone-demo)


#### Step 5: Run the demo!

At this point, when you say “Hey Google, execute drone demo” — your drone
should take off, dance around, and return to land! Of course, there’s usually
a bunch of trouble shooting that goes along with this stage. It certainly took
me a while to get this working — and even longer when I brought the Google
Home into the office and had to get port forwarding working on our internal
network! However, it worked pretty well and everyone was duly impressed

#### What’s Next

This project was a lot of fun, but it got me thinking about what else we could
do with our little drone project. For instance, we could have IFTTT capture
multiple commands and be able to control the drone in real time “Hey Google,
fly drone forward” etc. Might be fun to try out. Maybe I’ll give it a shot
when I find a bit more free time.

If you do decide to give this project a shot — I’d love to hear about your
results. And if you have any difficulties getting it working, let me know and
I’ll see if I have any advice. Enjoy!

