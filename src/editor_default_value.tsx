export const defaultValue = '# Header 1 #\n## Header 2 ##\n### Header 3 ###             (Hashes on right are optional)\n## Markdown plus h2 with a custom ID ##   {#id-goes-here}\n[Link back to H2](#id-goes-here)\n\n```js\nvar x = "string";\nfunction f() {\n  return x;\n}\n```\n\n\x3c!-- html madness --\x3e\n<div class="custom-class" markdown="1">\n  <div>\n    nested div\n  </div>\n  <script type=\'text/x-koka\'>\n    function( x: int ) { return x*x; }\n  </script>\n  This is a div _with_ underscores\n  and a & <b class="bold">bold</b> element.\n  <style>\n    body { font: "Consolas" }\n  </style>\n</div>\n\n* Bullet lists are easy too\n- Another one\n+ Another one\n\nThis is a paragraph, which is text surrounded by\nwhitespace. Paragraphs can be on one\nline (or many), and can drone on for hours.\n\nNow some inline markup like _italics_,  **bold**,\nand `code()`. Note that underscores\nin_words_are ignored.\n\n````application/json\n  { value: ["or with a mime type"] }\n````\n\n> Blockquotes are like quoted text in email replies\n>> And, they can be nested\n\n1. A numbered list\n2. Which is numbered\n3. With periods and a space\n\nAnd now some code:\n\n    // Code is just text indented a bit\n    which(is_easy) to_remember();\n\nAnd a block\n\n~~~\n// Markdown extra adds un-indented code blocks too\n\nif (this_is_more_code == true && !indented) {\n    // tild wrapped code blocks, also not indented\n}\n~~~\n\nText with\ntwo trailing spaces\n(on the right)\ncan be used\nfor things like poems\n\n### Horizontal rules\n\n* * * *\n****\n--------------------------\n\n![picture alt](vite.svg "Title is optional")\n\n## Markdown plus tables ##\n\n| Header | Header | Right  |\n| ------ | ------ | -----: |\n|  Cell  |  Cell  |   $10  |\n|  Cell  |  Cell  |   $20  |\n\n* Outer pipes on tables are optional\n* Colon used for alignment (right versus left)\n\n## Markdown plus definition lists ##\n\nBottled water\n: $ 1.25\n: $ 1.55 (Large)\n\nMilk\nPop\n: $ 1.75\n\n* Multiple definitions and terms are possible\n* Definitions can include multiple paragraphs too\n\n*[ABBR]: Markdown plus abbreviations (produces an <abbr> tag)'
