import { mount } from '@vue/test-utils'
import Component from '../src/metismenu.vue'

describe('Component', () => {
    const wrapper = mount(Component, {
        propsData: {
            id: 'test',
            menu: []
        }
    })

    test('is a Vue instance', async () => {
        await expect(wrapper.isVueInstance()).toBeTruthy()
        await expect(wrapper.vm.id).toBe('test')
    })
})
