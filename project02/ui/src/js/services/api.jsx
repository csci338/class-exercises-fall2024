const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    // completed
    const response = await fetch(`${rootURL}/api/users/${username}`);
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("User not found.");
        } else {
            throw new Error(`Error fetching user: ${response.statusText}`);
        }
    }
    return await response.json();
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;

    if (options.department) {
        baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        baseURL += `title=${options.title}&`;
    }
    if (options.days) {
        baseURL += `days=${options.days}&`;
    }
    if (options.classifications) {
        if (options.classifications.includes("di")) baseURL += `di=true&`;
        if (options.classifications.includes("dir")) baseURL += `dir=true&`;
        if (options.classifications.includes("honors")) baseURL += `honors=true&`;
        if (options.classifications.includes("fys")) baseURL += `fys=true&`;
        if (options.classifications.includes("arts")) baseURL += `arts=true&`;
        if (options.classifications.includes("service")) baseURL += `service=true&`;
    }

    console.log("Classifications selected:", options.classifications.includes());
    if (options.open === true) {
        baseURL += `is_open=true&`;
    }

    baseURL = baseURL.endsWith('&') ? baseURL.slice(0, -1) : baseURL;
    console.log(baseURL);
    const response = await fetch(baseURL);
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

// Fetch departments from the server
export async function fetchDepartments() {
    try {
        const response = await fetch(`${rootURL}/api/departments/`);
        if (!response.ok) {
            throw new Error(`Error fetching departments: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch departments:", error);
        return []; // Return an empty array as a fallback
    }
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
