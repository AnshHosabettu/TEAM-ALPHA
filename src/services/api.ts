
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // This will be the URL for our Express backend

// Define types
export interface Member {
  _id?: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  image?: string;
  department?: string;
  joinDate?: string;
  skills?: string[];
}

// Create API methods
const api = {
  // Get all members
  getMembers: async (): Promise<Member[]> => {
    const response = await axios.get(`${API_URL}/members`);
    return response.data;
  },

  // Get a single member by ID
  getMemberById: async (id: string): Promise<Member> => {
    const response = await axios.get(`${API_URL}/members/${id}`);
    return response.data;
  },

  // Create a new member
  createMember: async (memberData: FormData): Promise<Member> => {
    const response = await axios.post(`${API_URL}/members`, memberData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  }
};

export default api;
