function csok(...params) {
  if (typeof params[0] === 'string') {
    return params[0].concat(...params.slice(1));
  } else if (typeof params[0] === 'object') {
    return Object.assign(...params);
  }
}

module.exports = csok;

// return Object.assign(...params);
