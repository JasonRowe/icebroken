// button.component.ts
import { Component, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-go-button',
  standalone: true,
  template: '<button class="btn btn-outline-primary btn-lg btn-block py-2">{{ label }}</button>',
  animations: [
    // Define a trigger for the animation
    trigger('goAnimation', [
      // Define two states: normal and clicked
      state('normal',  style({
        opacity: 1,
      })),
      state('clicked',style({
        opacity: 0,
      })),
      // Define a transition from normal to clicked with a duration of 1 second
      transition('normal => clicked', animate('0.4s')),
      // Define a transition from clicked to normal with a duration of 0.5 seconds
      transition('clicked => normal', animate('0.2s'))
    ])
  ]
})
export class GoButtonComponent {
  // A variable to store the animation state
  animationState = 'normal';

  // A variable to store the button label
  @Input() label: string = '';

  // An event emitter to notify the parent component when the button is clicked
  @Output() buttonClicked = new EventEmitter<void>();

  // A function to toggle the animation state
  toggleAnimationState() {
    // If the state is normal, change it to clicked
    if (this.animationState === 'normal') {
      this.animationState = 'clicked';
    } else {
      // If the state is clicked, change it to normal
      this.animationState = 'normal';
    }
    console.log(this.animationState)
  }

  // A decorator to bind the animation to the host element
  @HostBinding('@goAnimation') get goAnimation() {
    return this.animationState;
  }

  // A decorator to listen to the click event on the host element
  @HostListener('click') onClick() {
    // Toggle the animation state
    this.toggleAnimationState();
    // Emit the buttonClicked event
    this.buttonClicked.emit();
    // Reset the animation state after a delay of 1 second
    setTimeout(() => {
      this.animationState = 'normal';
    }, 800);
  }
}
