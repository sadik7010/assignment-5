

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   
Answer:r:getElementById একটি একক DOM উপাদান প্রদান করে | getElementsByClassName একটি HtmlCollection প্রদান করে|querySelector ব্যবহার করা হয় DOM ট্রি থেকে একটি একক উপাদান নির্বাচন করতে, document.querySelectorAll ব্যবহার করা হয় DOM ট্রি থেকে একাধিক উপাদান নির্বাচন করতে ।

 
2. How do you **create and insert a new element into the DOM**?
 
  Answer: : Document.createElement() এটা নতুন এলিমেন্ট তৈরি করতে ব্যবহার করা হয় এবং insert করতে append(), append child() ইত্যাদি ব্যবহার করা হয়।
3. What is **Event Bubbling** and how does it work?

answer:Event Bubbling হলো event প্রথমে child element এ ঘটে, তারপর উপরের parent elements এ propagate করে। event প্রথমে child element এ ঘটে, তারপর ধাপে ধাপে তার parent থেকে document পর্যন্ত উঠে যায়।
   
4. What is **Event Delegation** in JavaScript? Why is it useful?
   
 Answer:   Event Delegation হলো parent element এ একটাই event listener বসিয়ে child elements এর events handle করার উপায়। Performance better হয়। Dynamic elements handle করা যায় | Code সহজ হয় |
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() কোনো element এর default আচরণ  বন্ধ করে। stopPropagation() event টাকে parent element গুলোতে bubble হওয়া বন্ধ করে।


