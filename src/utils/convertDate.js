export function convertDate(currentDate) {
    if (currentDate) return currentDate.split('-').reverse().join('/');

    return '-'
}