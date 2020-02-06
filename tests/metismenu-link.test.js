import { mount } from '@vue/test-utils'
import Component from '../src/metismenu-link.vue'

describe('Component', () => {
    const wrapper = mount(Component, {
        propsData: {
            item: {}
        }
    })

    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('has a link', () => {
        expect(wrapper.contains('a')).toBe(true)
    })
})
