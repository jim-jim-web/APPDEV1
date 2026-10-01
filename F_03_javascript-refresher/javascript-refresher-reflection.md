### 00_script_in_html.html
I learned the difference between a regular script and a `type="module"` script. The regular script executes the script tag immediately when encountered during the parse and then continue the parsing right after. While `type="module"` is deferred by default, meaning it reads the HTML first before executing the module. 

### 01_base_syntax.js
JS is case sensitive and must follow the proper naming convention like a variable with letter only, with `_` , or with `$` sign. While preventing a naming starts with number, with hyphen, `let` etc. Additionally, in JS it is a practice to use a camelCase but it does not mean that the all small letter and capital letter first naming convention are not valid.

### 02_variables.js
The two types of coercion outputs a different value based on their function. `==` converts the type before comparing both, that is why the output is always true. While `===` checks the value without converting the type, so it tells the true value of the data.

### 03_functions.js
I learned that functions are reusables, it means you can call it multiple times by changing the value of the parameter. Additionally, you can't add two returns in function instead you can make multiple values in one return.

### 04_objects.js
At first in confuse why there are two property mentioned ad i thought they are different. But now I understand what's inside an object are properties and then you can add another property without creating new object. I also learned that a function inside an object is called method.

### 05_arrays.js
Array have multiple values and list them in ordered and if we count them by index it start with 0. By using `push()` we can add another value in the array that placed at the end. While `shift()` removes an item in front. But one thing I notice is you can't remove an item placed in the middle of an array, you need to delete the front until you reach the middle and just add the front value before. The same logic with the `push()`.

### 06_control_structures.js
I learned that "If, else if, else" reads the condition from top to bottom. It go goes down below up until it finds the true condition. "for loop" on the other hand repeat itself depending on the condition you gave, a perfect example is counting from 1 to 10. While, "while loop" repeats itself while the condition is true.

### 07_dom.html
The important thing I learned here is that the DOM is the bridge to make a functional website. In simple word DOM is the middleman between HTML and JS. Thru DOM, JS can make the simple HTML into interactive by adding function like event listener that makes a website responsive.

### 08_essential_features.js
I learned about the destructuring is it is a faster way to get the properties of an object and make a variable for them without the need to write them seperately. While in spread operator combine an existing array to a new array by calling this inside the new array and the purpose is if you want take them all in one result.

### 09_tricky_parts.js
This part is just the same previously of the type coercion. The difference is they point out to always use `===` for the comparison of code to prevent the risk of unexpected bugs. 

### 10_let_const.js
The simple thing I understand in this part is `let` can be reassigned because this variable can make a new value. While `const` cannot because the value is constant. The only thing different is the `var` with a different scoping behaviour this is because it ignores the blocks where it belongs which they called block scope. That is why they replace it with `let`.

### 11_arrow_functions.js
The only I understand here is that arrow function is more convenient compare on a normal function. Because of its ability to convert to shorter form and other like implicit return when you only returning one expression.

### 12_destructuring.js
This part is the same as the previous destructuring, the only new is the parameter. And their differences isdestructuring happens in object uses property names, array uses position or order, and parameter is inside the parameter.

### 13_spread_rest.js
This part is also the same to the previous spread. Bu the difference now is you can now use spread no only in parameter but also in objects. Additionally the rest, what makes it different to the two is array and object spread tend to spread the contents out while rest collects multiple values into one array.

### 14_classes_inheritance.js
I undertand that a class is a blueprint for creating object and then you can create multiple object inside it. On the other hand, we can use `extend` to inherent the method of the original source. So we do not have to rewrite them all.  

### 15_modules_export.js
I learned that export is used to share or make the function available with the other files. And a module can only have one default export. While you can create multiple named export.

### 16_modules_import.js
Import is the opposite of export, you can get the exported by importing it to the other file. You can also import multiple export with a different exported files. Just be careful with the naming it should be match to the name exported.

### 17_logical_operators.js
I learned that AND (`&&`) not always returns a truthy value. This is due to the short circuiting, it stop checking and returns falsy value if the first value is false. Otherwise if its true it returns the next value Same with the OR (`||`) but opposite, it stops and returns truthy when the first value is true.  

### 18_ternary_nullish.js
I learned that ternary and if else condition is similar the only difference is ternary written in one line and it is used to produce a value. Other thing I noticed is the `||` and `??` although they provide fallback or default value. `||` treats 0 and "" as false while `??` it does not consider them as nullish.

### 19_strings_numbers.js
In this part I learned that `trim()` removes any space available in beginning and end of string. while `split()` split any space based on the separator that you give and turned them to array. There are multiple methods but one thing i like is the `includes()` where you can check whether the text you are looking is existing which is good for searching.

### 20_array_methods.js
This part are the different array methods where items are listed in array. Some that I learned is that `filter()` keeps only the item that pass the condition while it filter those do the met the condition. `find()` on the other hand find the first item that matches the given name.

### 21_errors_json.js
I learned in this part is similar to the DOM earlier. If DOM bridges the HTML and JS to be interactive. JSON act as the communication between browser and the server. When a server sends JSON text, JS can turn it to object thru `JSON.parse()` and to send the data back JS uses `JSON.stringify()`.

### 22_async_javascript.js
I learned that callback function that triggers only when its task is done. It can be interpreted to many things, one example is alarm clock where the alarm only trigger when the set time is met. Promise have also the same function as callback that waits to a slow task to finish but they differ in code structure. 

### 23_closures_scope.js
I learned that closure is function that remembers the variable in its scope. One example I can give is the any kind of history, google history for example. It remembers all your recent activity and your account is the scope and the only one has access.