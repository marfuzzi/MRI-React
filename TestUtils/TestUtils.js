export function mock(moduleMapPath, mockModule) {
  System.delete(System.normalizeSync(moduleMapPath))
  System.set(System.normalizeSync(moduleMapPath), System.newModule(mockModule))
}

export function testing(moduleMapPath) {
  System.delete(System.normalizeSync(moduleMapPath))
  const importPromise = System.import(moduleMapPath)
    .then((imported) => {
      console.log(imported)
      return imported
    })

  return {
    then(fn) {
      return importPromise.then(fn)
    },
    as(defaultName) {
      return importPromise.then(imported => {
        const obj = Object.assign({}, imported)
        obj[defaultName] = imported.default
        return obj
      })
    },
  }
}
