
function doTestSimpleImage() {
    console.log("hi");
    var pptx = new PptxGenJS();
    var slide = pptx.addNewSlide();
    
    // EX: Image by local URL
    slide.addImage({ path:'images/image.png', x:1, y:1, w:4.0, h:4.0 });
    
    pptx.save('Demo-Images');
}
        