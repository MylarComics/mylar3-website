---
title: Download Options
---

## Post-processing
It is imperative that you enable the post-processing option if you require post-processing (_Configuration --> Quality & Post-Processing --> Enable Post-Processing_)

### DDL
When using DDL, post-processing will be initiated immediately upon successful completion. By default the items are downloaded to the cache directory location and removed after post-processing. However, if you wish to change the default directory location, specify the full directory location in the config.ini `ddl_location` field.

### Newsgroups
There are 2 ways to perform post-processing within Mylar (CDH & ComicRN detailed [here](https://github.com/mylar3/mylar3/wiki/CDH-or-ComicRN)), however you cannot use both options simultaneously and CDH is highly encouraged. 

### AirDC++
We have added AirDC++ support to Mylar, to enable the checkbox is under (_Configuration --> Search Providers --> AirDC++_) once checked you'll have options to setup your information as below:

- _Address:Port_ this is your AirDC++'s instance accessible via Mylar. **Please note: if you are using containers please point it to the host's IP & your port that is exposed or to your dockerhost's name if accesible to Mylar)**
- _Username_ this is referencing your AirDC++ username, not your hub username that is handled 100% in the AirDC program.
- _Password_ again this is referecing the AirDC++ instance.
- _Downloads Directory_ this is the folder where Mylar will see the downloads from AirDC when they are complete. **Please note: Within containers if the paths are mapped differnetly put the path Mylar can see, not the host path, nor the AirDC++ container's path)
- _Search Hubs_ comma separated, leave blank for all, these are the hubs (or servers) you want to search for comics. If you only use AirDC for comics it's safe to leave blank.
- _Announce Hub_ this is the hub that has a bot (or multiple depending on the hubs you're in) that lists new releases as they come, this is used to populate an AirDC++ RSS style feature.
- _Announce Bots_ these are the usernames of the bots in the above hubs, again comma separated.

### Torrents

## Please note torrents "work" in that if you have an indexer that posts individual issues rahter than packs that are named somewhat sanely they would get grabbed. If this indexer exists, the team is completely unaware of it. Consider torrents a waste of searching time at this juncture.

There is no completed processing for torrents. There are methods available however:

**Torrent client on same machine as Mylar installation**
- _Configuration tab --> Quality & Post-Processing --> Post-Processing_
- set the post-processing action to copy if you want to seed your torrents, otherwise move
  - Enable Folder Monitoring
  - Folder location to monitor: set to the full location where your finished torrents are downloaded to.
  - Folder Monitor Scan Interval: do NOT set this to < 1 minute. Anywhere from 3-5 minutes should be ample.

**Torrent client on different machine than Mylar**
- Use [harpoon](https://github.com/evilhero/harpoon/) to retrieve items back to your local install as soon as they are completed and have post-processing occur immediately (also works with other automated solutions).
- Any other method that involves having the files localized and then have Folder Monitor monitor the location for files.

**Torrent client (rtorrent/deluge) on different machine than Mylar**
- a built-in option for these clients that will monitor for completion and then perform post-processing on the given items.
- files are located in the `post-processing/torrent-auto-snatch` location within the mylar directory.
- read the read.me therein for configuration / setup.
