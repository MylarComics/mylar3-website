---
title: CDH / ComicRN
---

##**We cannot stress enough that CDH will handle nearly every use case, `ComicRN` is considered deprecated though not removed.**##

To post-process files that have downloaded via newsgroups - the two available choices are [Completed Download Handling (CDH)](#completed-download-handling-(cdh)) or [ComicRN](#comicrn). The preferential choice is CDH, but there were use-cases for ComicRN though rarely would this be an answer as of 2026. Here are some of the advantages / disadvantages of each method:

**Completed Download Handling**
- Does not have to wait for the given issue to finish post-processing before being able to download and queue up the next issue for post-processing.
- Makes better use of the post-processing queue within Mylar which holds all the active post-processing jobs (since it doesn't have to wait).
- It knows the exact IssueID and ComicID that are attached to the specific file since it was initiated by Mylar. This results in much, much better accuracy when it comes to post-processing.


**ComicRN**
- Has to wait for the post-processing to finish before it can move on to the next item in the queue.
- It has to rely on filename matching in order to successfully match things up in order to post-process. Whlie it's usually pretty good as knows some of the matching information, it's not always accurate, especially if the filenames being downloaded are named generically.
- If you download items outside of Mylar, you can have the ComicRN script run after the download(s) and Mylar will post-process them accordingly provided the series exist on your watchlist.


## Completed Download Handling (CDH) ##
  ### What is it ###
  CDH monitors the active queue of your download client (SABnzbd / NZBGet) to see when the file that it sent to it is completed. Once it's completed checks the history of the given client to find the issue that completed. It then initiates a direct post-process against that file against the series & issue it knows it goes against.

  ### How to set it up ###
- For the given download client (SABnzbd / NZBGet) simply click on the Enable Completed Download Handling option.
- Make sure that you have a category set for comics within your client, and then set it within Mylar.

## ComicRN ##
  ### What is it ###
  ComicRN is a python script that you set in your download client to run automatically when a download completes for a specific category. Your download client initiates the script ( so you need to make sure you have python installed if you're running the docker version ) to tell Mylar where and what the file is that just downloaded. Mylar will then look for the file in the given location, and provided it can access it, will post-process it.

  ### How to set it up ###
  - You need to enable the Mylar APIKey for this to work (_Configuration --> Web Interface --> API --> Enable API --> Generate --> Save Configuration_).
  - Within the _post-processing/_ folder there are 2 files (**autoProcessComics.py** and **autoProcessComics.cfg.sample**)
  - Within the _post-processing/_ folder there are 2 directories (**nzbget**, **sabnzbd**) and within each of these client folders is a **ComicRN.py** script that is to be used with the respective download client.
  - Edit the autoProcessComics.cfg.sample file:
    - enter your Mylar ```host```, ```port```, ```apikey``` (generated from above), and ```ssl```(**0** for no, **1** for yes)
    - save the ```autoProcessComics.cfg.sample``` as ```autoProcessComics.cfg.```
  - Copy **autoProcessComics.py**, **autoProcessComics.cfg** and the respective **ComicRN.py** into your SABnzbd/NZBGet scripts directory (or wherever your download client stores its scripts).
  - Make sure SABnzbd/NZBGet is setup to have a 'comic-related' category that points it to the ComicRN.py script that was just moved. 
  - Ensure in Mylar that the category is named exactly the same.
