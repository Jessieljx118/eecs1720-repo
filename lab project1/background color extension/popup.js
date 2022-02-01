function getCurrentTabUrl(callback) {

    let queryInfo = {
      active: true,
      currentWindow: true
    };
  
    chrome.tabs.query(queryInfo, (tabs) => {
      
      let tab = tabs[0];
  

      let url = tab.url;
      console.assert(typeof url === 'string', 'tab.url should be a string');
      callback(url);
    });
   
  }
  
  /**
 
   *
   * @param {string} color The new background color.
   */
  function changeBackgroundColor(color) {
    let script = 'document.body.style.backgroundColor="' + color + '";';
   
    chrome.tabs.executeScript({
      code: script
    });
  }
  
  /**
   *
   * @param {string} url URL whose background color is to be retrieved.
   * @param {function(string)} callback called with the saved background color for
   *     the given url on success, or a falsy value if no color is retrieved.
   */
  function getSavedBackgroundColor(url, callback) {
   
    chrome.storage.sync.get(url, (items) => {
      callback(chrome.runtime.lastError ? null : items[url]);
    });
  }
  
  /**
   *
   * @param {string} url URL for which background color is to be saved.
   * @param {string} color The background color to be saved.
   */
  function saveBackgroundColor(url, color) {
    let items = {};
    items[url] = color;
   
    chrome.storage.sync.set(items);
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    getCurrentTabUrl((url) => {
      let dropdown = document.getElementById('dropdown');
  
     
      getSavedBackgroundColor(url, (savedColor) => {
        if (savedColor) {
          changeBackgroundColor(savedColor);
          dropdown.value = savedColor;
        }
      });
  
     
      dropdown.addEventListener('change', () => {
        changeBackgroundColor(dropdown.value);
        saveBackgroundColor(url, dropdown.value);
      });
    });
  });