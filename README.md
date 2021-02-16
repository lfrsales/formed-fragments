# Formed Fragments - Liferay 7.3

> NOTICE: This project has been moved to the [Demo Fragment Collections](https://github.com/lfrsales/demo-fragment-collections) project.

This project has been created with [generator-liferay-fragments][1]. You can read
how to manage this project in the [generator documentation][2].

[1]: https://www.npmjs.com/package/generator-liferay-fragments
[2]: https://www.npmjs.com/package/generator-liferay-fragments#usage

## Deploy

1. In `./config.json` you must configure the past to your deploy folder.
2. Run `npm run deploy` to build and deploy the zip file to your deploy folder.

If you don't want to build the fragments yourself you can copy the zip from the `./build` folder to your deploy directory.

## Fragments

### Display Page & Collection Fragments

These fragments make use of the info or asset object that is available on either a Display Page or from the context of a Collection Display fragment.

#### Categories

Displays a list of categories. Can be configured to ignore a vocabulary of categories or to display nothing if no categories exist for the entity.

![Categories](/images/categories.png)

#### Map View

For assets that include geolocation it will display a map of the location.

![Map View](/images/mapview.png)

### Utility Fragments

#### Constrained Image

Use to constrain an image to the ratio of your choosing. This is especially helpful in lists when you want all the images to be the same size. The configuration allows you to define a height and width which will be used to determine the ratio.

![Constrained Image](/images/constrainedImage.png)

#### Flex

A simple wrapper around bootstraps flex utils. This allows you to configure the number of dropzones you want rendered within your flex container. You can then set all your flex properties to render your content as you like.

![Flex](/images/flex.png)

#### Fragment Context Display

When placed on either Display Page or in the context of a Collection Display fragment the `fragment context display will list all the properties on the context objects that are available. Use this fragment when creating your own fragments.

![Fragment Context Display](/images/fragmentContextDisplay.png)
