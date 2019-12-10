## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you want to check the API data you'll need to configure a port, by default it's on 3001.

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
