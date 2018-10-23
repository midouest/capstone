---
layout: page
title: Prototype
permalink: /prototype/
previous: 2
next: 4
---

## Strategy

After evaluating [Axure](http://axure.com) and [Justinmind](https://www.justinmind.com), I decided that my professional experience with web technologies (HTML, CSS, and Javascript) would be a better fit for this project.

The _DMScreen_ prototype has many familiar elements: a file hierarchy, a text editor, a search bar. While it was important for me to understand what kind of content users will be creating and how they organize it, my primary focus was on prototyping the reference tool. To this end, I decided to borrow elements of existing text editors and file hierarchies. This helped to better communicate these familiar UI elements to the users so that I could focus on the novel UI elements that I wanted to test.

## Landing Page

When the user first opens the _DMScreen_ prototype, they are presented with a familiar text editor interface. It has a file hierarchy on the left, with folders that can be expanded and collapsed, much like in a file explorer application such as Windows Explorer or macOS Finder. In the middle is the primary editor view, and the view on the right is dedicated to finding and displaying references. Both of these views are initially empty, until the user opens a file for editing or searches for a reference.

![]({{ "/assets/prototype/dmscreen.jpeg" | absolute_url }})

## Creating and Editing Documents

One of the first things a user will do in _DMScreen_ is create a new file. To do so, the user clicks on a plus button above the file hierarchy, displaying a dropdown where they can select which type of file they want to create. In the final product, different file types may have different formatting or templates. However, the prototype does not have any templates and all files use the same formatting. I chose to prototype this feature because I felt that it would be an important part of the user’s workflow.

![]({{ "/assets/prototype/create-new.jpeg" | absolute_url }})

When preparing for a campaign, dungeon masters spend most of their time editing content. This includes creating new story content, adding new monsters, and writing house rules. The user can edit a file by first navigating to it in the file hierarchy and then selecting it. The prototype editor includes basic word processing tools such as bold, italics, table formatting, etc. I wanted to include these tools to make the editor feel more like a word processor, and also to allow users to visually separate information in the editor. This feature may have been less important and could have potentially been skipped.

![]({{ "/assets/prototype/editing.jpeg" | absolute_url }})

Clicking the button next to the title of the currently open file allows the user to edit the filename. It was important to include this functionality in the prototype so that users could give meaningful names to new files that they create, and then search for those same files using the reference tool. I did not want to spend too much time prototyping this feature since I felt that it was not as important as other areas. I felt that adding a button was the simplest approach, but I think that some aspects of the design may be confusing. Another possibility may be allowing the user to double-click the text in the title bar, or adding a context menu in the file hierarchy.

![]({{ "/assets/prototype/title.jpeg" | absolute_url }})

Hovering the mouse over a file in the file hierarchy reveals the delete button, which allows users to remove files. This feature is probably not necessary for the prototype, since the users will mostly be creating files and not deleting them. I included it in case the user makes a mistake when creating a file and wants to delete it and start over.

![]({{ "/assets/prototype/hover.jpeg" | absolute_url }})

Clicking the delete button prompts the user to confirm that they are deleting the intended file. I did not want to include the ability to delete files without also making sure the user could not delete files on accident.

![]({{ "/assets/prototype/delete.jpeg" | absolute_url }})

## References

The reference search bar and view are the two most important features in the prototype. When the user enters text in the search bar, the search bar auto-completes the query as the user types using the titles of the documents in the file hierarchy. Since users will not necessarily know what information was in the system, I want them to be able to see the results of the query updated in real-time so they can more easily explore the content.

![]({{ "/assets/prototype/search.jpeg" | absolute_url }})

Selecting a result from the reference search opens that file as a reference in the reference view. The reference view keeps any files that the user searches for open in order of most recently searched so that the user can scroll to a reference instead of having to search for it again. The reference view is inspired by dungeon master’s screens - large cheat sheets made of card paper that dungeon masters sometimes use during play to quickly reference critical rules and obscure their actions. The reference view can be thought of as a dynamic dungeon master’s screen, built up over time as the user searches for references, with the most-used material staying near the top.

![]({{ "/assets/prototype/reference.jpeg" | absolute_url }})

Since it’s possible that some references may contain a lot of content, I added a button that allows users to minimize individual reference cards. Users can also remove a reference from the reference view entirely.

![]({{ "/assets/prototype/minimized.jpeg" | absolute_url }})
