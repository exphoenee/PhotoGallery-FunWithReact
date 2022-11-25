const convertIsoStringToLocale = (isoString: string, locale?: string) => {
  const date = new Date(isoString);
  return date.toLocaleString(locale);
};

export default convertIsoStringToLocale;
