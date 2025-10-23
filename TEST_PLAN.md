# Analysis and Test Plan: Photo Gallery


## 1.	Functionality overview

-	Gallery View
-   Photo Details
-   Search
-    Login
-   Logout
-   Registration
-   Photo Upload
-   Photo Deletion
-   Album Creation
-   Album Deletion
-   Password Recovery


## 2. Automation prioritization


| Scenario | Priority | Reason for Automation |
|-----------|------------|--------------|
| Login with valid credentials | HIGH | It is used frequently by all users. It is highly critical — if it fails, users cannot access any protected parts of the system. Automating it allows for quick verification of authentication|
| Registration| HIGH | Core onboarding flow; must reliably validate inputs and create accounts |
| Photo Uplode| HIGH | Core functionality of the gallery — uploading is frequent and essential for the app’s purpose. Reliable operation is critical for user experience and system stability.
| Search functionlity| MEDIUM |  Frequently used feature — important to verify positive/empty results and input validation for consistent user experience. |
| Album creating| MEDIUM | Ensures users can create and organize albums correctly. Supports usability and data organization across sessions.
| Photo Delete| MEDIUM | Frequently used feature — critical for data integrity, user trust, and system stability.


## 3. Test Strategy

The testing approach combined manual (exploratory) and automated tests using the Playwright framework.  
The main focus was on the key functionalities: login, registration, search, album creation, and photo upload, as these are the most frequently used and critical parts of the application.  

Manual testing was used to check visual elements, menu behavior, and potential issues (e.g., *404 pages*), while automated tests covered stable and repetitive processes such as login, search, and album creation.  

All identified bugs were documented in the **BUG_REPORT.md** file, including detailed reproduction steps, expected and actual results, and screenshots.  



## 4. Test Case

| **Test Case** | **#1 Home page load** |
|----------------|------------------------|
| **Prerequisites** | • User has a reliable internet connection<br>• A compatible web browser (Chrome, Firefox, or Edge) is installed and functional<br>• The application URL is reachable: [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main) |
| **Test Case Steps** | 1. Open a supported web browser (Chrome, Firefox, Edge)<br>2. Go to [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main)<br>3. Observe how the home page loads |
| **Expected Result** | All key elements (images, text, and navigation links) appear correctly and without delay. |
| **Actual Result** | The home page loads successfully without errors. |
| **Pass / Fail** | Pass |

---




---

| **Test Case** | **#1.2 Gallery on home page load** |
|----------------|------------------------------------|
| **Prerequisites** | • User has a reliable internet connection<br>• A compatible web browser (Chrome, Firefox, or Edge) is installed and functional<br>• The application URL is reachable: [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main) |
| **Test Case Steps** | 1. Open a supported web browser (Chrome, Firefox, Edge)<br>2. Go to [https://demo.baasic.com/angular/starterkit-photo-gallery/main](https://demo.baasic.com/angular/starterkit-photo-gallery/main)<br>3. Click the button located at the end of the page |
| **Expected Result** | The button responds correctly when clicked and the corresponding action occurs (navigation to another page, loading more images, etc.) |
| **Actual Result** | Clicking the button successfully loads the image gallery. |
| **Pass / Fail** | Pass |

---




---

| **Test Case** | #1.3 Search bar |
|----------------|----------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Type in the name of photo that exists  <br>5.	Press enter |
| **Expected Result** | All photos associated with the specified name or tag appear in the gallery. |
| **Actual Result** | All images in the gallery with that name or tag are loaded. |
| **Pass/ Fail** | Pass |

---




---

| **Test Case** | #1.4 Search with all capital letters |
|----------------|------------------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Type in the name of photo that exists with all capital letters  <br>5.	Press enter |
| **Expected Result** | All photos associated with the specified name or tag appear in the gallery. |
| **Actual Result** | All images in the gallery with that name or tag are loaded. |
| **Pass/ Fail** | Pass |

---




---

| **Test Case** | #1.5 Search with numbers |
|----------------|-------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Enter the name of a photo that exists and contains numbers in its title (e.g. 111)  <br>5.	Press enter |
| **Expected Result** | All photos associated with the specified name or tag appear in the gallery. |
| **Actual Result** | All images in the gallery with that name or tag are loaded. |
| **Pass/ Fail** | Pass |

---




---

| **Test Case** | #1.6 Search with symbols |
|----------------|-------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Enter the name of a photo that exists and contains symbols in its title (e.g. ????)  <br>5.	Press enter |
| **Expected Result** | All photos associated with the specified name or tag appear in the gallery. |
| **Actual Result** | All images in the gallery with that name or tag are loaded. |
| **Pass/ Fail** | Pass |

---




---

| **Test Case** | #1.7 Search with spacing before first letter |
|----------------|---------------------------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Enter the name of a photo that exists and contains spacing before the word  <br>5.	Press enter |
| **Expected Result** | When the user adds spaces before the search term, the application should ignore the extra whitespace and correctly display all photos that correspond to the searched word. |
| **Actual Result** | Photos do not appear in the gallery after performing the search. |
| **Pass/ Fail** | Fail |

---




---

| **Test Case** | #1.8 Search with spacing within the word |
|----------------|------------------------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Enter the name of a photo that exists with spacing within the word  <br>5.	Press enter |
| **Expected Result** | Photos are not displayed when a space is added within the word |
| **Actual Result** | Photos are displayed |
| **Pass/ Fail** | Pass |

---




---

| **Test Case** | #1.9 Performing search with empty search bar |
|----------------|---------------------------------------------|
| **Prerequisites** | •	User has a reliable internet connection available  <br>•	A compatible web browser (such as Chrome, Firefox, or Edge) is installed and functional  <br>•	The application URL is reachable: https://demo.baasic.com/angular/starterkit-photo-gallery/main |
| **Test Case Steps** | 1.	Open a supported web browser (Chrome, Firefox, Edge)  <br>2.	Click https://demo.baasic.com/angular/starterkit-photo-gallery/main  <br>3.	Click the search button located in the upper right corner  <br>4.	Enter nothing  <br>5.	Press enter |
| **Expected Result** | Nothing should happen because the search bar is empty |
| **Actual Result** | Nothing happened; the page remains unchanged. |
| **Pass/ Fail** | Pass |
