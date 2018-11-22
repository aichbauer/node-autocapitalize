const autocapitalize = (value, rule) => {
  if (!value) {
    return value;
  }

  if (rule === 'off' || rule === 'none' || !rule) {
    return value;
  }

  if (rule === 'on' || rule === 'sentences') {
    if (
      value.includes('.')
      || value.includes('?')
      || value.includes('!')
    ) {
      let returnValue = '';
      value.toLowerCase().split(/([.?!] )/g).forEach((item) => {
        returnValue += item
          ? `${item[0].toUpperCase()}${item.substring(1)}`
          : '';
      });

      return returnValue;
    }

    return `${value[0].toUpperCase()}${value.substring(1)}`;
  }

  if (rule === 'words') {
    let returnValue = '';
    value.toLowerCase().split(/([ ])/g).forEach((item) => {
      returnValue += item
        ? `${item[0].toUpperCase()}${item.substring(1)}`
        : '';
    });

    return returnValue;
  }

  if (rule === 'characters') {
    return value.toUpperCase();
  }

  return value;
};

export { autocapitalize };
