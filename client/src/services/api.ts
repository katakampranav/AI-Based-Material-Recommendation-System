import axios from 'axios';
import { FormData, RecommendationResponse } from '../types';

const API_URL = 'http://localhost:5000/api/v1';

export const getMaterialRecommendations = async (formData: FormData): Promise<RecommendationResponse> => {
  try {
    const payload = {
      Project_Budget: formData.budget,
      Environment: formData.environment,
      Required_Strength: formData.requiredStrength,
      Durability_Priority: formData.durability,
      Eco_Preference: formData.ecoFriendly,
      Max_Lead_Time: formData.leadTime
    };

    const response = await axios.post(`${API_URL}/predict`, payload);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};