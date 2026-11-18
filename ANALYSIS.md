# Uploaded APK inspection notes

- APK package metadata included Capacitor configuration with app ID `com.burnclock.app`, app name `BurnClock`, and `dist` as the web asset directory.
- Bundled frontend is a minified React/JavaScript application with CSS and web assets. The main application bundle is approximately 1.5 MB.
- The bundle contains IndexedDB persistence for stores including `profile`, `templates`, `sessions`, `records`, `active`, `food_logs`, `saved_foods`, `photos`, `settings`, `daily_snapshots`, `daily_steps`, `slot_replies`, and `meal_slot_config`.
- Route strings and component names reveal food diary, meal camera/confirmation, barcode, saved foods, workout templates/session/history, body, profile, reminders, nutrition settings and subscription screens.
- The original bundle contains extensive calculation configuration and explanatory comments around BMR/TDEE, TEF accrual, step activity, workout calorie estimation and day-level energy accounting. Those algorithms are proprietary and are not copied here.
- BurnClock Pro implements a clean-room subset of those product domains. It does not claim exact behavioral parity with the original APK.
