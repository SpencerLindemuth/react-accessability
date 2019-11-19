## React App with full accessibility

This project is a clone of my hooks practice lab found <a href="https://github.com/SpencerLindemuth/hooks-practice" alt="github link to react hooks source code">here</a>, built to be accessible by screen readers and utilize keyboard only navigation. 
I built this from scratch and avoided using external libraries.

I've added a select input for card font to further test keyboard navigation and screen reader compatability.

Each field is tabbable and includes proper labels using HTML's `for` attribute.

The business card itself is highlighted by screen readers using the HTML `title` tag, which highlights the tooltip on hover as well.

Each color block is tabbable as well using HTML 5 `tabIndex`, with proper tooltips declaring color name, and screen readers read each color name as they are selected.


