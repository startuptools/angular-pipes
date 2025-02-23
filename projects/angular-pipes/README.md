[![NPM Version](https://img.shields.io/npm/v/@startuptools/angular-pipes.svg)](https://npmjs.org/package/@startuptools/angular-pipes)
[![Build Status](https://github.com/startuptools/angular-pipes/actions/workflows/main.yml/badge.svg)](https://github.com/startuptools/angular-pipes/actions)
[![Downloads](https://img.shields.io/npm/dt/@startuptools/angular-pipes.svg)](https://npmjs.org/package/@startuptools/angular-pipes)

# @startuptools/angular-pipes

**@startuptools/angular-pipes** is a pipes library for `Angular`.

## Changelog

Check out the [changelog](./CHANGELOG.md) to check all the latest changes.

## Contribute

Read the [contributing guidelines](./CONTRIBUTING.md)

## Pipes

You can find the documentations in the [`docs`](./docs) folder.

### Collections (array)

- [`empty`](./docs/array.md#empty)
- [`head`](./docs/array.md#head)
- [`initial`](./docs/array.md#initial)
- [`join`](./docs/array.md#join)
- [`last`](./docs/array.md#last)
- [`tail`](./docs/array.md#tail)
- [`uniq`](./docs/array.md#uniq)
- [`without`](./docs/array.md#without)
- [`intersection`](./docs/array.md#intersection)
- [`union`](./docs/array.md#union)
- [`range`](./docs/array.md#range)
- [`map`](./docs/array.md#map)
- [`pluck`](./docs/array.md#pluck)
- [`where`](./docs/array.md#where)
- [`firstOrDefault`](./docs/array.md#firstordefault)
- [`orderBy`](./docs/array.md#orderby)
- [`reverse`](./docs/array.md#reverse)
- [`count`](./docs/array.md#count)
- [`some`](./docs/array.md#some)
- [`every`](./docs/array.md#every)
- [`shuffle`](./docs/array.md#shuffle)
- [`take`](./docs/array.md#take)
- [`takeUntil`](./docs/array.md#takeuntil)
- [`takeWhile`](./docs/array.md#takewhile)
- [`drop`](./docs/array.md#drop)
- [`deep`](./docs/array.md#deep)
- [`chunk`](./docs/array.md#chunk)
- [`flatten`](./docs/array.md#flatten)

### Boolean

- [`greater`](./docs/boolean.md#greater)
- [`greaterOrEqual`](./docs/boolean.md#greaterorequal)
- [`less`](./docs/boolean.md#less)
- [`lessOrEqual`](./docs/boolean.md#lessorequal)
- [`equal`](./docs/boolean.md#equal)
- [`notEqual`](./docs/boolean.md#notequal)
- [`identical`](./docs/boolean.md#identical)
- [`notIdentical`](./docs/boolean.md#notidentical)
- [`isNull`](./docs/boolean.md#isnull)
- [`isUndefined`](./docs/boolean.md#isundefined)
- [`isNil`](./docs/boolean.md#isnil)
- [`isNumber`](./docs/boolean.md#isnumber)
- [`isString`](./docs/boolean.md#isstring)
- [`isFunction`](./docs/boolean.md#isfunction)
- [`isArray`](./docs/boolean.md#isarray)
- [`isObject`](./docs/boolean.md#isobject)
- [`isDefined`](./docs/boolean.md#isdefined)

### Math

- [`bytes`](./docs/math.md#bytes)
- [`ceil`](./docs/math.md#ceil)
- [`floor`](./docs/math.md#floor)
- [`round`](./docs/math.md#round)
- [`degrees`](./docs/math.md#degrees)
- [`radians`](./docs/math.md#radians)
- [`random`](./docs/math.md#random)
- [`pow`](./docs/math.md#pow)
- [`sqrt`](./docs/math.md#sqrt)
- [`ordinal`](./docs/math.md#ordinal)

### Aggregate

- [`groupBy`](./docs/aggregate.md#groupby)
- [`min`](./docs/aggregate.md#min)
- [`max`](./docs/aggregate.md#max)
- [`mean`](./docs/aggregate.md#mean)
- [`sum`](./docs/aggregate.md#sum)

### String

- [`leftpad`](./docs/string.md#leftpad)
- [`rightpad`](./docs/string.md#rightpad)
- [`pad`](./docs/string.md#pad)
- [`trim`](./docs/string.md#trim)
- [`split`](./docs/string.md#split)
- [`replace`](./docs/string.md#replace)
- [`match`](./docs/string.md#match)
- [`test`](./docs/string.md#test)
- [`newlines`](./docs/string.md#newlines)
- [`capitalize`](./docs/string.md#capitalize)
- [`upperfirst`](./docs/string.md#upperfirst)
- [`template`](./docs/string.md#template)
- [`encodeURI`](./docs/string.md#encodeuri)
- [`encodeURIComponent`](./docs/string.md#encodeuricomponent)
- [`decodeURI`](./docs/string.md#decodeuri)
- [`decodeURIComponent`](./docs/string.md#decodeuricomponent)
- [`repeat`](./docs/string.md#repeat)
- [`truncate`](./docs/string.md#truncate)
- [`slugify`](./docs/string.md#slugify)
- [`stripTags`](./docs/string.md#striptags)
- [`latinize`](./docs/string.md#latinize)
- [`wrap`](./docs/string.md#wrap)
- [`with`](./docs/string.md#with)
- [`reverseStr`](./docs/string.md#reversestr)

### Object

- [`keys`](./docs/object.md#keys)
- [`toArray`](./docs/object.md#toarray)
- [`defaults`](./docs/object.md#defaults)

## Install

### npm / yarn

```
npm install @startuptools/angular-pipes --save
yarn add @startuptools/angular-pipes
```

## How to use

Check the [`documentation`](./docs) for how to import your pipes in your `NgModule` and how to use individual pipes.

## Tests

```
yarn
yarn test
```

## License

[`MIT`](./LICENSE.md)
