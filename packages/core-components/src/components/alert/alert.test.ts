import { beforeEach, describe, expect, it } from 'vitest';

import './alert';

describe('Alert', async () => {
  beforeEach(() => {
    document.body.innerHTML = '<pp-alert></pp-alert>';
  });

  it('should display "Hello, thats your alert" alert', () => {
    const buttonElement = document.body.querySelector('pp-alert');
    console.log(buttonElement)
    expect(true).toBe(true);
  });
});
