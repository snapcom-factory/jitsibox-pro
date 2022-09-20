---
sidebar_position: 2
---

# Installation with Chrome

### Prevent exiting from full screen mode (Kiosk Mode)

- Create a new `JitsiBox` user by clicking on the 👤 icon at the top right, then `Add` at the bottom of the pop-up.
- Click `Continue without account`, then put `JitsiBox` as the name and choose a profile color.
- Make sure the `Create desktop shortcut` box is checked, and click `OK`.
- Right-click on the newly created desktop icon, then select `Properties`.
- At the end of the `Target` line, type `--kiosk` without any quotes, and click `OK`.


### Enable the display of a window in Kiosk Mode on each screen

- Copy and paste the icon to open Chrome in Kiosk Mode (to have an icon for the controller and for the main screen)
- Right click on the icon for the main screen, then select `Properties`.
- In the `Target` line, just before `--kiosk`, add `--window-position=0,0`.
- Just after `--kiosk`, add `localhost:3002` (or the address of the main screen if it is not hosted locally).
- Then add `--user-data-dir=c:/monitor1` (the order of the parameters is important).
- Click `OK`.
- Do the same thing on the controller icon, replacing `0,0` with `1680,0` in `--window-position`, `localhost:3002` with `localhost:3000` and `monitor1` with `monitor2` in `--user-data-dir`.
