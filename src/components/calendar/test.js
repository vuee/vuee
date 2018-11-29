import Comp from './index.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('Calendar', () => {
  it('basic', () => {
    const wrapper = mount(Comp, {
      propsData: {
        title: 'title'
      }
    })
    expect(wrapper.name()).to.equal('calendar')
  })
})
