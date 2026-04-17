---
title: Docker
description: How to install via Docker image
---
# Installation - Docker Image

## Requirements

In addition to the [base requirements](base_requirements):

- A [docker](https://docs.docker.com/engine/install/) compatible runtime
- basic understanding of the command line
- [docker-compose](https://docs.docker.com/compose/) \[optional\]


## Installation

1. Pull the docker image of choice
    * For [stable](https://github.com/MylarComics/mylar3/) releases: `docker pull lscr.io/linuxserver/mylar3:latest`
    * For [development](https://github.com/MylarComics/mylar3/tree/nightly) releases: `docker pull lscr.io/linuxserver/mylar3:nightly`
  
    **BE AWARE**: If the development releases break, you get to keep the parts.
1. Run the image
    * Using `docker run`:
        ```
          docker run -d \
          --name=mylar3 \
          -e PUID=1000 \
          -e PGID=1000 \
          -e TZ=Etc/UTC \
          -p 8090:8090 \
          -v /path/to/data:/config \
          -v /path/to/comics:/comics \
          -v /path/to/downloads:/downloads \
          --restart unless-stopped \
          lscr.io/linuxserver/mylar3:latest
        ```

    * Using `docker compose`:
      ```yaml
      services:
        mylar3:
          image: lscr.io/linuxserver/mylar3:latest
          container_name: mylar3
          environment:
            - PUID=1000
            - PGID=1000
            - TZ=Etc/UTC
          volumes:
            - /path/to/data:/config
            - /path/to/comics:/comics
            - /path/to/downloads:/downloads
          ports:
            - 8090:8090
          restart: unless-stopped
      ```
1. Access the Web Interface under `http://<your-host>:8090`
