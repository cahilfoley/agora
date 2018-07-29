const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }

  for (let i = 0; i < args.length; i++) {
    action[argNames[i]] = args[i]
  }

  return action
}

export default makeActionCreator
