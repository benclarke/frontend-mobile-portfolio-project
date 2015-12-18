## Optimization of Portfolio

###Steps Taken

####index.html:
1. Compressed and inlined both CSS files (styles and print)
2. Compressed and resized Pizzeria image
3. Removed comments from HTML

####Pizzas main.js and css file
line no.
*    404: added "use strict" (no performance diff.)
*    434 (and elsewhere I may have missed): Swapped querySelector with getElement method(s) for speed
*    464-485: Created array of pizza DOM elements, move dx function call and definition of newwidth var outside loop, used pizza array[0] in dx function call, but not newwidth (had no performance impact in that case).
*    500: Moved pizzaDiv assignment out of loop
*    530-560: Swapped querySelectors, moved elem definition out of loop, made "movers" qty dependent on screen size (but always seems to be 32 regardless of screen size. possible reference to 42???), set initial left pos. of movers to 0, centering them so I could, switch from style.left to style.transform for movement
*    565-575: turned scrolltop into local var outside loop, switched style change from left to transform