import React from 'react'
import { proxy, useSnapshot } from 'valtio'

const FuncComponentWithProxy = React.memo(
  ({ ClassComponent, proxys, actions }) => {
    let states = useSnapshot(proxy(proxys))
    let proxyStates = {}
    Object.keys(states).forEach(
      key => (proxyStates = { ...proxyStates, [`${key}State`]: states[key] }),
    )
    return <ClassComponent {...proxys} {...proxyStates} {...actions} />
  },
)

export const withProxy = (ClassComponent, proxys, actions) => {
  return () => (
    <FuncComponentWithProxy
      ClassComponent={ClassComponent}
      proxys={proxys}
      actions={actions}
    />
  )
}
