---
title: Frequently Asked Questions (FAQ)
---

- Using DDL, Mylar can't find a comic even though it's there
- Enabling year removal doesn't give me the results I want
- The series is named something different than what mylar says - how can I fix it?

**- Mylar can't find a comic with DDL as a provider, even though the comic name, when searched via browser on GetComics.info gives 1 result with a Direct Download link**

Searches done by Mylar using DDL iterate over various combinations of the comicname, issue number, year and the book type.  Sometimes changing the comic type can make it get snatched and downloaded. For example, from One-Shot to TPB, : `Edit Settings` --> `Force-Type (original:One-Shot)` --> `TPB`. Or sometimes checking `Accept all booktype search matches` can make it work.

![158106353-f380d201-a3f7-4b52-b1c9-8f695e27d398](https://user-images.githubusercontent.com/909424/158455173-fb89e6e3-2593-4f37-82cd-2ce76f42cebc.png)

---


**- Why does a search take so long? I have multiple indexers!**

All searches with Mylar use iteration, spread one minute apart. Depending on book type selection there can be up to 5 calls per indexer all spread 1 minute apart. This can delay when the indexers in front truly don't have the book, :
Mylar will continue until it finds the books on an active indexer or source. This is why sometimes a single good indexer or DC++ Hub will result in not only faster searches but more successful grabs.

---


**- My torrent indexers never seem to find anything.**

Torrents are genuinely not a great source for comics packaged in individual issues/books which is what Mylar is searching for outside of DDL. Because of this it's highly recommended unless you're part of a comic specific torrent site :
to rely on other sources.

---


**- I'm using Docker for Mylar and my downloads from SABnzb/Air DC++ are not being processed. Please help!**

There's three common causes for this.

1.) Permissions are not correct - Mylar when in Docker should have `Enforce Permmissions` turned off in the `Web Interface` tab. This allows the host system to handle the permissions, as a file owned by the Mylar conatiner user may not :
be otherwise accessible to other users.

2.) 
   SAB users A.) Make sure `Are Mylar / SABnzbd on separate machines` is checked and your `SABnzbd Download Directory` is set to the location that Mylar sees within the conatiner. For example, if you mounted your downloads in :
   `/downloads/comics/` for SABnzbd but Mylar sees this as `/comics/` you would put `/comics/` here.

   Air DC++ users B.) Ensure your `Downloads Directory` is set for the directory that Air DC++ is downloading to as Mylar sees it. Please see example above as it's the same principle just different location for the setting.

3.) This is a SABnzbd specific setting, `Mylar Host Override:` on the `Download Settings` page, set this to how Mylar appears to any other device on the network (for example `192.1.0.42:8090` or if a proxy or DNS server is in use for your LAN `mylar.domain.com` so long as it is traversable to Mylar) and the NZB should send successfully to SABnzbd and be visible to Mylar. 

---


**- I selected `Year Removal` on `Edit Settings` on my comic, yet it didn't do anything when searching for downloads.**

`Year Removal` only works for `print` volumes. If it's a non print, usually there's no issue number so it uses the year to help determine if it's provided.

---

**- The _ComicVine_ name of my comic yields no results from DDL. But if I could change the name of the comic it would get a match on DDL**

You can use the `Alternate Search Name` on `Edit Settings` to set up an alternative name to be used when searching for that issue on DDL. You can have multiple Alternate Search Names by separating each with ``##``. If you would like one name in particular to be used first above everything else (even the CV name), put ``!!`` in front of the name in the Alternate Search Names field. 
