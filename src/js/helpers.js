export const toDateTime = (timestamp) => {
  const time = new Date(timestamp);
  return time.toLocaleString("sv-SE");
};

export const toDate = (timestamp) => {
  const time = new Date(timestamp);
  return time.toLocaleString("sv-SE").split(" ")[0];
};

export const toTime = (timestamp) => {
  const time = new Date(timestamp);
  return time.toLocaleString("sv-SE").split(" ")[1];
};

export const timeFromNow = (time) => {
  let unixTime = new Date(time).getTime();
  if (!unixTime) return;
  let now = new Date().getTime();
  let difference = unixTime / 1000 - now / 1000;
  let tfn = {};

  tfn.when = "now";
  if (difference > 0) {
    tfn.when = "future";
  } else if (difference < -1) {
    tfn.when = "past";
  }

  difference = Math.abs(difference);

  if (difference / (60 * 60 * 24 * 365) > 1) {
    tfn.unitOfTime = "years";
    tfn.time = Math.floor(difference / (60 * 60 * 24 * 365));
  } else if (difference / (60 * 60 * 24 * 45) > 1) {
    tfn.unitOfTime = "months";
    tfn.time = Math.floor(difference / (60 * 60 * 24 * 45));
  } else if (difference / (60 * 60 * 24) > 1) {
    tfn.unitOfTime = "days";
    tfn.time = Math.floor(difference / (60 * 60 * 24));
  } else if (difference / (60 * 60) > 1) {
    tfn.unitOfTime = "hours";
    tfn.time = Math.floor(difference / (60 * 60));
  } else {
    tfn.unitOfTime = "seconds";
    tfn.time = Math.floor(difference);
  }

  return `${tfn.time} ${tfn.unitOfTime} ${
    tfn.when == "past" ? "ago" : "ahead"
  }`;
};

export const setSavedStorage = (key, obj) => {
  window.localStorage.setItem(key, JSON.stringify(obj));
};
