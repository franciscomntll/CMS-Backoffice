export const formatTime = (date, locale, options) => {
    return new Intl.DateTimeFormat(locale, options).format(date)
}