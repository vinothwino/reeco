export const formatMoney = (number: number) => new Intl.NumberFormat('en-IN').format(
    number,
)

