let tool = 0
/**
 * Generate a random number
 * 
 * between 0 and 2, inclusive
 * 
 * ⇒ Discrete random variable
 * 
 * ⇒ One trial — all outcomes are equally likely
 * 
 * ∴ Uniform Distribution
 */
// From: https://microbit.org/projects/make-it-code-it/rock-paper-scissors/?editor=python
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
