import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <div class="slds-text-heading_large">Hello, world!</div>
            <div class="slds-text-body_regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <button class="slds-button">Button Base</button>
        <button class="slds-button slds-button_neutral">Button Neutral</button>
        <button class="slds-button slds-button_brand">Button Brand</button>
        <button class="slds-button slds-button_outline-brand">Button Outline Brand</button>
        <button class="slds-button slds-button_destructive">Button Destructive</button>
        <button class="slds-button slds-button_success">Button Success</button>
      </div>
    );
  }
}
