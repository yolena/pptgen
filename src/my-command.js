import BrowserWindow from 'sketch-module-web-view'

export default function(context) {
  context.document.showMessage("It's alive 🙌")
  var sketch = require('sketch/dom')
  // detects the currently opened document
  var document = require('sketch/dom').getSelectedDocument()
  // gets the selected layers
  var selection = document.selectedLayers
  sketch.export(selection.layers, {output: "~/my-plugin/pptgen/images", formats: 'png'})
 
  //show a message at the bottom of Sketch
  //doc.showMessage("Image exported");

  const options = {
    identifier: 'unique.id',
  }
  const browserWindow = new BrowserWindow(options)
  browserWindow.loadURL('../pptgen/index.html');

  console.log("hi");
  var pptx = new PptxGenJS();
  var slide = pptx.addNewSlide();
  
  // EX: Image by local URL
  slide.addImage({ path:'images/image.png', x:1, y:1, w:4.0, h:4.0 });
  
  pptx.save('Demo-Images');
}


