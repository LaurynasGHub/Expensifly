export const dayOrdinal = function dayOrdinalSwitch(dayNo) {
  switch (dayNo) {
    case 1:
      return 'st';

    case 2:
      return 'nd';

    case 3:
      return 'rd';

    default:
      return 'th';
  }
};
