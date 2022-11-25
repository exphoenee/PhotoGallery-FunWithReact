import convertIsoStringToLocale from "./convertIsoStringToLocale";

const convertDateToRender = (timeString: string, locale?: string) => {
  return convertIsoStringToLocale(timeString, locale);
};

export default convertDateToRender;
