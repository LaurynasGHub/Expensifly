export const findJsonElement = function findElementById(data, id) {
  if (!data) {
    return null;
  }

  if (data.id === id) {
    return data;
  }

  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      const result = findElementById(data[i], id);
      if (result) {
        return result;
      }
    }
  } else if (typeof obj === 'object') {
    for (let key in data) {
      const result = findElementById(data[key], id);
      if (result) {
        return result;
      }
    }
  }

  return null;
};
