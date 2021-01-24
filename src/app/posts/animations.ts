import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';



export let bounceOutLeftAnimation = animation(
    animate('1s ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(10px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
    ]))
);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),

    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    )
]);

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{duration}} {{easing}}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fade = trigger('fade', [
    transition('void => *',
        useAnimation(fadeInAnimation)
    ),

    transition('* => void',
        [
            style({ opacity: 0 }),
            animate(2000)
        ])
]);

export let flyInOut = trigger('flyInOut', [
    state('void', style({ opacity: 0 })),
    transition('void => *',
        // animate("2s cubic-bezier(.61,.29,.07,1.02)")
        animate("2s ease-in")
    ),
    transition('* => void',
        animate("2s cubic-bezier(.61,.29,.07,1.02)"))

])

export let openClose = trigger('openClose', [
    state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
    })),
    state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
    })),
    // ...
    transition('* => *', [
        animate('1s', keyframes([
            style({ opacity: 0.1, offset: 0.1 }),
            style({ opacity: 0.6, offset: 0.2 }),
            style({ opacity: 1, offset: 0.5 }),
            style({ opacity: 0.2, offset: 0.7 })
        ]))
    ])
])