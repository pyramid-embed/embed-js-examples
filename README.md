
# Pyramid Analytics Embed JS Examples

This is a basic example of using Pyramid's embedding APIs to embed live analytic content created in Pyramid into any other web site or application using JavaScript

  

For more help on embedding with Pyramid, especially instructions on authentication, scenarios and use of REST APIs together with embedding, please see [online help](https://help.pyramidanalytics.com/Content/Root/developer/reference/Extensibility/Embedding/Embedding.htm)

## Running the examples site

  

Download\Clone the source code from this repository.

Open the `src\config.json` file, and update the demo properties accordinaly (See below).

Open a command-line prompt in the folder where the downloaded source code is located.
Run `npm i`.

Run `node run`.

Browse to the example site at `http://localhost:8000`.

You can change the port number using the `--port` flag ('-o' for short).

## Updating config.json

#### Getting started
provide a content ID for a simple green Discover report or red Present dashboard

#### Filtering
provide a content ID for a simple green Discover report with the unique name for a member from a hierarchy you want to use to filter the report by

#### Multi- Filtering
provide a content ID for a simple green Discover report with two or more unique names for members from a hierarchy you want to use to filter the report by

#### Targeting
provide a content ID for a red Present dashboard. Indicate the name of a target defined in the dashboard and then the unique name for a filter for a member from a hierarchy you want to use to filter the dashboard by, via the target

#### Multi Content
provide a content ID for a simple green Discover report and the content ID for a red Present dashboard

#### Goto Slide
provide a content ID for a red Present dashboard with 2 or more slides.

  
#### Locate your content ID
To find content ID’s, see this topic in Pyramid’s online help: https://help.pyramidanalytics.com/Content/Root/MainClient/CMS/actions/Actions%20Panel.htm?tocpath=Client%20Help%7CPro%20Client%7CContent%20Management%7CContent%20Actions%20and%20Tools%7C_____12
