import { RecommendationResponse } from '../types';

// Mock API response for demonstration purposes
export const getMaterialRecommendations = async (formData: any): Promise<RecommendationResponse> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        top_3_predictions: [
          "Plywood",
          "Brass",
          "Galvanized Steel"
        ],
        competitor_analysis: [
          {
            material: "Plywood",
            strength: "Medium",
            durability: "6/10",
            eco_friendly: "Yes",
            cost_estimate: "₹100000 - ₹500000",
            suitable_for_coastal_environment: "No",
            lead_time: "≤ 7 days",
            within_budget: "Yes",
            remarks: "Plywood offers good strength-to-weight ratio and is eco-friendly. However, standard plywood is highly susceptible to moisture and fungal decay in coastal environments. Marine-grade plywood is more resistant but significantly increases cost and may not meet the durability requirement of 9/10 without extensive treatment. Even marine-grade plywood will require regular maintenance in a coastal environment."
          },
          {
            material: "Brass",
            strength: "Medium-High",
            durability: "7/10",
            eco_friendly: "No",
            cost_estimate: "₹2000000 - ₹6000000",
            suitable_for_coastal_environment: "Yes",
            lead_time: "≤ 10 days",
            within_budget: "No",
            remarks: "Brass exhibits good corrosion resistance in coastal environments and offers decent strength. However, its high cost makes it less feasible within the given budget. It is not considered eco-friendly due to the energy intensive processes required for its manufacturing. While resistant to corrosion, it can suffer from dezincification in certain aggressive coastal conditions reducing mechanical properties over time. Durability is also less than ideal."
          },
          {
            material: "Galvanized Steel",
            strength: "High",
            durability: "8/10",
            eco_friendly: "No",
            cost_estimate: "₹800000 - ₹2000000",
            suitable_for_coastal_environment: "Yes",
            lead_time: "≤ 10 days",
            within_budget: "Yes",
            remarks: "Galvanized steel offers high strength and is more cost-effective than brass. The zinc coating provides corrosion protection in coastal environments. However, the coating can be scratched or damaged, leading to localized corrosion. Sacrificial corrosion of Zinc is common and frequent maintenance may be needed, particularly in harsh coastal environments to approach the desired durability. It is not considered eco-friendly."
          }
        ]
      });
    }, 1500);
  });
};