
**PART 3**

**How the Frontend Communicates with the Backend**

The frontend communicates with the backend using HTTP requests made through `fetch` (or Axios) from the React Native app.  
A base URL (for example, `http://localhost:5050`) is used, and different endpoints like `/api/users` and `/api/users/:id` are called for specific operations.  
For example, when adding a user, the frontend sends a POST request with user data in JSON format to `/api/users/add`.  
Similarly, user data is fetched using `GET /api/users`, and delete/update actions call their respective endpoints.

---

**How API Responses Are Handled on the Frontend**

On the frontend, API responses are handled using `try-catch` blocks around async API calls.  
If the API call is successful, the response data is used to update the UI (for example, showing a success message or refreshing the user list).  
If an error occurs, the error message returned by the backend is displayed to the user using an alert or text message.  
This ensures that both success and error states are clearly communicated to the user.

---

**What Happens When an API Request Fails**

When an API request fails, the frontend catches the error and shows a user-friendly error message instead of crashing.  
For example, if the backend is down or returns an error, the app displays an alert indicating that something went wrong.  
The UI remains stable, and the user can retry the action if needed.  
This helps improve the overall user experience and makes the app more robust.

---

**PART 4**

**1. If the frontend is ready but the backend is not yet implemented, how would you continue working?**

If the backend is not ready, I would continue frontend development using mock data or dummy API responses.  
This allows me to complete UI screens, navigation, and form handling without waiting for the backend.  
Once the backend APIs are ready, I can replace the mock data with real API calls.  
This parallel development approach saves time and keeps progress moving.

---

**2. If an API is not responding, what are the first things you would check?**

First, I would check whether the backend server is running and listening on the correct port.  
Next, I would verify the API endpoint URL and HTTP method being used.  
I would also check the backend logs and database connection status.  
Finally, I would test the API using a tool like Postman to isolate whether the issue is frontend or backend related.

---

**3. How would you secure sensitive data such as database credentials and API keys in a real project?**

Sensitive data like database credentials and API keys should be stored in environment variables instead of hardcoding them.  
The `.env` file should be added to `.gitignore` so it is not pushed to version control.  
In production, environment variables can be managed using deployment tools or cloud services.  
This approach helps prevent accidental exposure of sensitive information.

---

**PART 5**

Out of the 5 listed points, the first 4 have been successfully implemented.
