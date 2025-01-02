'use client'

const HISTORY_KEY = 'IMPEESA_HISTORY';

export const getHistory = () => JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

export const saveInHistory = (content: HistoryItem[]) => {
    const history = getHistory();

    const updatedHistory = history.concat(content)

    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory))
}

