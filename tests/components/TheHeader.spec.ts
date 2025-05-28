import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains navigation links', () => {
    const wrapper = mount(TheHeader)
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })
}) 