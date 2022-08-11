function timePosted(createdAt) {
  try {
    const posted = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const difference = currentTime - posted;
    const seconds = difference / 1e3;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    if (minutes <= 60) {
      return `${minutes.toFixed()}m`;
    }
    if (hours <= 24) {
      return `${hours.toFixed()}h`;
    }
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "medium"
    }).format(posted);
  } catch (error) {
    throw new Error(`\u{1F4A9} Something went wrong: ${error}`);
  }
}
export {
  timePosted as t
};
