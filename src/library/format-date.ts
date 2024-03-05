const formatter = new Intl.DateTimeFormat(undefined, {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
});

function formatDate(date: Date) {
  return formatter.format(date).split("/").join("-");
}

export { formatDate };
