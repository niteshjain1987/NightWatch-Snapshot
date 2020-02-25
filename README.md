Snapshot Testing For QA/Automation
==================================

Created by

[Nitesh Jain](/wiki/people/5a729775d5ee0c250738ca27?ref=confluence&src=profilecard)

Last updated [May 07, 2019]

**Snapshot Testing**

**Snapshot tests**are a very useful tool whenever you want to make sure your UI does not change unexpectedly. A typical**snapshot test**case for a website/mobile app renders a UI component, takes a**snapshot**, then compares it to a reference**snapshot**file stored alongside the**test**.

**Snapshot Testing  Benefits**

      For QA Manual And Automation

*   Easy to identify any change in DOM element.
*   Help to automation to check element id as same as previous.
*   Help to check integration testing will be in right.

      For Developer Unit Testing

*   Developer can compare snapshot  dom on every movement when dynamic change happened on DOM.
*   Get changes in DOM and update QA for update automation testing product.

Need to install **NPM**

1.  npm i mocha
2.  npm i clean-html
3.  npm i snap-shot
4.  npm i jsdom
5.  npm i jsdom-global

Note-: **NightWatch** does not have snapshot feature. So, We are use **mocha** to take snapshot. But **Mocha will be run by NightWatch.**

**Directory Structure **

As per over automation project. We have create "snapshot" folder under the "test" folder and follow the same structure as per below project menu bar. 


[![N|Solid](https://cdn.filestackcontent.com/pjD8BpNKSMehQjDmVb8y)](https://cdn.filestackcontent.com/pjD8BpNKSMehQjDmVb8y)
We Need to add also Mocha Test files which use to take snapshot and store under the root folder "\_\_snapshots\_\_".

![(https://cdn.filestackcontent.com/BNWcbq1ERPK7yeQzAzkS)](https://cdn.filestackcontent.com/BNWcbq1ERPK7yeQzAzkS)

If we are run automation code via visual code editor then you can setup lunch.json file which help to you  debug your test code with all file/indudal file.

You can see below the settings of launch.json file.

![(https://cdn.filestackcontent.com/qDjAHwHIQtKp2hmBdaEn)](https://cdn.filestackcontent.com/qDjAHwHIQtKp2hmBdaEn)

* * *

**\*\*Update Snapshot**

After creating snapshot. some time we need to update snapshot due to improvement, customer requirements and any valid changes on UI. So Here, We have some other settings which help us.

1.  If we want to update all snapshot by single command then we need to follow below instruction.

*   create root folder file(update\_snapshot.js) and paste code on it. → **(function(){ process.env.UPDATE\=1; })()**
*   add in package.json

      ![(https://cdn.filestackcontent.com/TTvchMDTW6F5x87J0688)](https://cdn.filestackcontent.com/TTvchMDTW6F5x87J0688) 

**\*\*we can update all snapshot by using → npm run snapshot-u**

     2. If we want to update single snapshot then we can use above technique but we just need to update file name against "test/snapshot".

     3. if we are use vscode then we need to update launch.json as per above information 

      ![(https://cdn.filestackcontent.com/uWX0pIUaSzKFyVKJGIYB)](https://cdn.filestackcontent.com/uWX0pIUaSzKFyVKJGIYB)

      and need to create file("snapshot.config.js") in root folder and paste below code.

      ![(https://cdn.filestackcontent.com/aTAGipEFQuSeHxnpPSQu)](https://cdn.filestackcontent.com/aTAGipEFQuSeHxnpPSQu)

Important-: If we want to run only snapshot test then we will need to small change in nightwatch.json file.
![(https://cdn.filestackcontent.com/EkBrPZffRv2ElZ0Qez36)](https://cdn.filestackcontent.com/EkBrPZffRv2ElZ0Qez36)
