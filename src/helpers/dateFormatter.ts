export const dateFormatter = (date: Date, locale: string = "ru"): string => new Intl.DateTimeFormat(locale).format(date);
