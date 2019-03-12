---
layout: blog
title: Blog
permalink: /blog/
month: March
---
# 9 March
## Downtown day

My friend came to visit today! He said he wanted to try dim sum, so we went to the one downtown.

![Dim sum](/images/blog_march/dim_sum.jpg)

This place was pretty nice! It was a bit cleaner and fancier than I am used to from dim sum places. A little more expensive, too. I enjoyed the food quite a bit, but then again, I always like dim sum!

Afterwards, we went to the library to work on the puzzle a little bit. We made some progress!

![Puzzle progress](/images/blog_march/puzzle_progress.jpg)

Here's what the final picture would have looked like:

![Puzzle picture](/images/blog_march/puzzle_picture.jpg)

As you can see, it's a big but easy puzzle. It has lots of small details and distinct areas, making it quick to tell where any piece belongs! It also has a lot of words in it, which allows you to easily figure out the orientation of pieces.

I wan to go back and finish this puzzle sometime! I wonder if it'll still be there...

# 8 March
## Party day

Today was kind of a party day at work. My team manager planned a special lunch for us with catering, for no real reason. It was tacos, just like Mamacitas (but not quite as good). We even got churros and horchata!

![Tacos](/images/blog_march/tacos.jpg)

After that, we had a fun event. An instructor came and we built robots in teams and then battled them.

![Robot 1](/images/blog_march/robot1.jpg)

Here they are battling... The goal is to pop the other's balloon with a needle on your arm!
![Robots](/images/blog_march/robots.gif)

All in all, it was a pretty fun event!

# 7 March
## Losing things

It's been a bad year for losing things. First it was my wireless earbuds, then my hat, then my cup and teapot...

Another thing I have been slowly losing over time is the rubber tips that go on my earbuds. So far, whenever I have lost one, I have been able to replace it with tips taken from my old earbuds. However, I eventually ran out of those...

Then I remembered, when I bought my earbuds long ago, it came with this huge array of earbud tips!

![Earbud array](/images/blog_march/earbud_array.jpg)

I think it's funny to see them all lined up like this!

# 6 March
## Email authentication

When you send an email to someone, it's possible to write whatever you want in the sender address.

This poses a problem: When you receive an email, how can you tell that it's actually from who it says it's from?

Today, most email service providers implement some form of _authentication_, a method for determining whether the email sender is who they actually claim to be. I'll describe one such method, which is known as _SPF_ (Sender Policy Framework).

Imagine a scenario where alice@hotmail.com sends an email to tanaka@gmail.com. In this process, a computer owned by hotmail.com (Microsoft) communicates with a computer owned by gmail.com (Google).

When Google receives this message, it sees that the from address claims to be alice@hotmail.com. In order to check whether this is true, it must determine whether the computer it is communicating with is actually owned by Microsoft. If it is actually Microsoft, then Google will trust Microsoft that the message is really sent by alice.

So, how can Google know for sure whether the computer is actually owned by Microsoft?

There is only one piece of information that Google knows for sure about the computer it is communicating with, and that is its _IP address_. An IP address describes the geographical location of a computer in the real world. Google must know the IP address of the computer because it is exchanging messages with it, and Google has to know where in the real world to send the messages.

Since Google knows the IP address, all it needs to check is whether this IP address is owned by Microsoft or not.

In order to do that, Google does a _DNS lookup_ on "hotmail.com". The DNS (Domain Name System) is a globally available database of information about internet domains. Domain owners can register their domain here along with various information about the domain. In particular, Microsoft has registered an entry for "hotmail.com", and in that entry, they've included a list of IP addresses they own. All Google needs to do is check whether the IP address of the computer they are communicating with is in that list. This allows them to conclude the computer is owned by Microsoft.

And that is how the email authentication method known as SPF works.

# 5 March
## Double mentorship

Earlier I mentioned I was assigned to mentor a new engineer on the team. I have begun by giving a series of small talks going over our team's major systems.

Then, another new engineer on our team joined days later. I invited them to join my talks, so now I am teaching the two of them.

I enjoy it a lot. It reminds me of my days at school, lecturing. Except it's much nicer to teach such a small number of people. It reminds me, I used to want to be a teacher. Maybe someday...

# 4 March
## Council from friends

I had lunch with two of my old friends from college that work at the same company as me. They seem to be doing well. One of them, who hated their team for the longest time, transferred to another team and now likes it a lot. They now work on self-driving cars, at the building near where I live.

At lunch, they spent a long time trying to comfort and encourage me, because now the one who has been doing the worst at work. I've been here the longest, but I still haven't been promoted yet, or anything...

Struggling with promotion is something that increasingly weighs on my mind, as more time passes. It's hard to tell how much to blame myself, vs my team, vs my manager. Would I be better off switching teams? Or is it really up to me to try harder?

# 3 March
## Chapter 29

The next story chapter, chapter 29, is here! [Japanese version](/story#２９章) and [English version](/english_story#chapter-29).

By the way, in case you missed it, I just recently posted chapter 28 on March 1st!

# 2 March
## Crazy cat show!

We saw some crazy cats at the cat show! It seems like they all take a certain characteristic to the extreme. They are either the most fluffy, or the most skinny. And they are quite large, and super well groomed.

As you said though, there potentially some troubling aspects to a cat show. The emphasis on pure breeds, or if the breeders are in it primarily to promote their cat's breed so they can sell it, or if the breeders have to drug their cats to get them to behave... Who really knows what goes on, but it wouldn't surprise me if competition brings out some shady things. 

Anyway, I wonder what the cats think of it all. I hope it's not too stressful for them, and it's a happy life!

# 1 March
## Next story chapter

Chapter 28 is here! [Japanese version](/story#２８章) and [English version](/english_story#chapter-28).
