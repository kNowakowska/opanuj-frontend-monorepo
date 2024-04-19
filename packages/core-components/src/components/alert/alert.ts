import {
  AlertDangerColor,
  AlertNeutralColor,
  AlertPrimaryColor,
  AlertSuccessColor,
  AlertWarningColor,
} from '@przeprogramowani/design-tokens';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pp-alert')
export class Alert extends LitElement {
  static override styles = css`
    :host {
      --sl-color-neutral-600: ${unsafeCSS(AlertNeutralColor)};
      --sl-color-success-600: ${unsafeCSS(AlertSuccessColor)};
      --sl-color-danger-600: ${unsafeCSS(AlertDangerColor)};
      --sl-color-warning-600: ${unsafeCSS(AlertWarningColor)};
      --sl-color-primary-600: ${unsafeCSS(AlertPrimaryColor)};
    }
  `;

  /** The alert's theme variant. */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
    | 'default' = 'primary';

  /** Opens the alert. */
  @property({ type: Boolean, reflect: true }) open = true;

  /** Enables closing the alert. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The alert's duration. */
  @property({ type: Number }) duration: number = Infinity;

  override render() {
    return html`<sl-alert
      variant=${ifDefined(this.variant)}
      open=${this.open}
      duration=${ifDefined(this.duration)}
      closable=${this.closable}
    >
      Hello, that's your alert!
    </sl-alert>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-alert': Alert;
  }
}
