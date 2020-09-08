const baseUrl = "https://5f56d6c332f56200168bd98b.mockapi.io/api/v1/tasks";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });

export const fetchTasksList = () =>
  fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((tasksList) =>
      tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }))
    );

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
