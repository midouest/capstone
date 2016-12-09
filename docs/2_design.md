---
layout: page
title: Design
permalink: /design/
previous: 1
next: 3
---

All designs were created using [Paper](https://www.fiftythree.com/paper) and [Pencil](https://www.fiftythree.com/pencil) by [FiftyThree](https://www.fiftythree.com/).

## Trade-offs

### Map-based vs. Story-based

The primary difference between *DMScreen* and similar tools is that *DMScreen* is story-based, whereas other tools are map-based. What this means is that the story content is always front-and-center. In a map-based tool, the default view will be a map of the world or of a dungeon. My decision to create a story-based tool was informed by my user interviews. Two of the three participants reported that they don’t use maps at all, and the remaining one used them lightly. For all three, story and roleplay were their primary concern, not combat.

![]({{ site.url }}/assets/design/sketch1.png)

> Early interface concept showing focus on story chapters rather than maps.

The downside of being story-based rather than map-based is that *DMScreen* does not provide as rich a tool set for map operations as other tools. However, this is not as important for *DMScreen* since it is designed for use in-person rather than over the internet. When playing in person, the map will normally be drawn on paper and placed in the middle of the table where everyone can see. Without specialized hardware for sharing, having the map on a the DM’s computer would be a hinderance.

### Tabletop vs. Laptop

How much of the DM’s workflow should be integrated into the application? Tabletop RPGs started out on nothing more than, pen, paper, dice, and imagination. More recent tools like Roll20.net or Fantasy Grounds have shown that it’s possible to bring all of this into a digital interface that integrates maps, story, and dice rolling. However, both of these tools focus on online-only play, whereas *DMScreen* primarily focuses on offline, in-person play. In this environment, players and DMs may prefer to have certain information on the tabletop rather than in digital form. Of the DMs that I interviewed, those that used maps reported that they shared them with the players.

Sometimes players can benefit from information that is digital and not shared. One DM commented that being able to roll dice within the program would be useful for hiding information. DMs will often fudge dice rolls for the sake of the story, so it can be useful to hide the outcomes from the players so they don’t know when the DM is modifying them. Although many of the DMs that I interviewed reported using a smartphone or tablet app to roll dice, I decided that I would not include dice rolling utilities in the initial iteration of *DMScreen*. A decent dice rolling utility would be integrated with many aspects of the application, including character sheets, monsters, and spells. My decision to leave out the dice rolling utility was therefore motivated by a desire to reduce complexity and focus on a set of features that I felt were not yet fully explored in this class of software.

![]({{ site.url }}/assets/design/sketch2.png)

> Early interface concept with simple dice rolling in the bottom right corner.

![]({{ site.url }}/assets/design/sketch14.png)

> Character sheet concept that allows users to automatically add modifiers to dice rolls.

### References

The single most important function that *DMScreen* provides for reducing prep time and interruptions is the ability to search reference materials. This feature went through several iterations as I refined the concept from something that was useful to me into something useful to my users.

I initially imagined that references would function like auto-complete and go-to declaration in programming IDEs. As the programmer enters code, the IDE attempts to automatically complete the text with names of variables or types that match the user’s intent. IDEs also allow users to click on variables and types as they are used throughout the code in order to quickly navigate to the point where they are first declared. These features are extremely useful for navigating large systems with lots of concepts. A tabletop RPG campaign is not unlike this in that it includes many small concepts such as monsters and spells which are used repeatedly throughout a complicated system.

![]({{ site.url }}/assets/design/sketch9.png)

> Initial concept of how auto-complete would work.

![]({{ site.url }}/assets/design/sketch23.png)

> Less intrusive concept which requires the user to click on potential matches.

This design is the most helpful in terms of discovering relevant content since it automatically suggests references as you type. However, I was worried that my users might have difficulty understanding the concept since only one user that I interviewed had any programming experience. Another drawback of this design is that it requires you to click on the link and open it in another window when you want to reference it. This leads to the user having to manage multiple floating windows or constantly opening links in the reference view.

The next iteration of this interface moved the suggestions into a dedicated tool in the sidebar. Users could then click on the desired reference and fully or partially copy its contents into the main editor. I reasoned that being able to copy the information into the relevant story section would be helpful in reducing the amount of time the user would have spent managing reference windows. Embedding the full reference content exactly where it is needed means the DM never has to search for it.

![]({{ site.url }}/assets/design/sketch8.png)

> Early concept of the suggested references tool.

![]({{ site.url }}/assets/design/sketch5.png)

> Example of a stat block that the user might want to copy in part or in full.

![]({{ site.url }}/assets/design/sketch7.png)

> Cheatsheet concept with mixture of story and stat blocks.

![]({{ site.url }}/assets/design/sketch18.png)

> Considering what information users might want to copy.

![]({{ site.url }}/assets/design/sketch19.png)

> Concept of how to handle copy stat blocks in part and in full.

![]({{ site.url }}/assets/design/sketch20.png)

> NPCs challenge the copied stat block metaphore.

With the copy-paste functionality, the story chapters transformed into cheatsheets with a mixture of both story and rules content. The idea was that the DM would only have one document that they had to look at when they played the game and rarely if ever would they have to search for information. This concept relies on the information that DMs would copy into the cheatsheets being able to handle multiple instances. This works great for things like monsters and spells which there can exist independently in multiple places, but completely breaks down for non-player characters (NPCs). The DM might want to use an NPC in multiple parts of the story, so the challenge was in handling edits to the NPC in different sections. My assumption up until that moment was that editing a reference that was copied into a cheatsheet would not affect the source reference. If something happens with the NPC during the course of the story, the DM might want to update its information. These updates would need to propagate back to the original reference item and every other location in order for the NPC to remain consistent throughout the story. My options were to special case NPC references or force references to be read-only, which negated much of the benefits of being able to copy the information in the first place.

I decided instead to scrap the copy-paste functionality and instead develop a concept of a *reference view*. Whenever the DM searches for information using the search bar, that information would appear at the top of a special view next to the main view that only contains references. As the DM searches for information, the most frequently used items remain near the top, while the less frequent information moves towards the bottom and eventually gets removed. While the DM still has to pay the up front cost of searching for the information, the cost is amortized over several references if the DM uses it frequently or is willing to scroll through the view to find it.

![]({{ site.url }}/assets/design/sketch22.png)

> Early concept and workflow of how search results appear in the reference view.

### Tracking combat

Tracking combat is a tedious task that came up in each of my user interviews and in my own experience as a DM. I wavered on whether or not this feature should be included in my design since it adds complexity. I decided to include it on the basis that users need to track this information some how and there simply isn’t a good way to do it on pen and paper or in plain text. It is a natural fit for the quick reference tools that I am developing.

The trade-offs involved in combat tracking revolve around how much information to include. Some users wanted to be able to see the full information for each character involved in combat, whereas others felt that they only needed the most important bits, such as hit points (HP), armor class (AC), and status effects such as poison, paralysis, etc. During combat, characters take turns attacking in an order determined at the beginning of combat referred to as *initiative*. The DMs that I interviewed all reported that having an application for tracking initiative and whose turn it was would be very helpful. There are occasions where a DM may not want to have order determined automatically and instead be able to order the characters manually, so it is important to support both of these scenarios.

The initial concept for this tool was a toolbar that allowed users to drag and drop stat blocks for characters and monsters into a list. Characters would be sourced from the character toolbar that lived at the top of the application at that time. I reasoned that DMs would need to frequently reference information about the players in their campaign, so having this information in an easy-to-access location would be useful.

![]({{ site.url }}/assets/design/sketch10.png)

> Early concept of the combat toolbar.

![]({{ site.url }}/assets/design/sketch12.png)

> Early concept of the character toolbar.

![]({{ site.url }}/assets/design/sketch16.png)

> Further iteration of the combat toolbar including automatic initiative ordering.

![]({{ site.url }}/assets/design/sketch17.png)

> Concept of the information and functionality that would go into each combat card.

With the file hierarchy, the main view, the reference view, and the combat toolbar occupying the horizontal width of the application, I started feeling a little cramped for space. I briefly experimented with moving the combat tool into the reference view as a permanent widget, but I felt that this didn’t mix well with the existing metaphor for that interface. The next evolution of the interface moved the combat toolbar to the bottom, sacrificing vertical space for horizontal space. Additionally, I added a button that allowed the user to collapse the view when tracking combat was unnecessary.

![]({{ site.url }}/assets/design/sketch25.png)

> Concept of the combat widget in the reference view.

![]({{ site.url }}/assets/design/sketch26.png)

> Moving the combat toolbar to the bottom in order to save horizontal space.

![]({{ site.url }}/assets/design/sketch27.png)

> Wider bottom toolbar.

![]({{ site.url }}/assets/design/sketch28.png)

> Concept for collapsing and expanding the combat toolbar.

There was a high degree of overlap between the character toolbar and the combat toolbar in this design. Ultimately, I decided combined toolbar with two states, allowing the user to switch between character mode and combat mode, with combat mode being auto-populated with all the characters. This had the advantage of saving space as well as allowing the user to select the appropriate tool for the current scenario.

![]({{ site.url }}/assets/design/sketch30.png)

> Concept for combined character and combat toolbars.

### Final Design

The overall design metaphor is inspired by programming-oriented text editors and integrated development environments (IDEs), such as Sublime Text or Xcode. These applications feature a file hierarchy on the left, with one or two editor views occupying most of the application window. Additional toolbars are featured on the top, left, and bottom.

The reference view to the right of the main view is inspired by cardboard cheatsheet “screens” used by DMs to hold frequently-used information. As the DM searches for information it is added to the reference view, creating a dynamic cheatsheet with the most frequently-used information towards the top.

The final design is less intelligent than my initial vision in the sense that it does not automatically suggest and link references as the user types. However, it sacrifices this intelligence in favor of making frequently-used references more visible so that the user spends less time juggling windows.

![]({{ site.url }}/assets/design/sketch31.png)

> Final high-level iteration of the interface.

### Reducing Scope

When I was finished with the design, I realized that the scope was too big for my first iteration. The first feature to be cut was the combat tracking. Tracking combat was an important feature for *DMScreen*, but for early iterations, I felt that the reference view was a more critical interface to evaluate.

![]({{ site.url }}/assets/design/sketch32.png)

> Reduced-scope design without combat tracking

Once I decided to focus on the reference view for the first prototype, I could begin removing other small features. In the next iteration I removed bookmarking and document linking. I then simplified the interface so that related elements were grouped together, moving the search bar over to the reference view.

![]({{ site.url }}/assets/design/sketch38.png)

> Final reduced-scope design with file organization, editing, and references.