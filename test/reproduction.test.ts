/// <reference types="vite" />
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import App from '../src/App.vue';

const HelloWorld = defineComponent({
  template:
    '<p>Hello world! <div data-region=switch class="a b c" style="width: 500px; height: 500px"></div></p>',
});

describe('@vue/test-utils with inline component', () => {
  test('classes() call', () => {
    const el = mount(HelloWorld, {}).get('[data-region=switch]');
    expect(el.classes()).toContain('a');
  });

  test('html() call', () => {
    const el = mount(HelloWorld, {}).get('[data-region=switch]');
    expect(el.html()).toContain('class="a b c');
  });

  test('attributes() call', () => {
    const el = mount(HelloWorld, {}).get('[data-region=switch]');
    expect(el.attributes()['data-region']).toBe('switch');
  });
});

describe('@vue/test-utils with imported component', () => {
  test('classes() call', () => {
    const el = mount(App, {}).get('[data-region=switch]');
    expect(el.classes()).toContain('a');
  });

  test('html() call', () => {
    const el = mount(App, {}).get('[data-region=switch]');
    expect(el.html()).toContain('class="a b c');
  });

  test('attributes() call', () => {
    const el = mount(App, {}).get('[data-region=switch]');
    expect(el.attributes()['data-region']).toBe('switch');
  });
});
