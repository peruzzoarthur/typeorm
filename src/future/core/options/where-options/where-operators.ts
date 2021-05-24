import { AnyEntity, AnyEntitySchema } from "../../entity"
import { WhereOperator } from "./index"

export function Any<Entity extends AnyEntity, ValueType>(
  ...values: ValueType[]
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "any",
    entity: null as any,
    valueType: null as any,
    value: values,
  })
}

export function Between<Entity extends AnyEntity, ValueType>(
  first: ValueType,
  second: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "between",
    entity: null as any,
    valueType: null as any,
    value: [first, second],
  })
}

export function Equal<Entity extends AnyEntity, ValueType>(
  value: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "equal",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function Like<Entity extends AnyEntity, ValueType>(
  value: string,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "like",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function ILike<Entity extends AnyEntity, ValueType>(
  value: string,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "ilike",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function In<Entity extends AnyEntity, ValueType>(
  ...values: ValueType[]
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "in",
    entity: null as any,
    valueType: null as any,
    value: values,
  })
}

export function LessThan<Entity extends AnyEntity, ValueType>(
  value: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "lessThan",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function LessThanOrEqual<Entity extends AnyEntity, ValueType>(
  value: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "lessThanOrEqual",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function MoreThan<Entity extends AnyEntity, ValueType>(
  value: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "moreThan",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function MoreThanOrEqual<Entity extends AnyEntity, ValueType>(
  value: ValueType,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "moreThanOrEqual",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function Raw<Entity extends AnyEntity, ValueType>(
  value: string,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "raw",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function Escaped<Entity extends AnyEntity, ValueType>(
  value: string,
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "escaped",
    entity: null as any,
    valueType: null as any,
    value: value,
  })
}

export function Column<Entity extends AnyEntity, ValueType>(
  name: Entity extends AnyEntitySchema ? keyof Entity["columns"] : string,
  // alias?: string
): WhereOperator<Entity, ValueType> {
  return () => ({
    "@type": "WhereOperator",
    name: "column",
    entity: null as any,
    valueType: null as any,
    value: name,
  })
}

// export function Not<Entity extends AnyEntity, ValueType>(
//   value: ValueType | WhereOperator<Entity, ValueType>,
// ): WhereOperator<Entity, ValueType> {
//   return () => ({
//     "@type": "WhereOperator",
//     name: "not",
//     entity: null as any,
//     valueType: null as any,
//     value: value,
//   })
// }
