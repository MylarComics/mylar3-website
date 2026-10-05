---
title: Send Web downloads to JDownload2
---

Mylar can delegate web/DDL file downloads to [JDownload2](https://jdownloader.org/jdownloader2) (JD2), which may provide most people with a better user experience.

## Setup
[Download](https://jdownloader.org/download/index) and install your operating system's JD2 client

### Within JD2:
- Settings -> Advanced -> Search for **Remote API**
  - <img width="486" height="65" alt="image" src="https://github.com/user-attachments/assets/38d30516-4d5d-48a9-bff5-7b1866c94126" />
  - <img width="193" height="139" alt="image" src="https://github.com/user-attachments/assets/03404bb6-1425-424b-898f-9bcfd772050f" />
- Enable **Deprecated API**
- Disable **Deprecate API localhost only**
  - <img width="858" height="203" alt="image" src="https://github.com/user-attachments/assets/a08f2a5c-47e1-4b5a-9cb6-70b835298d9c" />
- Choose a port and make sure that port is exposed in your JD2 instance (or just leave the default port)
- _Make sure not to expose the JD2 instance to the internet_

### Within Mylar:
- _Settings/Config > Search providers_
  - Enable **Send to JD2**
  - Set the JD2 URL to **http://JD2_IP:PORT**
    - Hostname can be used as well, just make sure to add the port or reverse proxy it
  - Set the JD2 download path/destination
    - This location _must_ match in _both_ Mylar and JD2
    - If using containers, the download location must be mapped the same
      - Let's say for Mylar you have:
        - volumes:
          - /media/downloads/JD2:/JD2
      - Set the same in your JD2 compose so that _for both containers, the locations on the right side match_
