### Modules

### Transform On Scroll

  - Needs to be directly wrapping element
  
  - Works with relative, absolute and fixed elements
  
  - params (they are all optional) :

      - tasks : object containing an array of the tasks you which to apply to the element.
          - rotate
          - scale
          - translate
      
      - rotateSpeed : takes an int. The lower the number, the faster the rotation.
      
      - initialScale : set initial scale of your element here.
      - maxScale : set maximum scale of your element here.
      
      - TranslateSpeed : speed of the parallax.
      - Translate X, Y and Z.

### Reveal

  Used to add classes to a section when the element is in view. It uses the
  IntersectionObserver API so it's blazing fast.
    
  - Just wrap your content inside the Reveal component and pass the class  you which to use on the content.
    
  - Props :
      
  - className: class you want to give to the container.
    
    - key (optional): only if you're in a loop and want to have the component as a wrapper.
 
    - threshold: Either a single number or an array of numbers whic indicate at what percentage of the target's visibility the observer's callback should be executed.

    - rootMargin: Margin around the root. Can have values similar to the CSS margin property,e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
