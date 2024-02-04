# Head

- Google Fonts
    - Nunito
    - Meebo

- Icons
    - font-awesome
    - bootstrap icons

- Stylesheets
- This page uses 4 additional stylesheets
    - animate css has a stylesheet. Animate css uses most keyframes to create animation.  Basically changing the position and timeing of an element to give the appearance of animation
    - OWL has a stylesheet but I won't go into that because I won't be using it for this projet because it is deprecated and no longer suported.
    - bootstrap stylesheet
    - regulat css stylesheet by the creator, who mostly used it for button and navigation styling.

# Body

- the first element is the spinner.  It uses the following classes
    - show which is ues to display the spinner
    - bg-white background color white
    - d-flex is using flexbox
    - tranlate-middle, positions the element in the middle
    - w-100 is width 100%, vh-100 is height 100, and top 50 is 50px from the top of the screen
    - align-items cneter and justify contect center is used with flexbox layout to center the items both vertically and horizontally

- navbar
    - nav created the main navigation bar container
    - navbar-expand-lg expands the navbar to full width on large screens
    - bg-white gives it a white background
    - navbar-light set the content of the navbar to a light color
    - shadow adds a drop shadow
    - sticky-top fixes the navbar to the top when you scroll
    - p-0 removes padding
- a
    - a link which in this case navigates to the home page
    - navbar-brand styles the logo
    - d-flex uses flexbox
    - align-items-center - vertically centers the navbar
    - px-4 px-lg-5 adds padding at different screen sizes
- h2
    - m-0 removes margin
    - text-primary set the color
    - fa fa-book me-3 is for the icon
- button
    - navbar-toggler me-4 styles the hamburger menu button
    - data-bs-toggle=collapse creates a collapsible menu for the nav links
    - navbar-toggler-icon is for the hamburger menu
- div
    - collapse navbar-collapse hides content by default
    - navbar-nav ms-auto p-4 p-lg-0 styles the nav links with margin and padding
    - nav-item nav-link styles the nav links
    - nav-link dropdown-toggle creates a dropdown menu
    - dropdown-item holds the dropdown menu items
    - btn btn-primary py-4 px-lg-5 d-none d-lg-block styles the button
    - fa fa-arrow-right arrow icon

- carousel
    I won't be using the carousel owl because it is deprecated

** for the rest I will only explain classes that were not previously defined

- service
    - container container-xxl defines a container with extra large width
    - row starts the grid layout
    - col-lg-3 col-sm-6 shows different grid layouts for different screen sizes
    - wow fadeInUp is for the animation
    - mb-3 is bottom margin
- about
    - position-relative defines the position relative to the the image
    - img-fluid position-absolute makes the image responsive and positions
    - w-100 and h-100 are width and height set at 100%
    - object-fit cover is used to resize image keeping it as large as possible if resized
    - section-title bg-white text-start text-primary pe-3 styles and formats the section title
- categories
    - position-relative: Creates a positioning context for its children using relative coordinates.
    - d-block: Makes the element behave like a block-level element, starting a new line and taking up full width.
    - overflow-hidden: Hides content that overflows the element's boundaries, clipping it out of view.
    - h-100: Sets the element's height to 100% of its parent container, making it fill the vertical space.
- the rest all use the same variation of above

