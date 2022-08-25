---
sidebar_position: 1
---

# Tablet settings

## Allow the tablet to have a separate touch screen

- Make sure the tablet is plugged in and the screen is expanded (click Windows+P, then `Expand Display` to make sure).
- Open the "Control Panel", and select "Large Icon Display".
- Click on `Tablet PC Settings` (or look for it in the search bar if it doesn't appear), then `Configure`.
- A message `Touch this screen if you want to identify it as the touch screen` appears on the main screen. Press `Enter` to move it to the second screen, and click on this second screen with the mouse to confirm.

## Prevent the opening of the notification center and the task view

- Open the registry editor with `Windows Key + R`, type `regedit` and validate.
- In the registry editor, navigate to `HKEY_LOCAL_MACHINE > SOFTWARE > Policies > Microsoft > Windows > EdgeUI`.
- If the `EdgeUI` folder exists, select it and double-click on the `AllowEdgeSwipe` key to replace the value `0` with `1`. Then restart the computer.
- Alternatively, right-click on the `Windows` folder, and select `New > Key`. Name this key `EdgeUI`.
- Then right-click on the new `EdgeUI` key, and select `New > 32-bit DWORD Value`. Name this value `AllowEdgeSwipe`, and validate.
- Double-click on this new value, and replace the value `0` with `1`. Then restart the computer.
