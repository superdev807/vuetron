import test from 'tape';
import { mount } from 'vue-test-utils';
import { shallow, createLocalVue } from 'vue-test-utils';
import MutationDisplay from '../../src/components/event-stream/displays/MutationDisplay.vue';
import Mutations from '../../src/components/assets/Mutations.vue';
import RevertBtn from '../../src/components/assets/RevertBtn.vue';

const localVue = createLocalVue()
test('MutationDisplay.vue renders', t => { 
  t.plan(3);
  const wrapper = mount(MutationDisplay, {
      localVue,
      propsData: {
          event: {
            display: {
                changes: [1]
            },
            status: 'active'
          },
          evIdx: "evIdx"
      }
  });  
  t.test('MutationDisplay mounts', st => {
    st.plan(1);
    st.equal(typeof wrapper, 'object');
  });
  t.test('MutationDisplay renders with at least 1 Mutations component', st => {
    st.plan(1);
    const mutations = wrapper.findAll(Mutations);
    st.ok(mutations.length === 1);
  });
  t.test('MutationDisplay renders with at least 1 RevertBtn component', st => {
    st.plan(1);
    const revertBtn = wrapper.findAll(RevertBtn);
    st.ok(revertBtn.length > 0);
  });
});
