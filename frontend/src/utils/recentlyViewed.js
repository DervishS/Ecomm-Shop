import { get } from "mongoose";

const KEY = 'recentlyViewed';

export const getRecentlyViewed = () => {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (err) {
        console.error('Error getting recently viewed items from localStorage', err);
        return [];
    }
};

export const addRecentlyViewed = (productId, max=4) => {
    if (!productId) return;
    try {
        const list = getRecentlyViewed().filter((id) => id !== productId);
        list.unshift(productId);

        const truncated = list.slice(0, max);
        localStorage.setItem(KEY, JSON.stringify(truncated));
    } catch (err) {
        console.error('Error adding recently viewed item to localStorage', err);
    }
};

export const clearRecentlyViewed = () => {
  try {
    localStorage.removeItem(KEY);
  } catch (err) {
    console.error('clearRecentlyViewed error', err);
  }
};