export const formatDate = (date: string) => {
  const currentDate = new Date();
  
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const compareDate = new Date(date);

  if (
    compareDate.getDate() === yesterdayDate.getDate() &&
    compareDate.getMonth() === yesterdayDate.getMonth() &&
    compareDate.getFullYear() === yesterdayDate.getFullYear()
  ) {
    return "Yesterday";
  }

  const beforeYesterdayDate = new Date(currentDate);
  beforeYesterdayDate.setDate(currentDate.getDate() - 2);

  if (compareDate < beforeYesterdayDate) {
    const month = compareDate.getMonth() + 1;
    const day = compareDate.getDate();
    const year = compareDate.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return dateToTime(compareDate)
}

export const dateToTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
