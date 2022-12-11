Today we will talk about Scripts: async, defer:


  1) HTML <script> defer Attribute
  
  The defer attribute is a boolean attribute.
  If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.
  
      <p>...content before scripts...</p>
      <script>
        document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
      </script>

      <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

      <p>...content after scripts...</p>
  
    
  2) HTML async Attribute
  
  The async attribute is a boolean attribute.

  When present, it specifies that the script will be executed asynchronously as soon as it is available.
  
        <!DOCTYPE html>
        <html>
        <body>

        <h1>The script async attribute</h1>
  
        <p id="p1">Hello World!</p>
        <script src="demo_async.js" async></script>

        </body>
        </html>
  
  https://javascript.info/script-async-defer
