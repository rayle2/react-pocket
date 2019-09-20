export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'

// x补齐成0x
export const padLeft = (n) => {
    return n < 10 ? `0${n}` : n
}

export const range = (size, startA = 0) => {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr[i] = startA + i
    }
    return arr
}

export const parseToYearAndMonth = (str) => {
    const date = str ? new Date(str) : new Date
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
    }
}
