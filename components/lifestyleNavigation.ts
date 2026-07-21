export const getNextLifestyleIndex = (
  currentIndex: number,
  key: string,
  itemCount: number
): number => {
  if (itemCount <= 0) return currentIndex;

  if (key === 'Home') return 0;
  if (key === 'End') return itemCount - 1;
  if (key === 'ArrowRight' || key === 'ArrowDown') {
    return (currentIndex + 1) % itemCount;
  }
  if (key === 'ArrowLeft' || key === 'ArrowUp') {
    return (currentIndex - 1 + itemCount) % itemCount;
  }

  return currentIndex;
};
