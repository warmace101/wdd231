export async function fetchActivities() {
  const response = await fetch("scripts/dungeons.json"); // Updated file name
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}
