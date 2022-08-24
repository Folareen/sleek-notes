export default function displayDateAndTime() {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const fullDate = date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currentDate = `${fullDate}. ${time}`;

  return currentDate;
}
