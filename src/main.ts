import '../css/app.pcss'
import tailwindTest from './tailwind-test'
import {TypescriptClass} from './TypescriptClass'

const instanceNew = new TypescriptClass('test 123')

const test: Foo = instanceNew.makeFoo()

console.log(tailwindTest, test)
