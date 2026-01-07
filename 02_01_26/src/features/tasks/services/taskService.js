import { taskAPI } from "./taskAPI";

export const taskService = {
  async getAll() {
    const response = await taskAPI.get();
    return response.data;
  },

  async create(task) {
    const response = await taskAPI.post("", task);
    return response.data;
  },

  async delete(id) {
    await taskAPI.delete(`/${id}`);
    return { id };
  },

  async update(id, updates) {
    const response = await taskAPI.patch(`/${id}`, updates);
    return response.data;
  },
};
