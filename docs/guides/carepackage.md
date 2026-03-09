---
title: Carepackage
---

## What is the carepackage?
Normally the whole point in debug logging is that you can send us the carepackage. 

A carepackage is just a snapshot of your Mylar configuration / logs / database / environment (all apikeys, usernames, etc are stripped from the logs and config.ini files during carepackage generation - the db does not contain any keys).

After you get the debug log enabled, you need to try to repeat any workflow problem that's occurring so that it can get logged.

## Generate the CarePackage
Here's how to go about generating a carepackage:

- go to the Configuration page.
- click on the **CarePackage** button in the upper right corner.
- your browser will download the _carepackage.zip_ file after a few moments.
- the _carepackage.zip_ file is also stored in the cache folder, by default within the mylar program directory.

You then need to attach it to the github issue pertaining to the problem. This can be done in one of two ways: 
- drag & drop the file into the github issue where it will be uploaded to github (if it's not a huge file)

OR

- upload the _carepackage.zip_ file to some 3rd party storage that will provide you with a shareable link (mega, dropbox, drive, [nerdfirehurricane](https://fs.nerdfirehurricane.com) are some examples).
- paste the link directly into the github issue
