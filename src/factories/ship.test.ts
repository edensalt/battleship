import { describe, expect, test } from 'vitest'
import Ship from './ship'

describe('Ship function', () => {
  const carrier = Ship('carrier')
  test('Ship function is defined', () => {
    expect(Ship).toBeDefined()
  })

  test('Ship can take a name string', () => {
    expect(carrier).toBeDefined()
  })

  test.skip('Ship can only have one of 5 accepted names', () => {
    const cruiser = Ship('cruiser')
    expect(cruiser).toBeUndefined()
  })

  test('Ship has a publicly accessible length of 5', () => {
    expect(carrier.length).toBe(5)
  })

  test('Ship has a publicly accessible hit function', () => {
    expect(carrier.hit).toBeDefined()
  })

  test('Ship has a publicly accessible total hits function', () => {
    expect(carrier.getTotalHits).toBeDefined()
  })

  test('Ship has a publicly accessible is sunk function', () => {
    expect(carrier.isSunk).toBeDefined()
  })

  test('Ship sinks when total hits equals total length', () => {
    carrier.hit()
    carrier.hit()
    carrier.hit()
    carrier.hit()
    carrier.hit()
    expect(carrier.getTotalHits()).toBe(5)
    expect(carrier.isSunk()).toBeTruthy()
  })
})