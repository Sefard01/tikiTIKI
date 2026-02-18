## how to get forlders and files name using this command 


 Get-ChildItem -Directory | ForEach-Object {
>>     Write-Output "{
>>   id: `"$($_.Name)`",
>>   title: `"$($_.Name -replace '_',' ')`",
>>   banner: `"$($_.Name)/topic.png`",
>>   videos: ["
>>     
>>     Get-ChildItem $_.FullName -Filter *.mp4 | ForEach-Object {
>>         Write-Output "    { title: `"$($_.BaseName)`", file: `"$($_.FullName -replace '\\','/')`" },"
>>     }
>> 
>>     Write-Output "  ],
>>   pdfs: ["
>> 
>>     Get-ChildItem $_.FullName -Filter *.pdf | ForEach-Object {
>>         Write-Output "    { title: `"$($_.BaseName)`", file: `"$($_.FullName -replace '\\','/')`" },"
>>     }
>> 
>>     Write-Output "  ]
>> },"
>> }


## and this output 

{
  id: "01_Introduction",
  title: "01 Introduction",
  banner: "01_Introduction/topic.png",
  videos: [
    { title: "01_Welcome_to_Delta.browser", file: "D:/me/MERN/Play/01_Introduction/01_Welcome_to_Delta.browser.mp4" },
    { title: "02_What_is_the_Internet.browser", file: "D:/me/MERN/Play/01_Introduction/02_What_is_the_Internet.browser.mp4" },
    { title: "03_What_is_Web_Development.browser", file: "D:/me/MERN/Play/01_Introduction/03_What_is_Web_Development.browser.mp4" },
    { title: "04_What_will_we_learn.browser", file: "D:/me/MERN/Play/01_Introduction/04_What_will_we_learn.browser.mp4" },
  ],
  pdfs: [
  ]
},
{
  id: "02_Prerequisites",
  title: "02 Prerequisites",
  banner: "02_Prerequisites/topic.png",
  videos: [
    { title: "01_Prerequisites.browser", file: "D:/me/MERN/Play/02_Prerequisites/01_Prerequisites.browser.mp4" },
  ],
  pdfs: [
    { title: "02_Installation Guide", file: "D:/me/MERN/Play/02_Prerequisites/02_Installation Guide.pdf" },
  ]
},
{
  id: "03_HTML_Level_1_Part_A",
  title: "03 HTML Level 1 Part A",
  banner: "03_HTML_Level_1_Part_A/topic.png",
  videos: [
    { title: "01_Introduction_to_HTML.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/01_Introduction_to_HTML.browser.mp4" },       
    { title: "02_HTML_Elements_Tags.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/02_HTML_Elements_Tags.browser.mp4" },
    { title: "03_Hello_World.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/03_Hello_World.browser.mp4" },
    { title: "04_Paragraph_Element.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/04_Paragraph_Element.browser.mp4" },
    { title: "05_Heading_Elements.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/05_Heading_Elements.browser.mp4" },
    { title: "06_Practice_Qs.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/06_Practice_Qs.browser.mp4" },
    { title: "07_Boilerplate_Code.browser", file: "D:/me/MERN/Play/03_HTML_Level_1_Part_A/07_Boilerplate_Code.browser.mp4" },
  ],
  pdfs: [
  ]
},
{
  id: "04_HTML_Level_1_Part_B",
  title: "04 HTML Level 1 Part B",
  banner: "04_HTML_Level_1_Part_B/topic.png",
  videos: [
    { title: "01_Lists_in_HTML.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/01_Lists_in_HTML.browser.mp4" },
    { title: "02_Attributes_in_HTML.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/02_Attributes_in_HTML.browser.mp4" },
    { title: "03_Anchor_Element.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/03_Anchor_Element.browser.mp4" },
    { title: "04_Image_Element.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/04_Image_Element.browser.mp4" },
    { title: "05_Practice_Qs.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/05_Practice_Qs.browser.mp4" },
    { title: "06_More_HTML_Tags.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/06_More_HTML_Tags.browser.mp4" },
    { title: "07_Comments_in_HTML.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/07_Comments_in_HTML.browser.mp4" },
    { title: "08_Is_HTML_Case_Sensitive.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/08_Is_HTML_Case_Sensitive.browser.mp4" },   
    { title: "09_Practice_Qs.browser", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/09_Practice_Qs.browser.mp4" },
  ],
  pdfs: [
    { title: "10. HTML (Level 1) Qs", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/10. HTML (Level 1) Qs.pdf" },
    { title: "11. HTML Level1 (Ans)", file: "D:/me/MERN/Play/04_HTML_Level_1_Part_B/11. HTML Level1 (Ans).pdf" },
  ]
},
{
  id: "05_HTML_Level_2",
  title: "05 HTML Level 2",
  banner: "05_HTML_Level_2/topic.png",
  videos: [
    { title: "01_Inline_vs_Block.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/01_Inline_vs_Block.browser.mp4" },
    { title: "02_Div_Element.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/02_Div_Element.browser.mp4" },
    { title: "03_Span_Element.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/03_Span_Element.browser.mp4" },
    { title: "04_Hr_Tag.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/04_Hr_Tag.browser.mp4" },
    { title: "05_Sup_Sub_Tags.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/05_Sup_Sub_Tags.browser.mp4" },
    { title: "06_Practice_Qs.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/06_Practice_Qs.browser.mp4" },
    { title: "07_Semantic_Markup.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/07_Semantic_Markup.browser.mp4" },
    { title: "08_Semantic_Tags.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/08_Semantic_Tags.browser.mp4" },
    { title: "09_Practice_Qs.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/09_Practice_Qs.browser.mp4" },
    { title: "10_HTML_Entities.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/10_HTML_Entities.browser.mp4" },
    { title: "11_Practice_Qs.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/11_Practice_Qs.browser.mp4" },
    { title: "12_Emmets.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/12_Emmets.browser.mp4" },
    { title: "13_Further_Understanding_HTML.browser", file: "D:/me/MERN/Play/05_HTML_Level_2/13_Further_Understanding_HTML.browser.mp4" },
  ],
  pdfs: [
    { title: "14. HTML Level 2 (Qs)", file: "D:/me/MERN/Play/05_HTML_Level_2/14. HTML Level 2 (Qs).pdf" },
    { title: "15. HTML Level 2 (Ans)", file: "D:/me/MERN/Play/05_HTML_Level_2/15. HTML Level 2 (Ans).pdf" },
  ]
},



## but output have a proble "the problem is file path is local (window path)
## copy this data from terminal and save data.js file in js folder 
## and go to js folder in terminal and run this command 


(Get-Content data.js) -replace 'D:/me/MERN/Play/','' | Set-Content data.js

## using this command to make local path to normal path 



