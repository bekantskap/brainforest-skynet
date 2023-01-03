export const dateCleaner = (date) => {
  const yearSlice = date.slice(0, 4);

  const monthSlice = date.slice(5, 7);
  let monthString = "";

  switch (monthSlice) {
    case "01":
      monthString = "Januari";
      break;
    case "02":
      monthString = "Februari";
      break;
    case "03":
      monthString = "Mars";
      break;
    case "04":
      monthString = "April";
      break;
    case "05":
      monthString = "Maj";
      break;
    case "06":
      monthString = "Juni";
      break;
    case "07":
      monthString = "Juli";
      break;
    case "08":
      monthString = "Augusti";
      break;
    case "09":
      monthString = "September";
      break;
    case "10":
      monthString = "Oktober";
      break;
    case "11":
      monthString = "November";
      break;
    case "12":
      monthString = "December";
      break;
    default:
      "";
  }
  const cleanedDateString = monthString + " " + yearSlice;
  return cleanedDateString;
};
