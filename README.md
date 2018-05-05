# ngx-bootstrap-product-tour
[![npm version](https://badge.fury.io/js/ngx-bootstrap-product-tour.svg)](https://badge.fury.io/js/ngx-bootstrap-product-tour)
## About

This is a product tour library built with Angular (2+).
`NgxBootstrapProductTourModule` is an implementation of the tour ui that uses [ngx-bootstrap](https://valor-software.com/ngx-bootstrap)  popovers to display tour steps.

For Angular 4 use package version 1.0.6 

For Angular 5 use package version 2.0.1

## Installation

1. `npm i ngx-bootstrap-product-tour ngx-bootstrap bootstrap`
2. Import `NgxBootstrapProductTourModule.forRoot()` into your app module
3. Make sure `RouterModule` is imported in your app module
4. Include bootstrap css somehow - i.e. in your `index.html` add this line:
    `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">`
    or if you are using angular-cli add to `angular-cli.json` add under styles
    ` "../node_modules/bootstrap/dist/css/bootstrap.min.css"`

## Usage

1. Add `<ngx-bootstrap-product-tour></ngx-bootstrap-product-tour>` to your root app component
2. Define anchor points for the tour steps by adding the `tourAnchor` directive throughout your app.

    ```html
    <div tourAnchor="some.anchor.id">...</div>
    ```
3.  Define your tour steps using `tourService.initialize(steps)`

    ```typescript
    this.tourService.initialize([{
      anchorId: 'some.anchor.id',
      content: 'Some content',
      title: 'First',
    }, {
      anchorId: 'another.anchor.id',
      content: 'Other content',
      title: 'Second',
    }]);
    ```
4. Start the tour with `tourService.start()`
5. Check out the [demo](https://nmilicic.github.io/ngx-bootstrap-product-tour/) for an example or [demo source code](https://github.com/NMilicic/ngx-bootstrap-product-tour/tree/master/src).

## TourService

The `TourService` controls the tour. Some key functions include

| Function | Description |
| ------------- | ------------- |
| start() | Starts the tour |
| startAt(stepId: number \| string) | Start the tour at the step with stepId or at the specified index |
| end() | Ends the tour |
| pause() | Pauses the tour |
| resume() | Resumes the tour |
| next() | Goes to the next step |
| prev() | Goes to the previous step |

## Step Configuration

Each step can have the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| stepId | string |  "" | A unique identifier for the step |
| anchorId | string | required | The anchor to which the step will be attached |
| title | string |  "" | The title of the tour step |
| content | string |  "" | The content text of the tour step |
| route | string | UrlSegment[] | undefined | The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. |
| nextStep | number | string | undefined | The step index or stepId of the next step. If undefined, the next step in the steps array is used. |
| prevStep | number | string | undefined | The step index or stepId of the previous step. If undefined, the previous step in the steps array is used. |
| placement |  'top' \| 'bottom' \| 'right' \| 'left' | 'top' | Where the tour step should placed with respect to the anchor. 
| preventScrolling | boolean | false | Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. |
| containerClass | string |  "" | Css class for popover container. |
| orphan | boolean |  false | Tour popover will be placed in the center of the screen, must have anchorId but it won't be shown next to that element. |
| promise | promise&lt;any&gt; |  "" | Step shows after promise has been resolved. |
| delay | number |  0 | Time in milliseconds before showing the tour step. |
| backdrop | boolean |  false | Shows/hides backdrop. You need to set backgroud color and z-index on class .tour-backdrop and higher z-index on .tour-step-backdrop. |

## Defaults

You can set default values in the `TourService.initialize` function.
```typescript
this.tourService.initialize(steps, {{ '{' }}
  route: '',
  placement: 'left',
  preventScrolling: true,
});
```
Any value explicitly defined in a step will override the default value.

## Event Observables

The `TourService` emits events that can be subscribed to like this:

```typescript
this.tourService.initialize$.subscribe((steps: IStep[]) => {{ '{' }}
  console.log('tour configured with these steps:', steps);
});
```

| Name | Payload | Emitted When |
| --- | --- | --- |
| stepShow$ | IStep | A step is shown |
| stepHide$ | IStep | A step is hidden |
| initialize$ | IStep[] | The tour is configured with a set of steps |
| start$ | IStep | The tour begins |
| end$ | any | The tour ends |
| pause$ | IStep | The tour is paused |
| resume$ | IStepI | The tour resumes |
| anchorRegister$ | string | An anchor is registered with the tour |
| anchorUnregister$ | string | An anchor is unregistered from the tour |

## Custom template

  You can also customize the tour step template by providing an `<ng-template>` inside the `<ngx-bootstrap-product-tour>`

  The default template is equivalent to this:

```html
<ngx-bootstrap-product-tour>
  <ng-template #tourStep>
    <p class="tour-step-content">{{tourService.currentStep.content}}</p>
    <div class="tour-step-navigation">
      <button *ngIf="tourService.hasPrev(tourService.currentStep)" class="btn btn-sm btn-default" (click)="tourService.prev()">« Prev</button>
      <button *ngIf="tourService.hasNext(tourService.currentStep)" class="btn btn-sm btn-default" (click)="tourService.next()">Next »</button>
      <button class="btn btn-sm btn-error" (click)="tourService.end()">End</button>
    </div>
  </ng-template>
</ngx-bootstrap-product-tour>
```
