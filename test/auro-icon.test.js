/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable one-var */
/* eslint-disable no-undef */
import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import '../src/auro-icon.js';

describe('auro-icon', () => {
  it('icon is set', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-down"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');

    expect(svg).to.not.be.null;
  });

  it('icon is not set', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="notThere"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');

    expect(svg).to.not.be.null;
  });

  it('icon is missing properties', async () => {
    const el = await fixture(html`
      <auro-icon></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');
    const svg = el.shadowRoot.querySelector('svg');

    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');
    expect(svg).to.not.be.null;
  });

  it('auro-icon is using emphasis style', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" emphasis></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.not.have.class('primary');
    expect(div).to.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.not.have.class('disabled');
  });

  it('auro-icon is using accent style', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" accent></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.not.have.class('primary');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.have.class('accent');
    expect(div).to.not.have.class('disabled');
  });

  it('auro-icon is using disabled style', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up" disabled></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    const div = el.shadowRoot.querySelector('div');

    expect(div).to.not.have.class('primary');
    expect(div).to.not.have.class('emphasis');
    expect(div).to.not.have.class('accent');
    expect(div).to.have.class('disabled');
  });

  it('auro-icon is accessible', async () => {
    const el = await fixture(html`
      <auro-icon category="interface" name="chevron-up"></auro-icon>
    `);

    await waitUntil(() => el.svg, 'Element did not become ready');

    expect(el).to.be.accessible();
  });

  it('auro-icon custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-icon"));

    expect(el).to.be.true;
  });
});
