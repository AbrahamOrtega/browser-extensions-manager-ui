import data from "../public/data.json";

export default async function getData() {
  // Simulate a delay to mimic an API call
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Return the data from the JSON file
  return data;
}
