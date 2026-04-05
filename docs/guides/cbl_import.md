---
title: CBL Reading Lists
---

Mylar can use a well defined reading list file in CBL v1 format to add missing volumes and mark issues from the list as Wanted.  CBL files used for this purpose must be defined with ComicVine IDs such as those found at [the CBL ReadingLists repository](https://github.com/DieselTech/CBL-ReadingLists).

### Loading the File
The CBL Import screen can be reached via `Story Arcs -> CBL Import` or `Manage -> Advanced Options -> CBL Import`.  Once there, hit the `Upload a CBL File` button and select the list you want to load.  The Import Status will be updated and the table populated with the entries from the list.  If something has prevented list loading (bad file, missing IDs, etc.) this will be shown in the Import Status.

The table will be populated with the contents of the reading list, and the current status of each issue.  This will give you a preview of what volumes are to be added, and what issues will be marked as Wanted.  The Import Status will show a summary of missing items.  If you are happy to proceed, press the `Import Reading List` button.  The process will start in the background, initially adding any new volumes before updating all Wanted statuses in bulk.  You can track progress in the logs, or re-upload the CBL file and see the current status in the table.

### Options
- If you have the `Automatically Mark All Issues as Wanted` setting enabled in Mylar, you may not want this to happen for the new volumes being added from the reading list.  This can be controlled by the `Only mark issues from list as wanted` option before importing the reading list.  It will leave any issues not from the reading list as Skipped in new volumes.  If the volume is ongoing, and you have the global Mark All setting enabled, then those remaining skipped issues will end up being marked as wanted the next time Mylar refreshes the volume, but this should not affect older volumes.
- By defualt, the process will mark issues as Wanted if they are Skipped, Ignored, or Archived.  You may want to avoid Archived issues - they may have been renamed in a way that mylar cannot recognise them, or you are managing the storage elsewhere.  If so, you can toggle the `Do not mark Archived issues as Wanted` setting.

### Caveats
Adding volumes will use CV API calls.  While the import process will warn you if you are importing large quantities of volumes, it will not wait for [CV API limits](https://comicvine.gamespot.com/api/) to become available so you will still need to consider these yourself.
