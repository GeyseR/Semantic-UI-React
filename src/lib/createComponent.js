import {
  createComponent as felaCreateComponent,
  connect as felaConnect,
} from 'react-fela'
import hoistNonReactStatics from 'hoist-non-react-statics'

const createComponent = ({ component, rules }) => {
  const withRules = felaConnect(rules)(component)

  return hoistNonReactStatics(withRules, component)
}

export default createComponent


export const Foo = connect(rules)(class Foo {})
