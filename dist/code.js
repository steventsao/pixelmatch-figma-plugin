(() => {
  // code.ts
  var init = () => {
    figma.showUI(__html__, { width: 800, height: 600 });
    const currentSelection = figma.currentPage.selection[0];
    currentSelection.exportAsync({ format: "PNG", constraint: { type: "SCALE", value: 2 } }).then((data) => {
      figma.ui.postMessage({ img: data, type: "selection-data" });
    });
    figma.ui.onmessage = (message) => {
      if (message["img-added"]) {
        const currentSelection2 = figma.currentPage.selection[0];
        currentSelection2.exportAsync({ format: "PNG" }).then((data) => {
        });
      } else if (message.type === "quit") {
        figma.closePlugin();
      }
    };
  };
  init();
})();
