tool = 0
"""

Generate a random number

between 0 and 2, inclusive

⇒ Discrete random variable

⇒ One trial — all outcomes are equally likely

∴ Uniform Distribution

"""
# From: https://microbit.org/projects/make-it-code-it/rock-paper-scissors/?editor=python

def on_gesture_shake():
    global tool
    tool = randint(0, 2)
    if tool == 0:
        basic.show_icon(IconNames.SMALL_SQUARE)
    elif tool == 1:
        basic.show_icon(IconNames.SQUARE)
    else:
        basic.show_icon(IconNames.SCISSORS)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
