import { mount } from '@vue/test-utils'
import Component from '../src/metismenu-item.vue'

describe('Component', () => {
    const wrapper = mount(Component, {
        propsData: {
            item: {},
            level: 123
        }
    })

    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.vm.level).toBe(123)
    })
})
