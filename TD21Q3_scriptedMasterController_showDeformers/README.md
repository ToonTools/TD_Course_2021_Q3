# Building a custom master controller 

1. create a new "master controller" node in the node view
2. modify its [specifications](Specifications.xml) to the example
3. modify its [UI script](UI%20Script.xml) to the example
4. create the script that the **UI Script** tab is pointing to [mc_revealAllDeformers](mc_revealAllDeformers.js)
5. ensure the script file is included in the **Extra Files** tab so that it gets transfered if the asset is to be shared with artists with no access to the source location ( in this case its best to save the script in the scenes **Script/** folder)