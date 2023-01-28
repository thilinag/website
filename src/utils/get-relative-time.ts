const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const YEAR_IN_DAYS = 365;
const MONTH_IN_DAYS = 30;

export function getRelativeTime(timestamp: number) {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / DAY_IN_MILLISECONDS
  );

  if (Math.abs(daysDifference) > YEAR_IN_DAYS) {
    return rtf.format(Math.ceil(daysDifference / YEAR_IN_DAYS), "year");
  }

  if (Math.abs(daysDifference) > MONTH_IN_DAYS) {
    return rtf.format(Math.ceil(daysDifference / MONTH_IN_DAYS), "month");
  }

  return rtf.format(daysDifference, "day");
}
